import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  
  const { token, imageBase64, filename } = req.body;
  
  if (token !== 'fake-jwt-token-123') return res.status(401).json({ success: false, message: 'Unauthorized' });
  if (!imageBase64 || !filename) return res.status(400).json({ success: false, message: 'No image data' });

  // Remove data URL prefix (e.g., data:image/png;base64,)
  const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
  const uploadPathRelative = `/images/uploads/${Date.now()}-${filename}`;

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const REPO_OWNER = process.env.GITHUB_OWNER || 'mahes'; // Fallback
  const REPO_NAME = process.env.GITHUB_REPO || 'insights-main'; // Fallback
  const BRANCH = process.env.GITHUB_BRANCH || 'main';

  if (!GITHUB_TOKEN) {
    try {
      const uploadDir = path.join(process.cwd(), 'public', 'images', 'uploads');
      if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
      }
      const dataPath = path.join(process.cwd(), 'public', uploadPathRelative);
      fs.writeFileSync(dataPath, base64Data, 'base64');
      return res.status(200).json({ success: true, url: uploadPathRelative });
    } catch(e) {
      console.error(e);
      return res.status(500).json({ success: false, message: 'Failed to upload locally' });
    }
  }

  // Push to GitHub API
  try {
    const putUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/frontend/public${uploadPathRelative}`;
    
    const putRes = await fetch(putUrl, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}`, 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'CMS-Dashboard' },
      body: JSON.stringify({
        message: `Upload image ${filename} via CMS Dashboard`,
        content: base64Data,
        branch: BRANCH
      })
    });

    if (!putRes.ok) {
      const errTxt = await putRes.text();
      console.error("GitHub API Error:", errTxt);
      throw new Error('Failed to commit image to GitHub');
    }

    res.status(200).json({ success: true, url: uploadPathRelative });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to upload image to GitHub.' });
  }
}
