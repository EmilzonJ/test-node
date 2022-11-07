import fs from "fs";
import {Word, Word_JSON} from '../models/word.model';
import {dataPaths} from "../utils/paths";
import {getCategoryById} from "./category.service";

export const getWords = (): Word[] => {
  const wordsJson: Word_JSON[] = getWordsJSON();

  return wordsJson.map((word: Word_JSON) => {
    return {
      id: word.id,
      word: word.word,
      category: getCategoryById(word.categoryId) || { id: 0, name: "Unknown" },
    };
  });
};

export const getWordById = (id: number): Word | undefined => {
  return getWords().find(
    (word) => word.id === id
  );
};

export const insertWord = (word: Word_JSON): void => {
  const path: string = dataPaths.words;
  const words: Word_JSON[] = getWordsJSON();

  words.push(word);

  fs.writeFileSync(path, JSON.stringify(words), { encoding: "utf-8", flag: "w+" });
};

export const updateWord = (id: number, word: Word_JSON): void => {
  const path: string = dataPaths.words;
  const words: Word_JSON[] = getWordsJSON();

  const index = words.findIndex((word) => word.id === id);
  words[index] = word;

  fs.writeFileSync(path, JSON.stringify(words), { encoding: "utf-8", flag: "w+" });
}

export const deleteWord = (id: number): void => {
  const path: string = dataPaths.words;
  const words: Word_JSON[] = getWordsJSON();

  const filteredWords: Word_JSON[] = words.filter((word) => word.id !== id);

  fs.writeFileSync(path, JSON.stringify(filteredWords), { encoding: "utf-8", flag: "w+" });
};


// To use in this file only:
const getWordsJSON = (): Word_JSON[] => {
  const path: string = dataPaths.words;
  return JSON.parse(fs.readFileSync(path, "utf8"));
};
