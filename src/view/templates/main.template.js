export const template = (data) => `
    <div  class="main">
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

export class MainView {
  render(data) {
    return template(data);
  }
}
