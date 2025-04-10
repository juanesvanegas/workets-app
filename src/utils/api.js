import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
});


const get = async (url) => {
    return  await api.get(url);
     

}

const post = async (url, data) => {

    return await api.post(url, data);
     
}

const put = async (url, data) => {
    return await api.put(url, data);
}

const remove = async (url) => {
    return await api.delete(url);
}

export { get, post, put, remove };  