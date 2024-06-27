import fs from "fs";
import { createDetails, createProducts } from "../services/products.services";

const products = fs.readFileSync("./public/api/products.json", "utf-8");
const accessories = fs.readFileSync("./public/api/accessories.json", "utf-8");
const phones = fs.readFileSync("./public/api/phones.json", "utf-8");
const tablets = fs.readFileSync("./public/api/tablets.json", "utf-8");

createDetails(JSON.parse(accessories));
createDetails(JSON.parse(phones));
createDetails(JSON.parse(tablets));

createProducts(JSON.parse(products));
