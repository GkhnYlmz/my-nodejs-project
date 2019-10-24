const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody with NodeJS Express on IBM Cloud!");
});
 
module.exports.app = app;
