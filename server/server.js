const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


const feedbackData = [];

app.use(cors());
app.use(express.json());

app.post('/api/feedback/anonymous', (req, res) => {
  const { feedback } = req.body;
  feedbackData.push({ feedback, isAnonymous: true });
  res.status(201).json({ message: 'Feedback submitted successfully.' });
});


app.post('/api/feedback/public', (req, res) => {
  const { feedback, name, email } = req.body;
  feedbackData.push({ feedback, name, email, isAnonymous: false });
  res.status(201).json({ message: 'Feedback submitted successfully.' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
