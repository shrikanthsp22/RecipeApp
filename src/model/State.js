import { InitialState } from "./InitialState.js";
class State {
  constructor(render) {
    this.render = render;
    this.handler = {
      set(target, property, value) {
        target[property] = value;
        render(target);
        return true;
      },
    };
    this.state = new Proxy(InitialState, this.handler);
  }
}

export default State;
