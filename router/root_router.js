const express = require('express')
const rootRouter = express.Router()
const { menuRoute } = require('./menu_route')
const { Category } = require('./category_route')

rootRouter.use('/menu', menuRoute)
rootRouter.use('/category', Category)

module.exports = {
    rootRouter
}