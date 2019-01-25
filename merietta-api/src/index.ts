import io from 'socket.io'
const server = io.listen(process.env.PORT || 3000);
import store from './store'

server.on("connection", function(socket) {
  console.log("user connected");
  socket.emit("state", JSON.stringify(store.getState()))
  store.subscribe(() => {
    socket.emit("state", JSON.stringify(store.getState()))
  })
  socket.on('disconnect', () => console.log('disconnected'))
  socket.on('action', (message: string) => store.dispatch(JSON.parse(message)))
});
