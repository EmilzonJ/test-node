import express from "express";
import wordRoutes from "./routes/words.route";
import categoryRoutes from "./routes/categories.route";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/api/words', wordRoutes);
app.use('/api/categories', categoryRoutes);


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
