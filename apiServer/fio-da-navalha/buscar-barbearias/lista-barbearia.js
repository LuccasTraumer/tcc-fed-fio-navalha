const responseModel = require('../helpers/responseModel');
const dummyJson = require('dummy-json');
const dummyJsonHelpers = require('../helpers/dummy-json-helpers');

module.exports = (app, endpoint) => {
    app.post(endpoint + '/', (req, res) => {
        const response = `[
            {{#repeat 4}}
            {
                "nome":"{{titulo}}"
                
            }
            {{/repeat}}
        ]`;
        setTimeout(() => {
            // responseModel.error(res, 404, 'Erro ao tentar comunicar com SRV');
            responseModel.sucess(res, response);
        }, responseModel.delay());
    });
}
