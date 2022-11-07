import fs from "fs";
import {Category, Category_JSON} from '../models/word.model';
import {dataPaths} from "../utils/paths";

export const getCategories = (): Category[] => {
  const path: string = dataPaths.categories;
  const categories: Category_JSON[] = JSON.parse(fs.readFileSync(path, "utf8"));

  return categories.map((category: Category_JSON) => {
    return {
      id: category.id,
      name: category.name
    };
  });
};

export const getCategoryById = (id: number) => {
  return getCategories().find(
    (category) => category.id === id
  );
};


export const insertCategory = (category: Category): void => {
  const path: string = dataPaths.categories;
  const categories: Category[] = getCategories();

  categories.push(category);

  fs.writeFileSync(path, JSON.stringify(categories), { encoding: "utf-8", flag: "w+" });
};

export const deleteCategory = (id: number): void => {
  const path: string = dataPaths.categories;
  const categories: Category[] = getCategories();

  const filteredCategories: Category[] = categories.filter((category) => category.id !== id);

  fs.writeFileSync(path, JSON.stringify(filteredCategories), { encoding: "utf-8", flag: "w+" });
}
