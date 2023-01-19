const express = require('express');
const allUser = require('../controllers/allUser');
const login = require('../controllers/login');
const register = require('../controllers/regiser');
const app = express.Router();

app.get('/',allUser)
app.post('/signup',register);
app.post('/login',login)

module.exports = app;