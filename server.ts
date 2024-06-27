import express, { Express } from "express";
import path from "path";
import { fileURLToPath } from "url";
import productsRouter from "./routers/products.router";
import { errorHandler } from "./src/middlewares/errorHandler";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3000;
const origin = process.env.FRONTEND_URL;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/products", productsRouter);
app.get("/", (req, res) => {
  res.send("Server is running. Static files are served at /static");
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
