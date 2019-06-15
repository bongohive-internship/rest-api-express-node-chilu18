var express = require('express');
var app = express();

app.get('/country/provinces', function(req, res){
   var provinces = [ 'Lusaka', 'Southern', 'Northern', 'Copperbelt', 'Eastern', 'Western', 'Muchinga', 'Laupula', 'Central', 'North Western' ];
   for (var i = 0; i < provinces.length; i++)
   res.send(provinces);
});

app.get('/countries', function(req, res){
   var countries = [ {
      "country": "Zambia",
      "city": "Lusaka",
      "nationality": "Zambians"
  },
  {
      "country": "Democratic Republic of Congo",
      "city": "Kingshasa",
      "nationality": "Congolese"
  },
  {
      "country": "France",
      "city": "Paris",
      "nationality": "French"
  },
  {
      "country": "Switzerland",
      "city": "Bern",
      "nationality": "Swiss"
  },
  {
      "country": "Germany",
      "city": "Berlin",
      "nationality": "German"
  },
  {
      "country": "Angola",
      "city": "Luanda",
      "nationality": "Angolans"
  },
  {
      "country": "Zimbabwe",
      "city": "Harare",
      "nationality": "Zimbabweans"
  },
  {
      "country": "Thailand",
      "city": "Bangkok",
      "nationality": "Thai"
  },
  {
      "country": "Australia",
      "city": "Canberra",
      "nationality": "Australia"
  },
  {
      "country": "Austria",
      "city": "Viena",
      "nationality": "Austrains"
  }];
   for (var i = 0; i < countries.length; i++)
   res.send(countries);
});

app.post('/countries/provinces', function(req, res){
    provinces.push("");
    res.send('items aded');
 });

app.listen(3000);