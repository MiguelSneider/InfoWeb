// DB connection
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

mongoose
    //.connect('mongodb://127.0.0.1:27017/languages', function (error){
    .connect('mongodb://mongo:0MEoCEpiJZE6W93DbdhP@containers-us-west-80.railway.app:6233', function (error){
        if (error) throw error;
        console.log('DATABASE CONNECTION');
    });

 //models
    const coasterSchema = mongoose.Schema({
        
        name: String,
        yearOfCreation: Number,
        imageUrl: String,
        paradigmUsed: String,
        description: String

    })
    
    //const Ranking = mongoose.model('ranking', coasterSchema)
    const Ranking = mongoose.model('Model', coasterSchema, 'ranking')

    module.exports = Ranking