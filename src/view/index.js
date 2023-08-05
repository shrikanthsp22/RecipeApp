import { MainView } from "./templates/main.template";
import { LoadingView } from "./templates/LoadingView";

export class View {
  constructor() {
    this.app = document.getElementById("app");
    this.vm = undefined;
  }

  async render(vm) {
    console.log("vm", vm);
    this.vm = vm;
    this.registerViews();
    this.updateView(this.loader);
    await this.vm.fetchRecipes();
  }

  updateView(view, data, vm) {
    this.app.insertAdjacentHTML("afterbegin", view.render(data, vm));
  }

  registerViews() {
    this.mainView = new MainView(this.vm);
    this.loader = new LoadingView();
  }
}
