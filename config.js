/* eslint-disable no-console */
/* eslint-disable react/prop-types */
require("dotenv").config();



const environmentVariables = {
  development: {
    port = process.env.PORT || 80
},

  staging: {
    port = process.env.PORT || 80
},

  production: {
    port = process.env.PORT || 80
},

};

const environment = environmentVariables[process.env.ENV];
module.exports = environment;
