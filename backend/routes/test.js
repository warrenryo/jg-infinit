const express = require('express');
const test = express.Router();
const db = require('../connection/connection');
const testServices = require('../services/test/test');
const { insertTest, deleteTest, getTest } = testServices();

test.get('/test', async (req, res) => {
    const name = 'warren';
    const testData = await insertTest(name);
    res.json(testData);
});

test.get('/test1', async (req, res) => {
    const testData = await getTest();
    res.json(testData);
});

test.get('/test2', async (req, res) => {
    const testData = await db('Select * from test');
    res.json(testData);
});

test.get('/test3', async (req, res) => {
    const testData = await db('Select * from test');
    res.json(testData);
});

test.get('/test4', async (req, res) => {
    const testData = await db('Select * from test');
    res.json(testData);
});

module.exports = test;