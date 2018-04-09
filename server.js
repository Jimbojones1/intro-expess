const express = require('express');
const app     = express();

// Now attached to app we have a bunch of methods
// to start our server and send responses to the client

app.get('/', (request, response) => {
  response.send('Hi Im the server')
});

app.get('/anythingWeWant', (request, response) => {
  response.send('WHatever we want')
})

app.get('/tacos', (req, res) => {
  res.send('tacos')
})





app.listen(3000, () => {
  console.log('Server is listening on Port 3000');
})
