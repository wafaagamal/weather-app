var request=require('request');
var getTemperature=(callback)=>{

  request({
    url:'http://api.openweathermap.org/data/2.5/forecast?id=360630&APPID=97d5952e0d3ea6a9af38bb63f8d8ce95',
    json:true
  },(error,response,body)=>{
    console.log("what is inside error ")
    console.log(error)
    error = null
    var  result = null
    if(error)
    {
       error = "Unable to Connect to Server";
    }
    else if (body.cod==="400")
    {
      error = "Bad Request";
    }
    else if (body.cod==="200")
    {
      result=((body.list[0].main.temp)-273.15);
    }

    callback(error, result);
});

};



/////////////////////////////



module.exports.getTemperature=getTemperature;
