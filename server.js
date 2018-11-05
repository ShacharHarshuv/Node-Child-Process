const express = require('express');
const app = express();
const exec = require('child_process').execFile;

app.get('/', function(req, res){
    exec('exec/HelloWorld.exe', function(err, data) {  
        if (err){
            res.write("ERROR: ", err);
        }
        else{
            res.write(data);
        }
        res.end();                      
    }); 
})

app.listen(process.env.PORT || 1234, function(){
    console.log("Listening..."); 
});
