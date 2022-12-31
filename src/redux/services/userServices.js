import api from "./api";

export const retrive = (page) =>
  api.get("/admin/users", { params: { page: page, size: 10 } });
export const retriveById = (id) => api.get(`/admin/user/${id}`);
export const retriveCurrent = () => api.get("/user ");

export const create = (formData) => api.post("/admin/users", formData);
export const update = (formData, id) =>
  api.put(`/admin/user/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const updateCurrent = (formData) =>
  api.put(`/user/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const remove = (id) => api.delete(`/admin/user/${id}`);
export const updatePasswordCurrent = (formData) =>
  api.put("/user/password", formData);
