const mongoose = require('mongoose'); // import mongoose

require('dotenv').config(); // load the .env file data in prosses object

const dbConnect = ()=>{
    // mongoose.connect(process.env.DATABASE_URL,{ 
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // })

    
    // connect the database in the server. fetch the .env file database url
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=> console.log('DB Connected sucessfully')) // and this connectin if a promise 
    .catch((err)=>{
        console.error('Error connecting to DB');
        console.log(err.message)
        process.exit(1);
    })
}

module.exports = dbConnect; // export the function to be used in other files
