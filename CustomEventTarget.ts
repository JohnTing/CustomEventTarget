export class CustomEventTarget<T> {

    private listeners = new Map<string, Function[]>();
    addEventListener<K extends keyof T & string>(type: K, listener: (event: T[K]) => void): void {
        if (!this.listeners.get(type)) {
            this.listeners.set(type, []);
        }
        const stack = this.listeners.get(type) as Function[];
        if (!stack.includes(listener)) {
            stack.push(listener);
        }
    }
    removeEventListener<K extends keyof T & string>(type: K, listener: (event: T[K]) => void): void {
        if (!this.listeners.get(type)) {
            return;
        }
        const stack = this.listeners.get(type) as Function[];
        if (stack.includes(listener)) {
            stack.splice(stack.indexOf(listener), 1);
        }
    }
    dispatchEvent<K extends keyof T & string>(type: K, arg: T[K]) {
        if (!(this.listeners.has(type))) {
            return;
        }
        const stack = this.listeners.get(type) as Function[];
        const stack2 = stack.slice();
        for (let i = 0; i < stack.length; i++) {
            stack2[i].call(this, arg);
        }
        return;
    }
}