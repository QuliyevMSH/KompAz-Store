import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// CORS ayarlarını localhost:3000 için yapılandırma
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // Bazı tarayıcılar için gerekli
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for reviews
let reviews = [];

// API route for submitting a review (without photo)
app.post('/api/reviews', (req, res) => {
  console.log('Request Body:', req.body);

  const { rating, review, name, email ,catagory} = req.body;

  const newReview = { id: reviews.length + 1, rating, review, name, email,catagory };
  reviews.push(newReview);

  res.status(201).json(newReview);
});

// API route for getting reviews
app.get('/api/reviews', (req, res) => {
  res.json(reviews);
});

// API route for deleting a review by ID
app.delete('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  reviews = reviews.filter(review => review.id !== parseInt(id));
  res.status(200).json({ message: `Review with ID ${id} deleted successfully.` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
