import axios from "axios";

axios.defaults.baseURL = 'http://192.168.8.171:5000';

export default {
    registerUser: function (userData) {
        return axios.post("/api/user/register", userData);
    },
    loginUser: function (userData) {
        return axios.post("/api/auth/signin", userData);
    },
    getUserList: function () {
        return axios.get(`/api/users`);
    },
    updateUserData: function(data) {
        return axios.put(`/api/user`, data);
    },
    updateStatus: function(data) {
        return axios.put(`/api/actkey`, data);
    },
    getTableData: function (id) {
        return axios.get(`/api/actkeys?id=${id}`);
    },
    addActKeyData: function (val) {
        return axios.post('/api/newactkey', val)
    },
    getDetailData: function (id) {
        return axios.post(`/api/agents`, {
            actrid: id
        })
    },
    getDeviceData: function (id) {
        return axios.get(`/api/device?id=${id}`);
    },
    getDeviceData: function (id) {
        return axios.get(`/api/device?id=${id}`);
    },
    getAllAppData: function (id) {
        return axios.get(`api/allapps?id=${id}`);
    },
    getGuideData: function (id) {
        return axios.get(`/api/guide?id=${id}`);
    }
}