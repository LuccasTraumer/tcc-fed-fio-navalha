/* tslint:disable */
// @ts-nocheck
const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = argv.prod === true;

function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}

// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

//creates the `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.ts', '');

// choose the correct targetPath based on the environment chosen
const targetPath = './src/environments/environment.ts';

//actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = `
// This file was autogenerated by dynamically running setEnv.ts and using dotenv for managing API key secrecy
export const environment = {
  production: ${isProduction},
  srvTCC: '${isProduction === true ? process.env.SRV_FIO_DA_NAVALHA : process.env.SRV_FIO_DA_NAVALHA_LOCAL}',
  API_CEP: '${process.env.CEP_SERVICE}',
  MAPS_KEY: '${process.env.API_KEY}'
};

`;

writeFileUsingFS(targetPath, environmentFileContent); // appending data into the target file

