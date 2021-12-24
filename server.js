const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// use this to log mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on port: ${PORT}`));