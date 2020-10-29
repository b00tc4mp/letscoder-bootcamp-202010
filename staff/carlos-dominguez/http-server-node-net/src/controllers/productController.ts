import Product from "../models/productModel";

export async function getProducts(req: any, res: any) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, {
      "Content-Type": "application/json ",
    });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}
