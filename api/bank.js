import { AxiosBaseRequest } from "."

const baseURL = "/bank"

export const apiGetAllBank = async () => {

    const response = await AxiosBaseRequest().get(`${baseURL}/all`)

    return response.data
}

export const apiPostBank = async (input) =>{

    const response = await AxiosBaseRequest().post(`${baseURL}/create`,input)

    return response.data

}