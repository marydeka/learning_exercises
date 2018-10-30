// var request = require('request');
// request('http://www.google.com', function (error, response, body){
//     if(!error && response.statusCode == 200){
//         console.log(body) 
//     }
// });

var request = require('request');
request('http://www.googlejlaidfjowei.com', function (error, response, body){
    if(error){
        console.log("Something went wrong");
        console.log(error);
    } else {
        if(response.statusCode == 200){
            //things worked
            console.log(body)
        }
    }
});