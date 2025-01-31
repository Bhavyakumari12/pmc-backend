// Use import instead of require
import express from "express";
import productRoutes from "./routes/productRoutes.js";
import templateRoutes from "./routes/templateRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/templates", templateRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
