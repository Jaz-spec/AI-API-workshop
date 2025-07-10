import express from "express";
const router = express.Router();

import writeStory from './openAi.js';

// API route to handle chat messages
router.post('/chat', async (req, res) => {
    const { message } = req.body;
    console.log('Received message at /chat route in routes.js:', message);
    
    const response = await writeStory(message);
  res.json({ reply: response});
});

export { router as chatRoutes }