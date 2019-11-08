const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const app = express();

mongoose.connect("mongodb+srv://wheslleyb:Ciencia@01@cluster0-ogyfz.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);