const MAX = 10000;

export default class Task {

    constructor(description) {
        this.id = Math.floor(Math.random() * MAX);
        this.description = description;
        this.completed = false;
    }
    get(propName) {
        return this[propName];
    }
    set(propName, value) {
        this[propName] = value;
    }
}
