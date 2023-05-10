import { getRecipes } from "./services/api";
export class Model {
  constructor() {
    this.data = {
      message: "Hello there",
      recipes: [],
    };
  }

  async fetchRecipes() {
    try {
      const recipes = await getRecipes();
      this.data.recipes = recipes;
    } catch (error) {}
  }
}
