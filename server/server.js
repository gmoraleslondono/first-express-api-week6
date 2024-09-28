const express = require('express');
const app = express();
const cors = require('cors');

// allow cross-origin requests from client -> localhost:5173 and server -> localhost:8080
const corsOptions = {
  origin: ['http://localhost:5173']
}

app.use(cors(corsOptions));

// create a route for the app
app.get('/api', (req, res) => {
  res.json({ cars: ['Ford', 'Chevy', 'Toyota'] });
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
})


