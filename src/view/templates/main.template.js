import { BaseView } from "./BaseView";

export const template = (data) => `
    <div id="main" class="main">
        <div>
            ${data.message}
        </div>
        ${data.recipes
          .map((recipe) => {
            return /*html*/ `
                    <div class="recipe">
                        <h3>${recipe.title}</h3>
                        <div class="recipe__image">
                            <img src="${recipe.image_url}" alt="${recipe.title}" />
                        </div>
                    </div>
                `;
          })
          .join("")}
        <h4>${data.recipes.status}</h4>
    </div>
        `;

export class MainView extends BaseView {
  constructor(vm) {
    super();
    this.vm = vm;
    // this.observe();
  }

  render(data) {
    const markUp = template(data);
    // Refactor this to use the BaseView class
    document.getElementById("app").addEventListener("click", (e) => {
      this.vm.deleteAll();
      console.log("Clicked");
    });
    this.renderBase(markUp);
  }

  observe() {
    this.vm.tasksObservable.subscribe(this.render.bind(this));
  }
}
