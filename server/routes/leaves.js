const { request, response } = require('express');
const express = require('express');
const db = require('../db');
const utils = require('../utils');

const router = express.Router();

router.post('/', (request, response) => {
    const { leaveStatus, leaveId } = request.body
    const statement = `UPDATE apply_leave SET leaveStatus = '${leaveStatus}' WHERE leaveId = '${leaveId}' `
    console.log(statement)
    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

// get all leaves 
router.get('/getAll', (request, response) => {
    const statement = `select leaveId, leaveDate, leavePurpose, empname, leaveStatus from apply_leave l INNER JOIN employee e ON e.empid = l.empid WHERE leaveStatus='pending'; `;
    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

router.post('/addleave', (request, response) => {
    const { leaveDate, leavePurpose, leaveStatus } = request.body;

    const statement = `INSERT INTO apply_leave (leaveDate, leavePurpose, leaveStatus, empId) values ('${leaveDate}','${leavePurpose}','${leaveStatus}','${request.id}') `

    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

module.exports = router;