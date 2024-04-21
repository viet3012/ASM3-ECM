import axiosClient from "./axiosClient";

const CartAPI = {
  getCarts: (query) => {
    const url = `http://localhost:5000/api/user/cart/${query}`;
    return axiosClient.get(url);
  },

  addCart: (query, post) => {
    const url = `http://localhost:5000/api/user/addcart/${query}`;
    return axiosClient.post(url, post);
  },

  deleteCart: (query, post) => {
    const url = `http://localhost:5000/api/user/deletecart/${query}`;
    return axiosClient.post(url, post);
  },

  updateCart: (query, post) => {
    const url = `http://localhost:5000/api/user/updatecart/${query}`;
    return axiosClient.put(url, post);
  },
};

export default CartAPI;
