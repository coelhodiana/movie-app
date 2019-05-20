const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("search");
});

app.get('/results', (req, res) => {
    const final = "&apikey=thewdb";
    let search = req.query.keyword;
    const url = "http://www.omdbapi.com/?s=" + search + final;

    request(url, (error, response, body)=> {
        if(!error && response.statusCode == 200){
            let data = JSON.parse(body)
            res.render("results", {data: data});
        }
    });
  });

app.listen(3000, () => {
    console.log('Servidor rodando nice n easy!');
  });