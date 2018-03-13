 let register = {};
 function find(key) {
     let keyArr = key.split('.');
     let result = register;
     for (let i = 0; i < keyArr.length; i++) {
         result = result[keyArr[i]];
     }
     return result;
 }

 self.addEventListener('message', function (event) {
     let {
         id,
         name,
         argument
     } = event.data;
     let findObject = find(name);
     let data = findObject(argument);
     if (data.then && typeof data.then == "function") {
         data.then(data => {
             this.postMessage({
                 id,
                 data
             });
         })
     } else {
         this.postMessage({
             id,
             data
         });
     }

 });

 export default function registerWorker(params) {
     for (let key in params) {
         register[key] = params[key];
     }
 }