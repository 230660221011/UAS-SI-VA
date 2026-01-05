import api from './axios';

export const createBorrowing = async data => {
  const res = await api.post('/borrowings', data);
  return res.data;
};

export const getBorrowings = async () => {
  const res = await api.get('/borrowings');
  return res.data;
};

export const updateBorrowing = async (id, payload) => {
  const res = await api.put(`/borrowings/${id}`, payload);
  return res.data;
};

export const deleteBorrowing = async id => {
  const res = await api.delete(`/borrowings/${id}`);
  return res.data;
};
