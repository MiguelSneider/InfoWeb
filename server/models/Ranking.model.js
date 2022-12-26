// DB connection
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

mongoose
    //.connect('mongodb://127.0.0.1:27017/languages', function (error){
    .connect('mongodb://mongo:BbX95EiNqJljgWEC9HNn@containers-us-west-186.railway.app:6493', function (error){
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