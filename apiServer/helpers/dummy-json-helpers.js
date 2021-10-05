'use strict'
const dummyJson = require('dummy-json');
const crypto = require('crypto');

module.exports = {
  id: (option) => {
    if (option.data.index === null) {
      throw new Error('{{id}} must be used a {{#repeat}}');
    }

    return option.data.index + 1;
  },
  nullable: (type, value1, value2, option) => {
    let value;
    switch(type.toLowerCase()) {
      case 'int':
        value = dummyJson.utils.randomInt(value1, value2);
        break;
      case 'float':
        value = dummyJson.utils.randomFloat(value1, value2);
        break;
      case 'char':
        value = dummyJson.utils.randomChar(value1, value2);
        break;
      case 'date':
        value = dummyJson.helpers.date(value1, value2, 'unix', option) * 1000;
        break;
      default:
        value = dummyJson.utils.randomBoolean();
    }

    return dummyJson.utils.random() > 0.5 ? 'null' : value;
  },
  date: (dateA, dateB, type, option) => {
    if(
      type &&
      typeof type === 'string' &&
      type.toLowerCase() === 'milliseconds'
    ) {
      return dummyJson.helpers.date(dateA, dateB, 'unix', option) * 1000;
    }
    return dummyJson.helpers.date(dateA, dateB, type, option);
  },

  image: (size) => {
    return `"//placehold.it/${size}/"`;
  },
  hash: (option) => {
    let secret = dummyJson.helpers.lorem(1, option);
    let phrase = dummyJson.helpers.lorem(5, option);
    return crypto.createHmac('sha256', secret).update(phrase).digest('hex');
  },
  currency: () => {
    let available = ['R$', 'U$'];
    return available[dummyJson.utils.randomInt(0, 1)];
  },
  titulo: () => {
    let available = [''];
    return available[dummyJson.utils.randomInt(0, 0)];
  },
};
