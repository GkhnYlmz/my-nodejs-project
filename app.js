const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody on IBM Cloud!");
});
 
module.exports.app = app;
