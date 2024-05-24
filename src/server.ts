import express, { Request, Response } from 'express';

export const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// Example of a POST route
app.post('/data', (req: Request, res: Response) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).send('Name and age are required');
  }
  res.send(`Received data: ${name}, ${age}`);
});

// Example of a route with URL parameters
app.get('/user/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Example of a route with query parameters
app.get('/search', (req: Request, res: Response) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).send('Query parameter "q" is required');
  }
  res.send(`Search query: ${q}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
