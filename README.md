# inworker
###### 依赖 worker-loader 插件
 


###### 目录
```text
src/
├── worker/modules目录   业务耗时计算方法  
├── worker/index.js      编译时向worker注册的文件
├── worker/register      主线程与子线程通讯逻辑封装
└── main.js              对外公开inWorker实例主文件
```

向worker注入算法文件，worker/index.js文件示例：

```
import registerWorker from "./register";

import compute from './modules/compute';
import ajaxCompute from './modules/ajaxCompute';
 

registerWorker({
    compute,
    ajaxCompute

})
```

###### 示例：
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

```