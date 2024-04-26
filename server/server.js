const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const operativesRouter = require('./routes/operativesRouter');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
const PORT = 3040;

app.use(cors({ credentials: true, origin: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Замените на URL вашего клиентского приложения
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded PDF files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/api/operatives', operativesRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
