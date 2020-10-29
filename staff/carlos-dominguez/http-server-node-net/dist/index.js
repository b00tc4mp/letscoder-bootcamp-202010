"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const productController_1 = require("./controllers/productController");
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/api/products" && req.method === "GET") {
        productController_1.getProducts(req, res);
    }
    else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Hello World</h1>");
        res.end();
    }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Hello Word with port ${PORT}`));
//# sourceMappingURL=index.js.map