import { Observable } from "../index.js";

export class ViewModel {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.tasksObservable = new Observable();
  }

  async init() {
    this.view.render(this);
  }

  async fetchRecipes() {
    await this.model.fetchRecipes();
    this.tasksObservable.notify(this.model.data);
  }

  deleteAll() {
    this.model.recipes = [];
    this.tasksObservable.notify(this.model.data);
  }
}
