import { AxiosBaseRequest } from "."

const baseURL = "/bank"

export const apiGetAllBank = async () => {

    const response = await AxiosBaseRequest().get(`${baseURL}/all`)

    return response.data
}