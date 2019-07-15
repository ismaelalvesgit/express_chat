var app = require('./config/server');

app.lister (80, function (){
    console.log("Servidor online")
});