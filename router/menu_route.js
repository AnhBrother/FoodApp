// Quan ly dia chi file
const express = require('express')
const { getAllMenu, getDetailMenu } = require('../controller/menu_controller')
const menuRoute = express.Router()

menuRoute.get('/', getAllMenu)
menuRoute.get('/:id', getDetailMenu)

module.exports = {
    menuRoute
}