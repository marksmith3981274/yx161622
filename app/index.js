



const express = require('express');
const app = express();

//app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', function(req, res) {
    return res.send('Hello World');
});

app.listen(5000, function(){
    console.log('Listening on port 5000');
});

app.get('/list', function(req, res) {
});

app.post('/create', function(req, res) {
  try {
    const json = JSON.parse(req.body.json);

    let { name } = json;

    data.push({ id: data.length, name });

  } catch(e) {

    console.log(e);
  }
});












