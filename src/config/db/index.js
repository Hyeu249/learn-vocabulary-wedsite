const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/baohieu_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });  
        console.log('Connected to MongoDB')
    } catch(error){
        console.log('Connect failure to MongoDB!!!')
     }
};

module.exports = { connect }
