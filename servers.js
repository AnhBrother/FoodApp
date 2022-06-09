const express = require('express')
const { categoryData } = require('./pack')
const app = express()
app.use(express.json())

app.get('/category', (req,res) => {
    res.send(categoryData)
})

app.post('/category/add', (req, res) => {
    console.log(req.body)
    const newData = req.body
    const newCate = [...categoryData,newData]
    res.send(newCate)
})

app.listen(3000, () => {
    console.log(`Port ${3000} is running!`)
})