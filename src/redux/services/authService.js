import api from "./api";

export const register = (formData) => api.post("/register", formData);
export const login = (formData) => api.post("/login", formData);
export const logout = () => api.post("/logout");