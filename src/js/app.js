import Vue from 'vue';

 window.Vue = Vue;
 import VueMoment from 'vue-moment';

 Vue.use(VueMoment);

let axios = require('axios');
window.axios = axios;


let jQuery = require('jquery');
window.jQuery  = jQuery;




import 'popper.js';

import 'bootstrap';
import { Liquid } from 'liquidjs';


  // outputs 'Alice'


//vue components

require('./Components/Products.js');
require('./Components/cartForm.js');
// require('./Components/AddCart.js');
//js 

require('./product.js');
require('./header.js');


