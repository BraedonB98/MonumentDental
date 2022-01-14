const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const HttpError = require('./models/http-error');
const contactRoutes = require('./routes/contact-routes');

const APIKEYS = require('./apikeys')
//console.log(APIKEYS.MONGO);
const url = `mongodb+srv://BraedonB98:${APIKEYS.MONGO}@cluster0.lhqhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

`;

const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');//Access-control-Allow-Origin required to let browser use api, the the * can be replaced by urls (for the browser) that are allowed to use it
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')//Second values are what types of requests you want to accept
    next();
});

app.use('/api/contact',contactRoutes);

app.use((req,res,next)=>{
    const error = new HttpError('Could not find this route.', 404);
    return(next(error));
});

mongoose
.connect(url)
.then(() =>{
    app.listen(5000);//start the whole server only if it can successfully connect to mongoose otherwise it wont open the port to receive connections
})
.catch(error =>{
    console.log(error);
});
