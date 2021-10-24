'use strict'

const _ = require('lodash');
const dummyJson = require('dummy-json');
const dummyJsonHelper = require('./dummy-json-helpers');
const httpErrors = require('http-errors');

var model = {
  DELAY: 600,
  delay: () => (1750),

  sucess: (res, responseData) => {
    return res.json(JSON.parse(dummyJson.parse(responseData, { helpers: dummyJsonHelper }))
    );
  },

  error: (res, statusCode, message, customResponse) => {
    const status = statusCode || 500;
    const erro = message || 'Erro Generico';

    res.status(status);

    const jsonReturn = customResponse || {
      status,
      timestamp: '2021-09-15 15:23:28',
      erro
    };
    return res.json(jsonReturn);
  },

  notLogged: (res) => {
    return model.error(res, '2019', null, 401);
  },

  wrongData: (res, fields) => {
    return model.error(res, 'MS002', fields, 400);
  }
};

module.exports = model;
