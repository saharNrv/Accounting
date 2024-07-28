import { AxiosBaseRequest } from "."

export const apiSignUp = async (input)=>{
  const response =  await AxiosBaseRequest().post('/account/signup',input)
  return response.data
}