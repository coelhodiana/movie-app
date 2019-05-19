const express = require("express");
const app = express();
const request = require("request");

app.get('/results', (req, res) => {
    request("http://www.omdbapi.com/?s=star&apikey=thewdb", (error, response, body)=> {
        if(!error && response.statusCode == 200){
            let results = JSON.parse(body)
            res.send(results);
        }
    });
  });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });