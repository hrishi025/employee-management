const { request, response } = require('express');
const express = require('express');
const db = require('../db');
const utils = require('../utils');

const router = express.Router();

// get all Presentdays 
router.get('/getAll', (request, response) => {
    console.log(request.id)
    const statement = `select * from present_days p INNER JOIN employee e ON p.empId=e.empId ; `;
    console.log(statement)
    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

module.exports = router;