import api from "./api";

export const retrive = (page) => api.get("/promos", { params: { page } });
export const retriveById = (id) => api.get(`/promo/${id}`);
