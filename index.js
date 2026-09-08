const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/api/ff-info', async (req, res) => {
  const uid = req.query.uid;
  if (!uid) return res.status(400).json({ error: "UID required" });

  try {
    const response = await axios.get(`https://api.gameskinbo.com/ff-info/get?uid=${uid}&region=BD`, {
      headers: { 'x-api-key': 'W60njtP1WeMUdZS8NXhbqVvXKZBI49iK_99g7b6bN7E' }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "API fetch failed" });
  }
});

module.exports = app;
