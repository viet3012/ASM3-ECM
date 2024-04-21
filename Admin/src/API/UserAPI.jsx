import axiosClient from "./axiosClient";

const UserAPI = {
  postSignUp: (query) => {
    const url = `http://localhost:5000/api/auth/signup`;
    return axiosClient.post(url, query);
  },
  postSignIn: (query) => {
    const url = "http://localhost:5000/api/auth/signinadmin";
    return axiosClient.post(url, query);
  },
  getBusinessInfo: () => {
    const url = "http://localhost:5000/api/user/getbusiness";
    return axiosClient.get(url);
  },
};

export default UserAPI;
