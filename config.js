/* eslint-disable no-console */
/* eslint-disable react/prop-types */
require("dotenv").config();



const environmentVariables = {
  development: {
    port : 3000
  },

  staging: {
    port : 3000
},

  production: {
    port : 3000
  },

};

const environment = environmentVariables[process.env.ENV];
module.exports = environment;
