import axios from "axios";

export default axios.create({
    baseURL: 'https://dummyjson.com'
});

export const axiosPrivate = axios.create({
    baseURL: 'https://fantasyleague-pl7o.onrender.com/user'
});
