import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CardSkill } from '../../components/CardSkill'

import { DataContext, DataProvider } from '../../context/DataContext'

import { Home } from '../../pages/Home'
import { Login } from '../../pages/Login'
import { Register } from '../../pages/Register'
import { Skill } from '../../pages/Skill'
import { User } from '../../pages/User'

function NavigateScreen(props: any) {
  const { dadosUsuarioLogin } = useContext(DataContext)

  if (dadosUsuarioLogin === null) {
    return (
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    )
  }
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
