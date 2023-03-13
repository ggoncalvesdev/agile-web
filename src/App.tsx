import { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import AuthService from './services/auth'
import IUser from './types/user.type'

import EventBus from './common/EventBus'

import Register from './components/Register'

import Home from './pages/Home'
import BoardUser from './pages/User/Index'
import Login from './components/Login'
import Profile from './components/Profile'

type Props = {}

type State = {
  currentUser: IUser | undefined
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.logOut = this.logOut.bind(this)

    this.state = {
      currentUser: undefined,
    }
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser()

    if (user) {
      this.setState({
        currentUser: user,
      })
    }

    EventBus.on('logout', this.logOut)
  }

  componentWillUnmount() {
    EventBus.remove('logout', this.logOut)
  }

  logOut() {
    AuthService.logout()
    this.setState({
      currentUser: undefined,
    })
  }

  render() {
    const { currentUser } = this.state

    return (
      <>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={'/'} className="navbar-brand">
            AgileDev
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/home'} className="nav-link">
                Home
              </Link>
            </li>

            {currentUser && (
              <li className="nav-item">
                <Link to={'/user'} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={'/profile'} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={'/register'} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
        </Routes>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </>
    )
  }
}

export default App
