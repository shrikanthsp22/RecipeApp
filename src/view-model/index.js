import { Observable } from "../index.js";

export class ViewModel {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // this.tasksObservable = new Observable();
  }

  async init() {
    this.view.init(this);
    this.model.init(this.view.mainView.render.bind(this.view.mainView));
    this.fetchRecipes();
  }

  async fetchRecipes() {
    await this.model.fetchRecipes();
    // this.tasksObservable.notify(this.model.data);
  }

  deleteAll() {
    this.model.state.state.recipes = [];
    // this.tasksObservable.notify(this.model.data);
  }
}
