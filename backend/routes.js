import express from "express";
const router = express.Router();

// API route to handle chat messages
router.post('/chat', (req, res) => {

    const { message } = req.body;
    console.log('Received message at /chat route in routes.js:', message);
  
  // For now, just echo the message back
  res.json({ reply: `You sent: "${message}"` });
});

export { router as chatRoutes }