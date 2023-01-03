import api from './api'

export const retrive = () => api.get('/trans')
export const retriveAdmin = (page = 1) =>
    api.get('/admin/trans', {
        params: { page },
    })
export const remove = (id) => api.delete(`/admin/trans/${id}`)
export const newTransaction = (data) => api.post('/trans', data)
export const updateTransaction = (data, id) =>
    api.put(`/trans/${id}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
export const retriveById = () =>
    api.get('/trans/user', { params: { size: 99 } })
export const retriveByTransId = (id) => api.get(`trans/${id}`)
