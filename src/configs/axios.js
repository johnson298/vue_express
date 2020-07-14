import Vue from 'vue';
import Axios from 'axios';
import Vueaxios from 'vue-axios';
require('dotenv').config();

// config Axios
Axios.defaults.baseURL = process.env.BASE_URL || "http://localhost:5000";
Axios.defaults.headers.common["Accept"] = "application/json";
Axios.defaults.headers.common["Content-type"] = "application/json";

const token = localStorage.getItem("token");
if(token){
    Axios.defaults.headers.common["access_token"] = token;
}

Vue.prototype.$https = Axios;


Vue.use(Vueaxios, Axios);