import api from "./api";

export const register = (user) => api.post("/register", user);
export const login = (user) => api.post("/login", user);
export const logout = () => api.post("/logout");
