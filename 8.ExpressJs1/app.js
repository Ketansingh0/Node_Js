const express = require('express');
const bodyParser = requier('body-parser');
const app = express();

app.use((req, res, next) =>{
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

// app.use(bodyParser.urlencoded());

const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`Server running on address http://localhost:${PORT}`);
});