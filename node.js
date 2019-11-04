var http = require('http');
var dt = require('./myModule');

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type' : 'text/plane'},{'Content-Length': 0});
    res.write('The date and time currentlly is :' + dt.myDateTime());
    res.end('\n Helloo World !!');
}).listen(8080);