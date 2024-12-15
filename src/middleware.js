import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: 'https://ram-jyani.vercel.app', // Allow Vercel frontend domain
  credentials: true,
});

// Helper function to run the middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run CORS middleware
  await runMiddleware(req, res, cors);

  // Your API logic here
  if (req.method === 'POST') {
    // Handle POST request logic
    res.status(200).json({ message: 'Account added successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
