import { AxiosBaseRequest } from "."

const baseURL = '/expenses'

export const apiGetByIdBankExpenses = async (bankID) => {
    const response = await AxiosBaseRequest().get(`${baseURL}/by_bank_id/${bankID}`)

    return response.data

}


export const apiPostExpenses = async (input) => {
    const response = await AxiosBaseRequest().post(`${baseURL}/create`, input)

    return response.data

}


export const apiGetAllExpenses = async () => {
    const response = await AxiosBaseRequest().get(`${baseURL}/get_all`)

    return response.data

}


export const apiGetMonthExpenses = async (year, month) => {
    const response = await AxiosBaseRequest().get(`${baseURL}/get_in_month/${year}/${month}`)

    return response.data
}


export const apiGetExpensesID = async (bankID) => {
    const response = await AxiosBaseRequest().get(`${baseURL}/${bankID}`)

    return response.data
}


export const apiPutExpensesID = async (bankID) => {
    const response = await AxiosBaseRequest().put(`${baseURL}/${bankID}`)

    return response.data
}


export const apiDeleteExpenses = async (bankID) => {
    const response = await AxiosBaseRequest().delete(`${baseURL}/${bankID}`)

    return response.data
}

export const apiPeriodTime = async (startMonth, startYear, endMonth, endYear) => {

    const response = await AxiosBaseRequest().get(`${baseURL}/get_period_time?fromYear=${startYear}&fromMonth=${1}&toYear=${endYear}&toMonth=${12}`)

    return response.data

}