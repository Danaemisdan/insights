export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  
  const PASSCODE = process.env.ADMIN_PASSCODE || 'insights123';
  
  if (req.body.passcode === PASSCODE) {
    res.status(200).json({ success: true, token: 'fake-jwt-token-123' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid passcode' });
  }
}
