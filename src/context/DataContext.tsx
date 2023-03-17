// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { createContext, useState } from 'react'

import { UserLoginType } from '../models/UserLoginType'

// criando contexto
export const DataContext = createContext({})

// criando provider
export const DataProvider = ({ children }: any) => {
  const [dadosUsuarioLogin, setDadosUsuarioLogin] = useState<UserLoginType>()

  const armazenaDadosUsuarioLogin = (jwt: any) => {
    const tokenDecodificado: any = jwt_decode(jwt.token)

    // armazenando apenas a chave usuário do json decodificado
    let usuario = tokenDecodificado.user

    // está transferindo a string json contida dentro da variável usuario num objeto
    usuario = JSON.parse(usuario)

    setDadosUsuarioLogin({
      id: usuario?.id,
      login: usuario?.login,
      lastLoginDate: usuario?.lastLoginDate,
      token: jwt.token,
    })
  }

  return (
    <DataContext.Provider
      value={{ dadosUsuarioLogin, armazenaDadosUsuarioLogin }}
    >
      {children}
    </DataContext.Provider>
  )
}
