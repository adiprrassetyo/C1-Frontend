import api from "./api";

export const retrive = (page) =>
  api.get("/admin/users", { params: { page: page } });
