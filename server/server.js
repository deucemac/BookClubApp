const express = require('express');
const mongooose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080

const bookRouter = require('./routes/api');

mongooose.connect('mongodb://localhost/bookappreact', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongooose.connection
db.on('error', error => console.error)
db.once('connected', () => {
  console.log('Mongoose is connected')
})


// Morgan is http request logger
app.use(morgan('tiny'));
app.use('/api', bookRouter);


app.listen(PORT, console.log(`Server is starting at ${PORT}`))