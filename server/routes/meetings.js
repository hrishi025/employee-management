const { request, response } = require('express');
const express = require('express');
const db = require('../db');
const utils = require('../utils');

const router = express.Router();

router.post('/add', (request, response) => {
    console.log(request.id)

    const { meetingDate, meetingInfo, meetingStatus } = request.body

    const statement = `INSERT INTO meeting( meetingDate, meetingInfo, meetingStatus, adminId) 
    VALUES('${meetingDate}','${meetingInfo}','${meetingStatus}','${request.id}');`

    console.log(statement)

    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

// get all meetings 
router.get('/getAll', (request, response) => {
    const statement = `select * from meeting `;
    db.query(statement, (error, dbResult) => {
        response.send(utils.createResult(error, dbResult))
    })
})

module.exports = router;