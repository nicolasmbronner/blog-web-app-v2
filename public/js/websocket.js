// Create Websocket connection
const socket = new WebSocket(`
    ws://${window.location.hostname}:${window.location.port}
`);

// Connection opened
socket.addEventListener('open', (event) => {
    console.log(`connected to blog server`);
});

// Listen for messages
socket.addEventListener('message', (event) => {
    console.log(`Message from server:`, event.data);
});

// Handle any errors
socket.addEventListener('error', (event) => {
    console.error(`Websocket error:`, event);
})