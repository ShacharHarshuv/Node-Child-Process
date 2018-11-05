var exec = require('child_process').execFile;

exec('exec/HelloWorld.exe', function(err, data) {  
    console.log(err)
    console.log(data.toString());                       
});  
