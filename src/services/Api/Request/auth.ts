import { AxiosResponse } from 'axios'
import { storeLocalData } from '../../LocalStorageService'
import { Api } from '../api'

export interface login {
  login: string
  password: string
}

export interface createUser {
  login: string
  password: string
}
export const sigin = (login: string, password: string) => {
  const user: createUser = {
    login,
    password,
  }

  return Api.post(`/auth/login`, user).then((response) => {
    if (response.data.token) {
      storeLocalData('user', JSON.stringify(response.data.token))
    }

    return response.data
  })
}
const create = (data: any): Promise<AxiosResponse<createUser, any>> => {
  return Api.post(`/auth/registro`, data)
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  const userStr = localStorage.getItem('user')
  if (userStr) return JSON.parse(userStr)

  return null
}

const authService = {
  sigin,
  create,
  logout,
  getCurrentUser,
}
export default authService
