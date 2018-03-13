# inworker
web worker manage

```
import {
    InWorker
} from "./../../src/main";

let inWorker = new InWorker();

/**
 * 普通示例
 */
inWorker.postMessage({
    name: "compute.add",
    argument: {
        a: 1,
        b: 2
    },
    callback: function (data) {
        console.log('compute.add', data);
    }

});

/**     
 * 节流示例
 */
let callback = function (data) {
    console.log('compute.addSquare', data);
}
inWorker.postMessage({
    name: "compute.addSquare",
    argument: {
        a: 1,
        b: 2
    },
    callback: callback

});
inWorker.postMessage({
    name: "compute.addSquare",
    argument: {
        a: 1,
        b: 2
    },
    callback: callback

});

/**   
 * ajax 在worker 请求
 */

inWorker.postMessage({
    name: "ajaxCompute.add",
    argument: {
        a: 1,
        b: 2
    },
    callback: function (data) {
        console.log("ajaxCompute", data);
    }

});


inWorker.postMessage({
    name: "ajaxCompute.add",
    argument: {
        a: 1,
        b: 2
    },
    callback: function (data) {
        console.log("ajaxCompute", data);
    }

});
```