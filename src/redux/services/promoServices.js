import api from "./api";

export const retrive = () => api.get("/promos");
export const retriveAdmin = (page = 1) =>
  api.get("/admin/promos", {
    params: { page },
  });
export const retriveById = (id) => api.get(`/promo/${id}`);
