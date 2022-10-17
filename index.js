const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const App = express();
import userRoutes from './routes/user.route.js';

App.use(cors());
App.use(express.json());

App.use("/user",userRoutes);

// view engine setup

App.set('view engine', 'jade');

App.use(logger('dev'));
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(cookieParser());
App.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
App.use(function(req, res, next) {
  next(createError(404));
});

// error handler
App.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({message: err.message});
 
});