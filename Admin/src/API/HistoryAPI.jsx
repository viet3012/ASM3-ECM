import axiosClient from "./axiosClient";

const HistoryAPI = {
  getHistoryAPI: (query) => {
    const url = `https://asm3-be.glitch.me/api/product/search?product=${query}`;
    return axiosClient.get(url);
  },

  getOrder: () => {
    const url = `http://localhost:5000/api/user/orders`;
    return axiosClient.get(url);
  },
  getDelete: (query, id) => {
    const url = `https://asm3-be.glitch.me/api/product/delete/${query}?p=${id}`;
    return axiosClient.get(url);
  },
};

export default HistoryAPI;
