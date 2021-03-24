import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'd2011f6b-32e3-42ff-a059-a0c07eeb1179'}
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profilePageAPI = {
    getProfilePage(userId) {
        return instance.get(`profile/` + userId)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

