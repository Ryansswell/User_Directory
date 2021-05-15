import axios from "axios";

const URL = "https://randomuser.me/api/?results=50&nat=us";
// const APIKEY = "#";

// export default {
//     search: function (query) {
//         return axios.get(BASEURL + query + APIKEY);
//     },
// };

const API = {
    search: function () {
        return axios.get(URL);
    },
};

export default API;


