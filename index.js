const WebSocket = require('ws');


setInterval(function() {
const socket = new WebSocket('wss://websocket.game-production.repl.co');
socket.addEventListener('open', function (event) {
 console.log('Connected to server')
});
socket.addEventListener('message', function (event) {
 console.log('Message from server: ', event.data);
});
}, 50);
