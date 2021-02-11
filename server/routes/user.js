const express = require('express')
const db = require('../db')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')
const utils = require('../utils')

const router = express.Router()

router.get('/profile', (request, response) => {
  const statement = `select * from employee where empId = ${request.id}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.post('/profile', (request, response) => {
  const { email, mobile } = request.body
  const statement = `UPDATE employee SET email = '${email}', mobile = '${mobile}' where empId = ${request.id};`
  console.log(statement)
  db.execute(statement, (error, data) => {
    console.log(error)
    response.send(utils.createResult(error, data))
  })
})

router.post('/signup', (request, response) => {
  const { empName, address, birth_date, gendor, email, mobile, password, role } = request.body

  console.log(email)
  console.log(request.body)

  // encrypt the password
  const encryptedPassword = '' + crypto.SHA256(password)

  // by default every user will be non-verified
  const statement = `insert into employee 
  (empName, address, birth_date, gendor, email, mobile, password, role) values ('${empName}', '${address}', '${birth_date}', '${gendor}', '${email}','${mobile}', '${encryptedPassword}','${role}');`

  console.log(statement)

  db.query(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      console.log(result)
      response.send(result)
    } else {
      console.log(result)
      response.send(result)
    }
  })
})

router.post('/emplogin', (request, response) => {
  const { email, password } = request.body

  // encrypt the password
  const encryptedPassword = '' + crypto.SHA256(password)

  const statement = `select * from employee  
      where email = '${email}' and password = '${encryptedPassword}'`

  db.execute(statement, (error, users) => {
    const result = {
      status: '',
    }

    if (error != null) {
      // error while executing statement
      result['status'] = 'error'
      result['error'] = error
    } else {
      if (users.length == 0) {
        // user does not exist
        result['status'] = 'error'
        result['error'] = 'User does not exist'
      } else {
        const user = users[0]

        // check the user status
        // 0: non-verified, 1: active, 2: suspended
        const payload = { id: user['empId'] }
        const token = jwt.sign(payload, config.secret)

        result['status'] = 'success'
        result['data'] = {
          token: token,
          role: user['role'],
          email: user['email'],
        }
      }

      console.log(result)
      response.send(result)
    }
  })
})

module.exports = router
