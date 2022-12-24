// Crear la aplicación
const express = require('express')
const app = express()

// Levantar el servidor en el puerto 5005
app.listen(5005, () => console.log('SERVER IS RUNNING'))

// realiza el enrutamiento conforme a la url (Routing)
app.get('/inicio', (req, res) => res.send('<h3>Successful Server Connection</h3>'))

//llamado del modelo (Model)
const Ranking = require('./models/Ranking.model')


// Routing
app.get('/api/ranking', (req, res) => {

    Ranking
            .find()        
            //.then(allCoasters => console.log(allCoasters))
            .then(allRanking => res.json(allRanking))
    
        //res.header("Access-Control-Allow-Origin", "*");
        //res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        //res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    })

    app.get('/api/details/:ranking_id', (req, res) => {

        const { ranking_id } = req.params
    
        Ranking
            .findById(ranking_id)
            .then(ranking => res.json(ranking))
        
        //res.header("Access-Control-Allow-Origin", "*");
        //res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        //res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");    
    })
