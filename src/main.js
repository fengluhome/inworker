import Worker from 'worker-loader!./worker/index.js';
let index = 0,
    prefix = "_id",
    hash = {};
export class InWorker {
    constructor() {
        this.worker = new Worker();
        this.worker.onmessage = function (event) {
            let {
                id,
                data
            } = event.data;

            let cacheFun = hash[id];
            cacheFun && cacheFun(data);
            hash[id] = null;
        };
    }
    postMessage({
        name,
        argument = {},
        callback
    }) {
        if (!name) {
            throw new TypeError('name must be a String Path. example: a.b');

        }
        if (!callback) {
            throw new TypeError('callback must be a function.');
        }
        //如果有ID
        if (callback.id) {
            let cacheFun = hash[callback.id];
            if (cacheFun == callback) {
                //delete
                hash[callback.id] = null;
            }
        }
        let id = prefix + (index++)
        callback.id = id;
        hash[id] = callback;

        this.worker.postMessage({
            id,
            name: name,
            argument: argument
        });
    }


}