const express = require('express');
// const cors = require('cors');
const app = express();
app.use(express.json());
// app.use(cors()); 

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '127.0.0.1';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Express running on ${ port }`);
});

const geocodeAPIKey = '82845a74c5cd488caf782fd4074540b3';

app.get('/geocodeAPI', function(req,res){
    res.send(geocodeAPIKey);
});
 
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: ['https://michaelmcmillen.github.io'], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

