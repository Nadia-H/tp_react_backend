//1ère étape: importation
//const http = require('http')
const express = require('express')
const mongoose = require('mongoose')
//2ème étape: création du serveur
//const server = http.createServer()
const app = express()
app.use(express.json())

require('./routes/feedback.route')(app)

/*app.get('/feedbacks', (req, res)=>{
    //res.status(403).send('okk')
    res.send('okk')
})
app.get('/feedbacks/:id', (req, res)=>{
    res.send(req.params.id)
})

app.post('/feedbacks', (req, res)=>{
    res.send(req.body)
})*/



//3ème étape: lancer le serveur
app.listen(5000, ()=>{
    console.log("server run")
})

//4ème connexion à la base de données

const db = "mongodb://127.0.0.1:27017/react_Feedback"
mongoose.connect(db, {}, (err, success)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Mongodb connected")
    }
})