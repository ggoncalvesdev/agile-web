import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Link, NavigateFunction, useNavigate } from 'react-router-dom'
import { Checkbox } from '../../components/CheckBox'
import CryptoJS from 'crypto-js'
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
  Text,
} from './style'

import Logo from '../../assets/logo-agile-branca.png'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import authService from '../../services/Api/Request/auth'
import { DataContext } from '../../context/DataContext'
import { storeLocalData } from '../../services/LocalStorageService'
import { NavHeader } from '../NavHeader'
import { Alerta } from '../../components/Alert'
const encryptionKey = 'minha-chave-secreta'

export const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [hidePass, setHidePass] = useState(true)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const { armazenaDadosUsuarioLogin } = useContext(DataContext)

  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {
    const storedLogin = localStorage.getItem('login')
    const storedPassword = localStorage.getItem('password')
    const storedChecked = localStorage.getItem('isChecked')

    if (storedLogin && storedPassword && storedChecked) {
      setLogin(storedLogin)
      const decryptedPassword = CryptoJS.AES.decrypt(
        storedPassword,
        encryptionKey,
      ).toString(CryptoJS.enc.Utf8)
      setPassword(decryptedPassword)
      setIsChecked(JSON.parse(storedChecked))
    }
  }, [])

  const handleLogin = async () => {
    let tokenJwt: any = null

    try {
      const retorno = await authService.sigin(login, password)

      if (retorno) {
        tokenJwt = retorno
        armazenaDadosUsuarioLogin(tokenJwt)
        storeLocalData('user', tokenJwt)
        navigate('/user')
        Alerta(login, 'Seja Bem vindo!')
      }
    } catch (error) {
      Alerta('Oops!', 'Login ou senha errados')
    }
  }

  function handleCheckboxChange(checked: boolean) {
    setIsChecked(checked)
  }

  function handleLoginChange(event: ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value)
  }
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Link to={'/register'}>
                  <Text>Não possuo cadastro</Text>
                </Link>
                <Checkbox
                  label="Lembrar login e senha"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  login={login}
                  password={password}
                />
              </div>
            </ContainerImput>
          </Container>
        </Background>
        <Button onClick={() => handleLogin()}>Entrar</Button>
      </Body>
    </>
  )
}
