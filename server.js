var express = require('express');
var app = express();
var axios = require('axios');
const port = process.env.PORT || 8080;
const country = require('./country.json');
const city = require('./city.json');
const statecity = require('./statecity.json');
const rest = require('./rest.json');
var dataCat;
app.use(express.static(__dirname))
axios({
          method: "GET",
					dataType:"jsonp",
					headers:{
							"Accept"	: "application/json",
							"user-key"	:	"api-key"

							},
					url:"https://developers.zomato.com/api/v2.1/categories"
					}
      )
  .then(function(response,req) {
    dataCat = response.data;
}) .catch(console.error);

app.get('/cat',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(dataCat));
});
app.get('/cat',(req, res)=>{
  res.json(dataCat);
});

app.get('/rest',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(rest));
});
app.get('/rest',(req, res)=>{
  res.json(rest);
});
app.get('/country',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(country));
});
app.get('/country',(req, res)=>{
  res.json(country);
});
app.get('/country',(req, res)=>{
  res.json(country);
})
app.get('/city',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(city));
});
app.get('/city',(req, res)=>{
  res.json(city);
})
app.get('/statecity',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(statecity));
});
app.get('/statecity',(req, res)=>{
  res.json(statecity);
})
app.get('/',(req, res)=>{
  res.json(index);
})
app.listen(port,()=>{
  console.log("Server Established!");
})
