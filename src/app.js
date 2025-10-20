const express = require('express');
const categoriesRouter = require('./routes/categories.routes');
const errorHandler = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/api/categories', categoriesRouter);

app.use(errorHandler);

module.exports = app;