const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config')
const cors = require('cors')

// list of routers
const routerUser = require('./routes/user')
const routerMeeting = require("./routes/meetings")
const routerLeave = require('./routes/leaves')
const routerQuery = require('./routes/query')
const { request } = require('express')
const routerSalarySlip = require('./routes/salary_slip')
const routerPresentDays = require('./routes/present_days')

const app = express()

const port = process.env.PORT || 4000

// enable frontend application to call the APIs
app.use(cors('*'))

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use((request, response, next) => {
  // skip checking the token for following APIs
  // signin and signup

  if (
    request.url == '/user/emplogin' ||
    request.url == '/user/signup' ||
    request.url.startsWith('/user/verify') ||
    request.url.startsWith('/user/status')
  ) {
    // skip checking the token
    next()
  } else {
    // get the token from headers
    const token = request.headers['token']

    try {
      // verify if the token is original or intact
      const payload = jwt.verify(token, config.secret)

      // get id from the token
      request.id = payload['id']
      console.log(payload)

      // call the next handler
      next()
    } catch (ex) {
      response.send({
        status: 'error',
        error: 'unauthorized access',
      })
    }
  }
})

// add routers
app.use('/user', routerUser)
app.use("/meeting", routerMeeting)
app.use('/leave', routerLeave)
app.use('/query', routerQuery)
app.use('/salary-slip', routerSalarySlip)
app.use('/present', routerPresentDays)

app.get('/', (request, response) => {
  response.send('welcome to notes application')
})

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
