const express=require('express');
const weather=require('C:\\Users\\facebook\\Desktop\\Server1\\weather.js');
const hbs=require('hbs');

const request=require('request');
var ceil = require( 'math-ceil' );


var app=express();

//app.set('view-engine','hbs');
app.set('views', __dirname + '/views');

var temp=0;
app.get('/',(req,res)=>{
//  console.log("weather temp requested")
weather.getTemperature((error,value)=>{
    if(error){
      console.log("we have error");
      console.log(error);}
    //  console.log("eeeee");  }
    else if (value) {
      //temp.bind(res);
      console.log('weather callback: '+ value);
      temp=ceil(value);
      res.status(200).send({todayTemp:temp});
    }
  });
//var temp=temp.bind(getTemperature(error,res));


//console.log(temp);
});





app.get('/Home',(req,res)=>{
  res.render('home.hbs',{
    Temp:''
  });

});

app.get('/About',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'AboutPage'
  });
});

app.listen(3000,()=>{
  console.log('Server is Runnng');
});
