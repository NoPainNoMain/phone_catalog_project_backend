import { Sequelize } from 'sequelize'
import 'dotenv/config'

const {
 DB_URL
} = process.env;

export const sequelize = new Sequelize(DB_URL);
