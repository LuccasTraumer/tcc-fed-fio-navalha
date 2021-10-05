const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const { PATH_ROOT = process.env.PWD } = process.env;

const { domains, etapaOrigem } = require(path.join(PATH_ROOT, 'config.json'));

const strategy = {
  json: {
    is(filePath) {
      return typeof filePath === 'string' && filePath.endsWith('.json');
    },
    doResponse(req, res, body) {
      const filePath = path.join(PATH_ROOT, body);
      if(fs.existsSync(filePath)) {
        const file = require(filePath);
        return res.json(file);
      }

      console.log(`File don't exists: ${filePath}`);
      return res.status(404).end();
    }
  }
}

function sendResponse(req, res, domain) {
  if(strategy.json.is(domain.response)) {
    return strategy.json.doResponse(req, res, domain.response);
  }

  return res.status(500).send('Domain Invalid!');
}

module.exports = (req, res) => {
  console.debug(`Path: ${req.originalUrl}`);

  const domain = domains.find(domain => domain.path === req.originalUrl);

  if (domain) {
    console.debug('Path found...', domain);

    sendResponse(req, res, domain);
  } else {
    const originalUrl = new URL('http://localhost' + req.originalUrl);

    const response = etapaOrigem.find(attr =>
      attr.etapa === originalUrl.searchParams.get('etapa') && attr.origem === originalUrl.searchParams.get('origem'));

      if (response) {
        console.debug(`Path found... ${response}`);
        sendResponse(req, res, response);
      }
  }

  res.status(404).end();
}
