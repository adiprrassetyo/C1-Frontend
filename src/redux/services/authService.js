import api from "./api";

export const register = (formData) => api.post("/register", formData);
export const login = (formData) => api.post("/login", formData);
export const reset = (email) => api.post("/forget-password", { email });
