const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const HttpError = require('./models/http-error');
const contactRoutes = require('./routes/contact-routes');

const APIKEYS = require('./apikeys')
console.log(APIKEYS.MONGO);
const url = `mongodb+srv://BraedonB98:${APIKEYS.MONGO}@monumentdental.webvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;