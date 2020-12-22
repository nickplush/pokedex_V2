const mongoose = require('mongoose')
const express = require('express')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
const path = require('path')
require('./passport/passport')

mongoose.Promise = global.Promise;
const app = express()

mongoose.connect(keys.dbUrl, keys.dbOptions)

app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./controller/auth.controller')(app)
require('./controller/user.controller')(app)

app.use(express.static(path.resolve('..', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  })


const PORT = process.env.PORT || 5000
app.listen(PORT);
