import moment from "moment"
import { API_VERSION, AUTH_TOKEN_KEY, BASE_URL } from "../common/const"
import axios from "axios"

export const AxiosBaseRequest = (extraHeader) => {
    // get token in localstorage
    const json = localStorage.getItem(AUTH_TOKEN_KEY)

    // parsing token include (token, refresh toke, expire and ...)
    const auth = json ? JSON.parse(json) : null

    // checking expire in token bundler
    if (auth) {
        //checking expire today date
        const expired = moment(auth.expire).isBefore(moment())

        if (!expired || auth.token !== "") {
            return axios.create({
                baseURL: `${BASE_URL}${API_VERSION}`,
                headers: extraHeader ? { ...extraHeader, Authorization: `Bearer ${auth.token}` } : { Authorization: `Bearer ${auth.token}` }
            })
        }

    }
    return axios.create({
        baseURL: `${BASE_URL}${API_VERSION}`,
        headers: {
            "Content-Type": "appliaction/json"
        }

    })
}