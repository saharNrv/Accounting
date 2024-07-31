import { AxiosBaseRequest } from "."

export const apiSignUp = async (input) => {
  const response = await AxiosBaseRequest().post('/account/signup', input)
  
  return response.data
}


export const apiSignIn = async (input) => {
  const response = await AxiosBaseRequest().post(`/account/signin`, input)
  
  return response.data
}


export const apiGetAccount = async () =>{
  const response = await AxiosBaseRequest().get('/account')

  return response.data
}