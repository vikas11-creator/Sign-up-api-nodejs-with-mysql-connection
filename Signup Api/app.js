const express = require("express");
const app = express()
const morgan = require('morgan');


const loginRoutes = require("./api/routes/login")
const signupRoutes = require("./api/routes/signup")
// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It Works!'
//     });
// });

//for getting rid of favicon error
function ignoreFavicon(req, res, next) {
    if (req.originalUrl.includes('favicon.ico')) {
      res.status(204).end()
    }
    next();
  }

  app.use(ignoreFavicon);

app.use(morgan('dev'));

app.use('/',loginRoutes);
app.use('/register',signupRoutes);

module.exports = app;