const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define path for express config
const publicDirectoryPath = path.join(__dirname,'../public/css')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partial')

hbs.registerPartials(partialPath)

// set up handlebar and view engine
app.set('views', viewPath)
app.set('view engine', 'hbs')

//set up static directory to serve
app.get('', (req , res)=> {
    res.render('index', {
        title : 'Weather App',
        author : 'Muhammad Bilal'
    })
})
app.get('/about', (req,res) => {
   res.render('about', {
       title : 'About page',
       author : 'muhammad bilal'
   })
})
app.get('/help' , (req, res) => {
    res.render('help', {
        title : 'help page',
        author : 'muhammad bilal'
    })
})

app.get('*' , (req, res) => {
     res.render('404', {
       title : 'Fage not found',
       name : 'muhammad bilal'  
     })
})
app.use(express.static(publicDirectoryPath))


app.listen(3000,()=>{
    console.log('you are on 3000 port')
})