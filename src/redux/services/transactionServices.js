import api from "./api";

export const retrive = () => api.get("/trans");
export const retriveAdmin = (page = 1) =>
  api.get("/admin/trans", {
    params: { page },
  });
export const remove = (id) => api.delete(`/admin/trans/${id}`);
export const retriveById = () => api.get("/trans/user");
