import registerWorker from "./register";

import compute from './modules/compute';
import ajaxCompute from './modules/ajaxCompute';
 

registerWorker({
    compute,
    ajaxCompute

})