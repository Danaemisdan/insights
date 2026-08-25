import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  
  const { token, content } = req.body;
  if (token !== 'fake-jwt-token-123') return res.status(401).json({ success: false, message: 'Unauthorized' });

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const REPO_OWNER = process.env.GITHUB_OWNER || 'mahes'; // Fallback
  const REPO_NAME = process.env.GITHUB_REPO || 'insights-main'; // Fallback
  const BRANCH = process.env.GITHUB_BRANCH || 'main';

  // If no GitHub token, fallback to local filesystem (for local dev)
  if (!GITHUB_TOKEN) {
    try {
      const dataPath = path.join(process.cwd(), 'public', 'data.json');
      fs.writeFileSync(dataPath, JSON.stringify(content, null, 2));
      return res.status(200).json({ success: true, message: 'Saved locally' });
    } catch(e) {
      console.error(e);
      return res.status(500).json({ success: false, message: 'Failed to save locally' });
    }
  }

  // Push to GitHub API
  try {
    const getUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/frontend/public/data.json?ref=${BRANCH}`;
    const getRes = await fetch(getUrl, {
      headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}`, 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'CMS-Dashboard' }
    });
    
    let sha = null;
    if (getRes.ok) {
      const getJson = await getRes.json();
      sha = getJson.sha;
    }

    const contentEncoded = Buffer.from(JSON.stringify(content, null, 2)).toString('base64');
    const putUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/frontend/public/data.json`;
    
    const putRes = await fetch(putUrl, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}`, 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'CMS-Dashboard' },
      body: JSON.stringify({
        message: 'Update content via CMS Dashboard',
        content: contentEncoded,
        sha: sha,
        branch: BRANCH
      })
    });

    if (!putRes.ok) {
      const errTxt = await putRes.text();
      console.error("GitHub API Error:", errTxt);
      throw new Error('Failed to commit to GitHub');
    }

    res.status(200).json({ success: true, message: 'Saved to GitHub' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to publish changes to GitHub.' });
  }
}
