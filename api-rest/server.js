const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const app = express();

app.use(express.json());

// Runs serve
app.listen(3000, function() {
    console.log("Hello, server!");
});

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile));

require('./endpoints')(app)