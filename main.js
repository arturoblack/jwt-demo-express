const express = require('express');
const mongoose = require('mongoose');
const heroApiRouter = require('./app/routes/heroes.route');

mongoose.connect('mongodb+srv://myappuser:j6Xno4o8PH50HEtD@cluster0.ejxjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
app.use(express.json());
app.use('/api/heroes', heroApiRouter);

app.listen(3000, function(){
    console.log('server start');
});
