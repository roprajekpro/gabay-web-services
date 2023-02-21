const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// setup server port
const port = process.env.PORT || 8888;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// root route
app.get('/', (req, res) => {
  res.send("Welcome to Gabay");
});
// application routes
const userRoutes = require('./src/routes/user.routes')
const nurseRoutes = require('./src/routes/nurse.routes')
// middlewares
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/nurses', nurseRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});