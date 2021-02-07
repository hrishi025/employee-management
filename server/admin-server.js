const { response, request } = require('express');
// require express 
const express = require('express');

// create app 
const app = express();
// to use JSON 
app.use(express.json());


// require cors 
var cors = require('cors')
app.use(cors())


// require routes 
const adminRouter = require('./admin-routes/employee') ;
const queryRouter = require('./admin-routes/query') ;


// use routes 
app.use('/employee', adminRouter) ;
wapp.use('/query', queryRouter) ;

//default routes 
app.get('/', (request, response) => {
    response.send('Welcome to Admin Panel Backend');
})

// strat the server 
app.listen(3000, '0.0.0.0', ()=>{
    console.log('Server Started listening on port 3000');
})