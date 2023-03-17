import styled from 'styled-components'
export const Container = styled.div`
  list-style-type: none;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  text-align: center;

  font-family: 'Michroma', sans-serif;

  margin-left: 20px;
  padding-top: 20px;
`
export const LogoPosition = styled.a`
  display: flex;
`
export const Logo = styled.a`
  display: flex;

  color: #fff;
  font-size: 25px;
`
export const Nav = styled.nav`
  width: 80%;
  display: flex;

  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;
  align-items: center;
  text-align: center;
`
export const SearchContainer = styled.div`
  background-color: white;

  width: 400px;
  display: flex;
  align-self: center;
  justify-content: center;

  border-radius: 10px;
  input {
    width: 80%;
  }
`
export const Input = styled.input`
  border: 2px solid #fff;

  padding-left: 20px;
  ::placeholder {
    color: black;
  }

  outline: none;

  &:hover {
    border-color: #fff;
  }
`

export const TextNav = styled.nav`
  color: #fff;
  font-size: 16px;
  display: flex;
`

export const Icon = styled.img`
  width: 30px;

  @media (max-width: 630px) {
    justify-content: center;
  }
`
