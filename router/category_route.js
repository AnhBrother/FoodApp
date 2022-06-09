const express = require('express')
const { getdataCate, createNewDateCate, updateCate } = require('../controller/category_controller')

const Category = express.Router()

Category.get('/', getdataCate)
Category.post('/', createNewDateCate)
Category.put('/:id', updateCate)

module.exports = {
    Category
}