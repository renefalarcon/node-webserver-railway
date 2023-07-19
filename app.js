require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs')

app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials',function (err){})
// servir contenido estatico
app.use(express.static('public'));


//function es igual a =>
app.get('/', function(req,res) {

    res.render('home',{
        titulo:' Curso de node ',
        nombre:' Rene Alarcon '
    });
})

app.get('/generic', function(req,res) {

    res.render('generic',{
        titulo:' Curso de node ',
        nombre:' Rene Alarcon '
    });
})

app.get('/elements', function(req,res) {

    res.render('elements',{
        titulo:' Curso de node ',
        nombre:' Rene Alarcon '
    });
})

app.get('*', (req,res) =>{

    res.sendFile(__dirname+'/public/404.html');
})

app.listen(port, ()=>{
    console.log(`Exampl app listening at http://localhost:${port}`)
})