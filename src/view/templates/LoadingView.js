export const template = () => `
    <div  class="loading">
       Loading...
    </div>
        `;

export class LoadingView {
  constructor(data) {
    this.markup = template();
  }

  render() {
    return this.markup;
  }
}
