import {del, get, post, put} from '../request';

export const getListExample = (payload: any) => get('/api/v1/example', payload);
export const deleteExample = (id: any) => del(`/api/v1/example/${id}`);
export const createExample = (payload: any) => post('/api/v1/example', payload);
export const getDetailExample = (id: any) => get(`/api/v1/example/${id}`);
export const updateExample = (payload: any, id: any) =>
  put(`/api/v1/example/${id}`, payload);
