const Koa = require('koa');

const app = new Koa();
const http = require('http').createServer(app.callback());
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });

    socket.on('createBooking', (booking) => {
        io.emit('createBooking', booking);
    });
});

http.listen(3000, () => {
    console.log('Listening to 3000...');
});
