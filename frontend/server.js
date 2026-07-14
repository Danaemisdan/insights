import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'public', 'data.json');
const PASSCODE = 'insights123'; 

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({}, null, 2));
}

// Login
app.post('/api/login', (req, res) => {
    const { passcode } = req.body;
    if (passcode === PASSCODE) {
        res.json({ success: true, token: 'fake-jwt-token-123' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid passcode' });
    }
});

// Save Content
app.post('/api/publish', (req, res) => {
    const { token, content } = req.body;
    if (token !== 'fake-jwt-token-123') {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(content, null, 2));
    res.json({ success: true });
});

// Upload Image
app.post('/api/upload', (req, res) => {
    const { token, imageBase64, filename } = req.body;
    if (token !== 'fake-jwt-token-123') {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    if (!imageBase64) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    const uploadPathRelative = `/images/uploads/${Date.now()}-${filename}`;
    const uploadDir = path.join(__dirname, 'public', 'images', 'uploads');
    
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    const dataPath = path.join(__dirname, 'public', uploadPathRelative);
    fs.writeFileSync(dataPath, base64Data, 'base64');
    
    res.json({ success: true, url: uploadPathRelative });
});

app.listen(PORT, () => {
    console.log(`Local fallback API running at http://localhost:${PORT}`);
});
