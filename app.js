const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();
const http = require('http').createServer(app.callback());
const io = require('socket.io')(http);

app.use(serve(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('create booking', (booking) => {
        io.emit('create booking', booking);
    });
});

http.listen(3000, () => {
    console.log('Listening to 3000...');
});