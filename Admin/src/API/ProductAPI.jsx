import axiosClient from "./axiosClient";

const ProductAPI = {
  getProducts: () => {
    const url = "http://localhost:5000/api/product";
    return axiosClient.get(url);
  },

  postAddProduct: (query) => {
    const url = `http://localhost:5000/api/product/add`;
    return axiosClient.post(url, query);
  },

  getDelete: (id) => {
    const url = `http://localhost:5000/api/product/delete`;
    return axiosClient.delete(url, { data: id });
  },

  getDetailProduct: (id) => {
    const url = `http://localhost:5000/api/product/getdetail/${id}`;
    return axiosClient.get(url);
  },
  postEditProduct: (data, id) => {
    const url = `http://localhost:5000/api/product/edit/${id}`;
    return axiosClient.post(url, data);
  },

  getPagination: (query) => {
    const url = `/products/pagination${query}`;
    return axiosClient.get(url);
  },
};

export default ProductAPI;
