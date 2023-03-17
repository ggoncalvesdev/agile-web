import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Container, Logo, LogoPosition, Nav, TextNav } from './style'

import IUser from '../../types/user.type'
import authService from '../../services/Api/Request/auth'
import { DataContext } from '../../context/DataContext'

export const NavHeader = () => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null)
  const { setDadosUsuarioLogin } = useContext(DataContext)

  useEffect(() => {
    const user = authService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
    }
  }, [])

  const logOut = () => {
    authService.logout()
    setCurrentUser(null)
    setDadosUsuarioLogin(null)
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
