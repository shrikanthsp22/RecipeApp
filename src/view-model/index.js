export class ViewModel {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async init() {
    await this.model.fetchRecipes();
    this.view.render(this.model.data, this);
  }
}
