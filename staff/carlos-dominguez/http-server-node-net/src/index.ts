import Http from "http";
import { getProducts } from "./controllers/productController";

const server = Http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello World</h1>");
    res.end();
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Hello Word with port ${PORT}`));
