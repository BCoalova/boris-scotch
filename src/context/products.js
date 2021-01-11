import axios from "axios";
export default axios.create({
    baseURL: "https://coderhouse-ecommerce-b2612-default-rtdb.firebaseio.com/"
});