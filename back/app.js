let express     = require('express'),
    logger      = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    db          = require('./app/models/db'),
    cors        = require('cors');

// ROUTE REGISTERING
let synapse = require('./routes/synapse')
let neuron = require('./routes/neuron')

// APP INIT
let app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTES USED
app.use('/synapse', synapse)
app.use('/neuron', neuron)

// CATCH ERROR 
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ERROR HANDLER
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // RENDER ERROR PAGE
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;