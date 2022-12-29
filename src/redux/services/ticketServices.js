import api from "./api";

export const retrive = ({ from, to, type, date, dateEnd, willFly, page }) => {
  return api.get("/tickets", {
    params: {
      from: from.city,
      to: to.city,
      airport_from: from.airport,
      airport_to: to.airport,
      type,
      date_start: date,
      date_end: dateEnd,
      willFly,
      page,
      size: 6,
    },
  });
};

export const retriveById = (id) => api.get(`/tickets/id/${id}`);
export const create = (formData) => api.post("/tickets", formData);
export const update = (formData, id) => api.put(`/tickets/${id}`, formData);
export const remove = (id) => api.delete(`/tickets/${id}`);
