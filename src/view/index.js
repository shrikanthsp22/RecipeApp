import { MainView } from "./templates/main.template";
import { LoadingView } from "./templates/LoadingView";

export class View {
  constructor() {
    this.app = document.getElementById("app");
    this.vm = undefined;
  }

  init(vm) {
    this.vm = vm;
    this.registerViews();
  }

  render(vm) {
    this.updateView(this.loader);
  }

  updateView(view, data, vm) {
    this.app.insertAdjacentHTML("afterbegin", view.render(data, vm));
  }

  registerViews() {
    this.mainView = new MainView(this.vm);
    this.loader = new LoadingView();
  }
}
