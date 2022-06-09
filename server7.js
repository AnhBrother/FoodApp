const express = require('express')
const app = express() 
const {rootRouter} = require('./router/root_router')

app.use(express.json())
app.use('/api/v1',rootRouter)
    
const port = 3000
app.listen(port, () => {
    console.log(`Server listen port ${port}`)
    console.log(`Hello World`)
})