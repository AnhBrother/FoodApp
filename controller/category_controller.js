// Quan li logic code

const express = require('express')
const { categoryData } = require("../pack")

const getdataCate = (req, res) => {
    res.send(categoryData)
}

const createNewDateCate = (req, res) => {
    const newData = req.body
    const newCate = [...categoryData,newData]
    res.send(newCate)
}

const updateCate = (req, res) => {
    const pos = req.params.id
    const index = categoryData.findIndex((position) => position.id === Number(pos))
    categoryData[index] = req.body

    res.send(categoryData)
}   

module.exports = {
    getdataCate,
    createNewDateCate,
    updateCate
}