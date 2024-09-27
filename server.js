const express = require('express');
const path = require('path');
const fs = require('fs');
const geoip = require('geoip-lite');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to log user information
app.use((req, res, next) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);

    const userInfo = {
      timestamp: new Date().toISOString(),
      country: geo ? geo.country : 'unknown',
      city: geo ? geo.city : 'unknown',
      ip
    };

    // Append the log entry to the file
    fs.appendFile('user_logs.txt', JSON.stringify(userInfo) + '\n', (err) => {
      if (err) {
        console.error('Error writing to log file', err);
      }
      next();
    });
  } catch (error) {
    console.error('Error in logging middleware', error);
    next();
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes by sending back the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'), (err) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
