import { ChangeEvent, useContext, useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import {
  Background,
  Body,
  Button,
  Container,
  ContainerImput,
  Header,
  Imput,
  LogoAgile,
  SecurityImput,
} from './style'

import { DataContext } from '../../context/DataContext'

import authService, { createUser } from '../../services/Api/Request/auth'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import Logo from '../../assets/logo-agile-branca.png'
import { NavHeader } from '../NavHeader'
import { Alerta } from '../../components/Alert'

export const Register = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [hidePass, setHidePass] = useState(true)
  const [validPass, setValidPass] = useState('')
  const { dadosUsuarioLogin } = useContext(DataContext)

  console.log(
    JSON.stringify('retorno api: ' + JSON.stringify(dadosUsuarioLogin)),
  )

  const navigate: NavigateFunction = useNavigate()

  function handleCreate() {
    const data: createUser = {
      login,
      password,
    }
    console.log(data)

    if (password === validPass) {
      authService
        .create(data)
        .then((res) => {
          navigate('/login')
          Alerta('Parabéns!', 'você foi cadastrado com sucesso!')
        })
        .catch((err) => {
          Alerta(
            'Oops!',
            ' Este e-mail já está em uso, verique-o ou recupere sua senha',
          )
          console.log(err)
        })
    } else {
      Alerta('Oops!', 'As senhas não coincidem')
    }
  }
  function handleLoginChange(event: ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value)
  }
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }
  function handlePasswordValidateChange(event: ChangeEvent<HTMLInputElement>) {
    setValidPass(event.target.value)
  }

  return (
    <>
      <Header>
        <NavHeader />
      </Header>
      <Body>
        <Background>
          <LogoAgile src={Logo} />
          <Container>
            <ContainerImput>
              <Imput
                value={login}
                placeholder="Login"
                onChange={handleLoginChange}
              />
              <SecurityImput>
                <Imput
                  value={password}
                  placeholder="Senha"
                  onChange={handlePasswordChange}
                  type={hidePass === true ? 'password' : 'text'}
                />

                {hidePass ? (
                  <>
                    <AiFillEye
                      onClick={() => setHidePass(!hidePass)}
                      color="#00469e"
                      size={25}
                      style={{ marginRight: 20 }}
                    />
                  </>
                ) : (
                  <>
                    <AiFillEyeInvisible
                      onClick={() => setHidePass(!hidePass)}
                      color="#00469e"
                      size={25}
                      style={{ marginRight: 20 }}
                    />
                  </>
                )}
              </SecurityImput>
              <Imput
                value={validPass}
                placeholder="Validar senha"
                onChange={handlePasswordValidateChange}
                type="password"
              />
            </ContainerImput>
          </Container>
        </Background>
        <Button onClick={() => handleCreate()}>Cadastrar</Button>
      </Body>
    </>
  )
}
