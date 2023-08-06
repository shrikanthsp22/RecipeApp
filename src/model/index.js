import { getRecipes } from "./services/Api";
import State from "./state";
export class Model {
  constructor() {
    this.data = {
      message: "Hello there",
      recipes: [],
    };
  }

  init(render) {
    this.state = new State(render);
  }

  async fetchRecipes() {
    try {
      const recipes = await getRecipes();
      this.data.recipes = recipes.data.recipes;
      this.state.state.recipes = recipes.data.recipes;
    } catch (error) {}
  }
}
