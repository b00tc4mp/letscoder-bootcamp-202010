import net from "net";
const server = net.createServer();
server.on("connection", (socket) =>{
  const remote = socket.remoteAddress+":"+socket.remotePort;
  console.log("Nueva conexion realizada");
  socket.on("data", (a)=>{
    console.log("Data from %s: %s", remote, a);
    socket.write("Hello World! "+d);
  });
  socket.once("close", ()=>{
    console.log("Conexion %s: cerrada", remote);
  });
  socket.on("error", (err)=>{
    console.log("Connection %s error %s", remote, err.message);
  });
});
server.listen(5000, ()=>{
  console.log("Servidor escuchando en 5000");
})