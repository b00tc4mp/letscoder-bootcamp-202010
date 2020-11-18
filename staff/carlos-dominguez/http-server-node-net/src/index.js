const net = require("net");
const server = net.createServer();
const connectedClients = [];
server.on("connection", (client) =>{
  const remote = client.remoteAddress+":"+client.remotePort;
  console.log("Nueva conexion realizada");
  connectedClients.push(client);
  client.on("data", (a)=>{
    console.log("Data from %s: %s", remote, a);
    client.write("Hello World! "+d);
  });
  client.once("close", ()=>{
    console.log("Conexion %s: cerrada", remote);
  });
  client.on("error", (err)=>{
    console.log("Connection %s error %s", remote, err.message);
  });
});
server.listen(5000, ()=>{
  console.log("Servidor escuchando en 5000");
});
setInterval(() => {
  const hora = new Date().toISOString();
  connectedClients.forEach(client => {
    client.write(hora);
  });
}, 2000);