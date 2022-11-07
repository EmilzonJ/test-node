import express from "express";
import { Word } from "../models/word.model";
import {
  getWords,
  getWordById,
  insertWord,
  deleteWord,
} from "../services/word.service";

const router = express.Router();

router.get("/", (_req, res) => {
  const words: Word[] = getWords();
  res.send(words);
});

router.get("/:id", (_req, res) => {
  const word: Word | undefined = getWordById(Number(_req.params.id));

  if (!word) return res.status(404).send("Word not found");

  return res.send(word);
});

router.post("/", (_req, res) => {
  insertWord(_req.body);

  return res.status(204).send("Word inserted");
});

router.delete("/:id", (_req, res) => {
  const word: Word | undefined = getWordById(Number(_req.params.id));

  if (!word) return res.status(404).send("Word not found");

  deleteWord(Number(_req.params.id));

  return res.status(204).send("Word deleted");
});

export default router;
