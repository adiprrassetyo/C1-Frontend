import api from './api'

export const retrive = (page) =>
    api.get('/promos', {
        params: { page },
    })
export const retriveAdmin = (page) =>
    api.get('/admin/promos', {
        params: { page },
    })

export const retriveById = (id) => api.get(`/promo/${id}`)
export const remove = (id) => api.delete(`/admin/promo/${id}`)
export const create = (promoData) =>
    api.post('admin/promos', promoData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
export const update = (id, promoData) =>
    api.put(`admin/promo/${id}`, promoData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
