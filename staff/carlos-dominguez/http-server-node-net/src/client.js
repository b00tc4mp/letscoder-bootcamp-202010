const net = require("net");

const client = net.createConnection({
  host: "localhost",
  port: 5000,
});
client.on("data", (data) => {
  console.log(`Mensaje recivido del servidor: ${data}`);
})