const { request, response } = require('express');
const express = require('express');
const db = require('../db');
const utils = require('../utils');

const router = express.Router();

// get all leaves 
router.get('/getAll', (request, response) => {
    const statement = `select * from salary_slip `;
    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

router.post('/', (request, response) => {
    const { empName } = request.body
    console.log(request.body)
    const statement = `select * from salary_slip s INNER JOIN employee e ON s.empId=e.empId WHERE e.empName LIKE '${empName}';`;
    console.log(statement)
    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

router.post('/getAll', (request, response) => {
    const { noOfPresentDay, leaveCount, totalAmount, adminId, empId } = request.body;
    const statement = `insert into salary_slip (noOfPresentDay, leaveCount, totalAmount,  adminId, empId) values ('${noOfPresentDay}','${leaveCount}','${totalAmount}','${adminId}','${empId}') where empId = '${empId}' `

    db.query(statement, (error, dbResult) => {
        const result = { status: '' };
        if (error) {
            // Error occured in execution of query 
            result.status = 'error';
            result.error = error;
        }
        else {
            const row = dbResult[0];
            if (dbResult.length == 0) {
                result.status = 'no user found';
            }
            else {
                result.status = 'success';
                result.data = row;
            }
        }
        response.send(result);
    })
})

module.exports = router;