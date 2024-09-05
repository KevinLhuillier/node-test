const express = require('express');
const app = express();

app.get('/', (req, res) => {
      res.status(200).json("Hello CI/CD self updated!");
});

app.listen(80);