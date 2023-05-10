export class View {
  constructor() {
    this.app = document.getElementById("app");
  }

  render(data) {
    this.app.innerHTML = `
      <h1>${data.message}</h1>
      <h3>Recipes</h3>
      <h4>${data.recipes.status}</h4>
    `;
  }
}
