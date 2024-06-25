import "./models/Product.model.js";
import "./models/ProductDetails.model.js";
import { sequelize } from "./db.js";

sequelize.sync({force: true});
