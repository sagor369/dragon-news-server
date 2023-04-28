const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const categories = require('./data/categories.json')
const news = require('./data/news.json')
app.use(cors())

app.get('/categories', (req , res) => {
    res.send(categories)
})

app.get ('/news', (req, res) =>{
    res.send(news)
})
app.get ('/news/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id)
    const oneNews = news.find(n => n._id == id)
    res.send(oneNews)
})
app.get ('/categories/:id', (req, res)=>{
    const id =req.params.id;
    if(id == 0 ){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }
})
// app.get ('/news/:id', (req, res)=>{
//     const id = req.params.id; 
//     console.log(id)
//     const filterNews = news.filter(n=> n.category_id == id)
//     res.send(filterNews)
// })


app.listen(port, ()=>{
    console.log(`server site port ${port}` )
})