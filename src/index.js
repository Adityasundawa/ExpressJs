require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const userRoute = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');

app.use(middlewareLogRequest)
app.use(express.json());
app.use('/users', userRoute)

app.listen(PORT, () =>{
  console.log(`Berhasil di port ${PORT}`);
});