import express from "express";
import { Category } from "../models/word.model";
import {
  getCategories,
  getCategoryById,
  insertCategory,
  deleteCategory,
} from "../services/category.service";

const router = express.Router();

router.get("/", (_req, res) => {
  const categories: Category[] = getCategories();
  res.send(categories);
});

router.get("/:id", (_req, res) => {
  const category: Category | undefined = getCategoryById(
    Number(_req.params.id)
  );

  if (!category) return res.status(404).send("Category not found");

  return res.send(category);
});

router.post("/", (_req, res) => {
  insertCategory(_req.body);

  return res.status(204).send("Category inserted");
});

router.delete("/:id", (_req, res) => {
  const category: Category | undefined = getCategoryById(
    Number(_req.params.id)
  );

  if (!category) return res.status(404).send("Category not found");

  deleteCategory(Number(_req.params.id));

  return res.status(204).send("Category deleted");
});

export default router;
