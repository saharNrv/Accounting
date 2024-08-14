import { AxiosBaseRequest } from "."

const baseURL = "/account"

export const apiSignUp = async (input) => {
  const response = await AxiosBaseRequest().post(`${baseURL}/signup`, input)

  return response.data
}

export const apiSignIn = async (input) => {
  const response = await AxiosBaseRequest().post(`${baseURL}/signin`, input)

  return response.data
}

export const apiGetAccount = async () => {
  const response = await AxiosBaseRequest().get(baseURL)

  return response.data
}

export const apiChangeName = async (input) => {
  const response = await AxiosBaseRequest().patch(`${baseURL}/change_name`, input)

  return response.data
}

export const apiChangePassword = async (input) => {

  const response = await AxiosBaseRequest().patch(`${baseURL}/change_password`, input)

  return response.data

}