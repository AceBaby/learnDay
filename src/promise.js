class NewPromise {
    callback = [];
    constructor(fn) {
        fn(this._resolve.bind(this));
    }
    then(onFulfilled) {
        this.callback.push(onFulfilled);
    }
    _resolve(value) {
        this.callback.forEach(fn => fn(value));
        console.log(this.callback);
    }
}

let p = new NewPromise(resolve => {
    setTimeout(() => {
        console.log('done');
        resolve('5秒');
    }, 5000);
});
p.then((tip) => {
    console.log(tip);
});