export interface Word_JSON {
  id: number;
  word: string;
  categoryId: number;
}

export interface Category_JSON{
  id: number;
  name: string;
}

export type Word ={
  id: number;
  word: string;
  category: Category;
}

export interface Category{
  id: number;
  name: string;
}
