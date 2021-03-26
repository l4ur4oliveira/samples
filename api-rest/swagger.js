const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFile = ['./endpoints.js'];

const doc = {
  info: {
      version: "1.0.0",
      title: "API REST",
      description: "Documentação gerada automaticamente com <b>swagger.autogen</b>."
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
}

swaggerAutogen(outputFile, endpointsFile, doc).then(() => {
  require('./server.js');
});