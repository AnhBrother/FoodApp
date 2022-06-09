// Quan li logic code

const express = require('express')
const { categoryData } = require("../pack")

const getAllMenu = (req, res) => {
    res.send(`Get all menu from controller`)
}

const getDetailMenu = (req, res) => {
    res.send(`Get Detail from controller`)
}
   

module.exports = {
    getAllMenu,
    getDetailMenu
}