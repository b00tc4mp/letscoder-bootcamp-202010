"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const products_json_1 = __importDefault(require("../data/products.json"));
exports.Product = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            resolve(products_json_1.default);
        });
    },
};
exports.default = exports.Product;
//# sourceMappingURL=productModel.js.map