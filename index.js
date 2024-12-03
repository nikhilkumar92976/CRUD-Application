const express = require('express');// import express
const app = express();

app.use(express.json());// add middleware

//load the env file data in a process object
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// import routes from todo api
const todoRoutes = require('./routes/todos');
//mount the todo api routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//stablish the connection the batabase
const dbConnect = require('./config/database');
dbConnect();

// default route to show home page
app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to the Todo API</h1>`);
})


// express
//mongoose
//nodemon
//dotenv