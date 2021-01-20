const express = require('express');
const app = express();
const config = require('./config/config');
const db = require('./dbConnectivity/mongodb');
const index = require('./routes/indexRoute');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//************************************************************************************* */
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
app.use(bodyParser.json({ limit: "50mb" }))

app.use(morgan('dev'))

app.use('/api/v1', index)

//***********************CRON FUNCTION ****************************//
app.listen(global.gConfig.node_port, () => {
  console.log("Server is running on", global.gConfig.node_port)
})



