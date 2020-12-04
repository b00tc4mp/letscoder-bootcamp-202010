require('dotenv').config()

const mongoose = require('mongoose')
const retrieveUser = require('../retrieve-user')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => retrieveUser('5fca746aeee3079631ad3648'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)




