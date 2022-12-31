import api from "./api";

export const retrive = () => api.get(`/notify`);
export const readOne = (id) => api.put("/notify", { id: [...id] });
export const readAll = () => api.put("/notify/all");
