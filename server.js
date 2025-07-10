import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));

// API route to handle chat messages
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  console.log('Received message @server.js:', message);
  
  // For now, just echo the message back
  res.json({ reply: `You sent: "${message}"` });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
