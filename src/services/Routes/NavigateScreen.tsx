import { Routes, Route } from 'react-router-dom'
import { CardSkill } from '../../components/CardSkill'

import { DataProvider } from '../../context/DataContext'

import { Home } from '../../pages/Home'
import { Login } from '../../pages/Login'
import { Register } from '../../pages/Register'
import { Skill } from '../../pages/Skill'
import { User } from '../../pages/User'

function NavigateScreen() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export function RoutesPath() {
  return (
    <>
      <DataProvider>
        <NavigateScreen>
          <CardSkill />
        </NavigateScreen>
      </DataProvider>
    </>
  )
}
