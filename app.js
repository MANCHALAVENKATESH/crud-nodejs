const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'view')));

//userRoutes
app.use('/users', userRoutes);
app.use('/getUsers',userRoutes)
app.use('/updateUser',userRoutes)


app.listen(3000, () => {
  console.log("Connected");
});
