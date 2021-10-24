const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();

app.use(cors({
  credentials: true
}));

app.use(express.json());
app.use(controller);

const PORT = 4568;

app.listen(PORT, () => console.log(`Listening to http:localhost:${PORT}`));
