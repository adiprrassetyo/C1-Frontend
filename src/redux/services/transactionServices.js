import api from "./api";

export const retrive = () => api.get("/trans");
export const retriveAdmin = (page = 1) =>
  api.get("/admin/trans", {
    params: { page },
  });
