import { MainView } from "./templates/main.template";

export class View {
  constructor() {
    this.app = document.getElementById("app");
  }

  render(data, vm) {
    this.vm = vm;
    this.app.insertAdjacentHTML("afterbegin", new MainView(data).render());
  }
}
