import api from "./api";

export const retrive = () => api.get("/promos");
export const retriveById = (id) => api.get(`/promo/${id}`);
