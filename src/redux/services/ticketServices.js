import api from './api'
import moment from 'moment/moment'

export const retrive = ({ from, to, type, date, dateEnd, willFly, page }) => {
    const start = date
    const end = dateEnd
    return api.get('/tickets', {
        params: {
            from: from.city,
            to: to.city,
            airport_from: from.airport,
            airport_to: to.airport,
            type,
            date_start: start,
            date_end: end,
            willFly,
            page,
            size: 6,
        },
    })
}

export const retriveById = (id) => api.get(`/tickets/id/${id}`)
export const create = (formData) => api.post('/tickets', formData)
export const update = (formData, id) => api.put(`/tickets/${id}`, formData)
export const remove = (id) => api.delete(`/tickets/${id}`)
