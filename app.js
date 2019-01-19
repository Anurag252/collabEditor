var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.get('/test', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

app.get('/test1', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

  
app.get('/test2', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });




io.on('connection', function (socket) {

    socket.on('valuesChangedsend', function (data) {
        
        socket.broadcast.emit('valuesChangedrecvd', 
        { my: data.my , url: data.url});
        console.log(data.url);
      })

});