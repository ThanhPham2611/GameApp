import axios from 'axios';
import {API_URL} from '@env';
import TokenProvider from '../utilities/authenticate/TokenStorage';

const getUrlPrefix = () => '/';
const instance = axios.create({
  baseURL: API_URL,
});

const setToken = () => {
  const accessToken = TokenProvider.getToken();
  if (accessToken) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }
};

setToken();

export const get = async (url: string, params = {}) => {
  setToken();
  try {
    const config = {params: params};
    const response = await instance.get(getUrlPrefix() + url, config);
    return _responseHandler(response);
  } catch (error) {
    return _errorHandler(error);
  }
};

export const put = async (url: string, data = {}) => {
  setToken();
  try {
    let response = {};
    if (data.toLocaleString() === '[object FormData]') {
      response = await instance.put(getUrlPrefix() + url, data);
    } else {
      response = await instance.put(getUrlPrefix() + url, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    }
    return _responseHandler(response);
  } catch (error) {
    return _errorHandler(error);
  }
};

export const post = async (url: string, data = {}) => {
  setToken();
  try {
    const response = await instance.post(getUrlPrefix() + url, data);
    return _responseHandler(response);
  } catch (error) {
    return _errorHandler(error);
  }
};

export const postFile = async (url: string, data = {}) => {
  try {
    setToken();
    const config = {
      headers: {'Content-Type': 'multipart/form-data'},
    };
    const response = await instance.post(getUrlPrefix() + url, data, config);
    return _responseHandler(response);
  } catch (error) {
    return _errorHandler(error);
  }
};

export const del = async (url: string, data = {}) => {
  setToken();
  try {
    const response = await instance.delete(getUrlPrefix() + url, {data});
    return _responseHandler(response);
  } catch (error) {
    return _errorHandler(error);
  }
};

export const patch = async (url: string, data = {}) => {
  setToken();
  try {
    const response = await instance.patch(getUrlPrefix() + url, data);
    return _responseHandler(response);
  } catch (error) {
    return _errorHandler(error);
  }
};

const _responseHandler = (response: any, url?: string) => {
  const data = response.data;
  return data;
};

const _errorHandler = async (err: any) => {
  if (err.response && err.response.status === 401) {
    try {
      //Handle refetch token
    } catch (error) {
      TokenProvider.clearToken();
    }
  }
  throw err;
};
