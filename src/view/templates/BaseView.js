export class BaseView {
  constructor() {
    this.template = "";
    this.app = document.getElementById("app");
  }

  renderBase(markup) {
    this.app.innerHTML = "";
    this.app.insertAdjacentHTML("afterbegin", markup);
  }
}
