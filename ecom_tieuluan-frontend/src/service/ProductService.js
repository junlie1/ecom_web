import axios from 'axios';
import { axiosJWT } from './UserService';

export const getAllProduct = async ({ page = 0, limit = 8, sort = '', filter = '', search = '' }) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/product/get-all`, { 
        params: { page, limit, sort, filter, search },
    });
    return response;
    
};

export const createProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL_BACKEND}/product/create`,data)
    return res.data;
}

export const getDetailsProduct = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/product/get-details/${id}`);    
    return res.data
}

export const updateProduct = async (id, access_token,data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL_BACKEND}/product/update/${id}`,data, {
        headers: {
            token: `Bearer ${access_token}`
        }
    });    
    return res.data
}

export const deleteProduct = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL_BACKEND}/product/delete/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}
export const getAllTypeProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/product/get-all-type`)
    return res.data
}

export const getProductType = async (type) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/product/get-all-poductType?filter=type&filter=${type}`)
    return res.data
}