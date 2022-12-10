import axios, * as others from 'axios';

const instance = axios.create({
    withCredentials : true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers : {
        "API-KEY": "d97005e2-e63d-414c-910b-7c582882782f"
    }
})

export const usersAPI = {
    getUsers (pageNumber = 1, pageSize = 10) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then (response => {
            
            return response.data})
    },

    setUnfolow (id) {
    return instance.delete(`follow/${id}`)
        .then (response => response.data)
    },

    setFolow (id) {
    return instance.post(`follow/${id}`, {})
        .then (response => response.data)
    }

}

export const authAPI = {
    getAuth () {
        return instance.get(`auth/me`)
            .then( response => response.data )
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
        .then( response => response.data )
    }
}
