const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const signup = require('./signup');

app.use(cors());
app.use(bodyParser.json());
 
app.post('/signup', async (req, res) => {
  try {
    return res.send({
      result: await signup(req.body)
    });
  } catch(error) {
    res.status(422).send({errors: [{
      message: error.message
    }]});
  }
});
 
app.listen(3001);