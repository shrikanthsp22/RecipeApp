class Observable {
  subscribers = [];

  constructor() {
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.subscribers.forEach((observer) => observer(data));
  }
}

export { Observable };
