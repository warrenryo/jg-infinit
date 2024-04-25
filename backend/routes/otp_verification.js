const express = require('express');
const otpVerification = express.Router();
const ls = require('local-storage')

otpVerification.get('/otpData', async (req, res) => {
    const {
        name,
        model,
        variant,
        year,
        transmission,
        phone,
        verification } = req.query

    req.session.name = req.query
    ls.set("verification", verification);
});


otpVerification.get('/otpVerification', (req, res) => {
    const verification = ls.get("verification")
    res.json(verification)
});



otpVerification.get('/otpData1', async (req, res) => {


    req.cookies.name = "warren"
    res.json(req.cookies.name)
});


otpVerification.get('/otpVerification1', async (req, res) => {
    console.log(req.cookies)
    res.json(req.cookies.name)
});




otpVerification.get('/otpVerification2', async (req, res) => {
    req.session.destroy(function (err) {
        res.send("destoyed")
    })
});


module.exports = otpVerification;