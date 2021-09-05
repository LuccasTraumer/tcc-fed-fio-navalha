export const environment = {
  production: true,

  srvTCC: 'http://localhost:8080/',
  // API_CEP: 'https://viacep.com.br/ws/',
  API_CEP: process.env.CEP_SERVICE,
};
