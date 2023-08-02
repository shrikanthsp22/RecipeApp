import { MainView } from "./templates/main.template";
import { LoadingView } from "./templates/LoadingView";

export class View {
  constructor() {
    this.app = document.getElementById("app");
    this.registerViews();
  }

  async render(data, vm) {
    this.vm = vm;

    this.updateView(this.loader);
    await this.vm.fetchRecipes();
    this.updateView(this.mainView, data);
  }

  updateView(view, data) {
    this.app.insertAdjacentHTML("afterbegin", view.render(data));
  }

  registerViews() {
    this.mainView = new MainView();
    this.loader = new LoadingView();
  }
}
