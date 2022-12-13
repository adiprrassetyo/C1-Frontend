import api from "./api";

export const retrive = ({ from, to, type, date, willFly }) => {
  return api.get("/tickets", {
    params: {
      from: from.city,
      to: to.city,
      airport_from: from.airport,
      airport_to: to.airport,
      type,
      date,
      willFly,
    },
  });
};

export const retriveById = (id) => api.get(`/tickets/${id}`);
export const create = (formData) => api.post("/tickets", formData);
export const update = (formData, id) => api.post(`/tickets/${id}`, formData);
export const remove = (id) => api.post(`/delete/${id}`);
