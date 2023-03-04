const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();
// setup server port
const port = process.env.PORT || 8888;
const corsOptions = {
  origin: 'http://localhost:8888',
  optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// root route
app.get('/', (req, res) => {
  res.send("Welcome to Gabay");
});
// application routes
const miscellaneousRoutes = require('./src/routes/miscellaneous.routes')
const nurseRoutes = require('./src/routes/nurse.routes')
// middlewares
app.use('/api/v1/miscellaneous', miscellaneousRoutes)
app.use('/api/v1/nurses', nurseRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});