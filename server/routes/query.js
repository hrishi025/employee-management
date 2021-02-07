const { request, response } = require('express');
const express = require('express');
const db = require('../db');
const utils = require('../utils');

const router = express.Router();


router.patch('/', (request, response) => {
    const { qId, queryStatus } = request.body
    const statement = `UPDATE emp_queries SET queryStatus='${queryStatus}' WHERE qId='${qId}'; `;
    console.log(statement)

    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

// get all query 
router.get('/getAll', (request, response) => {
    const statement = `select qId, queryTitle, queryDesc, queryStatus, empName from emp_queries q INNER JOIN employee e ON q.empId=e.empId ; `;
    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

router.post('/addquery', (request, response) => {
    const { queryTitle, queryDesc, queryStatus } = request.body;

    const statement = `INSERT INTO emp_queries (queryTitle, queryDesc, queryStatus, empId) values ('${queryTitle}','${queryDesc}','${queryStatus}','${request.id}') `

    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

module.exports = router;