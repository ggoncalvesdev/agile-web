import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Logo, LogoPosition, Nav, TextNav } from './style'

import IUser from '../../types/user.type'
import authService from '../../services/Api/Request/auth'

export const NavHeader = () => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined)

  useEffect(() => {
    const user = authService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
    }
  }, [])

  /*  useEffect(() => {
    searchSkill()
  }, [])

  const searchSkill = async () => {
    try {
      const response = await Api.get(`/skills/all`).then((response) => {})
    } catch (e) {
      console.error('Erro ao recuperar os dados do servidor.', e)
      alert(
        'Erro ao recuperar os dados do servidor, por favor, tente mais tarde.',
      )
    }
  } */

  const logOut = () => {
    authService.logout()
    setCurrentUser(undefined)
  }

  return (
    <>
      <Container>
        <LogoPosition>
          <Link to={'/'}>
            <Logo>AgileDev</Logo>
          </Link>
        </LogoPosition>
        <Nav>
          <Link to={'/home'}>
            <TextNav>Home</TextNav>
          </Link>
          {currentUser && (
            <>
              <Link to={'/user'}>
                <TextNav>User</TextNav>
              </Link>
              {/*  <Link to={'/skill'}>
                <TextNav>Skill</TextNav>
              </Link> */}
            </>
          )}
          {currentUser ? (
            <>
              <Link to={'/login'} onClick={logOut}>
                <TextNav>LogOut</TextNav>
              </Link>
            </>
          ) : (
            <>
              <Link to={'/login'}>
                <TextNav>Login</TextNav>
              </Link>

              <Link to={'/register'}>
                <TextNav>Sign Up</TextNav>
              </Link>
            </>
          )}
        </Nav>
      </Container>
    </>
  )
}
