import "./models/models";
import { sequelize } from "./db.js";

sequelize.sync({ force: true });
