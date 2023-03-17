// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import React, { createContext, ReactNode, useState } from 'react'

import { UserLoginType } from '../models/UserLoginType'

interface DataContextProps {
  dadosUsuarioLogin: UserLoginType | null
  setDadosUsuarioLogin: (user: UserLoginType | null) => void
  armazenaDadosUsuarioLogin: (jwt: string) => void
}

type DataProviderProps = {
  children: ReactNode
}

export const DataContext = createContext<DataContextProps>({
  dadosUsuarioLogin: null,
  setDadosUsuarioLogin: () => {},
  armazenaDadosUsuarioLogin: () => {},
})

// criando provider
export const DataProvider: React.FC<DataProviderProps> = ({
  children,
}: any) => {
  const [dadosUsuarioLogin, setDadosUsuarioLogin] =
    useState<UserLoginType | null>(null)

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
      value={{
        dadosUsuarioLogin,
        armazenaDadosUsuarioLogin,
        setDadosUsuarioLogin,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
