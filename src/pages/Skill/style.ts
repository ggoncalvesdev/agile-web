import styled from 'styled-components'

export const Header = styled.header`
  background-image: radial-gradient(
    circle at 120.71% 70%,
    #c9e2ff 0,
    #82adff 25%,
    #3c78f2 50%,
    #00469e 75%,
    #001b53 100%
  );
`

export const Body = styled.body`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 50px;
`
export const Title = styled.h1`
  width: 100%;

  display: flex;
  justify-content: center;

  color: black;
`

export const ContainerSkill = styled.div`
  width: 600px;
  height: 100%;

  display: flex;

  flex-direction: column;

  border-radius: 1rem;
  border: solid;
  /*   margin-left: 20px; */

  background-image: radial-gradient(
    circle at 120.71% 70%,
    #3c78f2 50%,
    #00469e 75%,
    #001b53 100%
  );
`

export const TittleCard = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 0px;
`

export const Version = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  font-size: 16px;
`

export const Description = styled.h3`
  color: white;
  width: 90%;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 20px;
`

export const Level = styled.h3`
  color: white;
  width: 100%;

  margin-top: 10px;
  padding-left: 20px;
  padding-bottom: 20px;
  font-size: 16px;

  border-bottom: solid black;
  border-radius: 1rem;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`

export const ContainerConfig = styled.div`
  display: flex;
  justify-content: end;

  margin-top: 40px;
  font-size: 20px;
`
export const UpdateLevel = styled.h3`
  color: white;
  font-size: 18px;
`

export const ButtonLevelContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`
export const ButtonLevel = styled.button`
  background-color: #4fb889;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 25px;
  border-radius: 50px;
  margin-bottom: 10px;
`

export const DisplayButton = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  top: 100px;
`

export const ContainerButton = styled.div`
  margin: 40px;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #4fb889;
  width: 95px;
  height: 45px;
  border-radius: 30px;

  color: #fff;
  font-weight: bold;
`

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`

export const IMG = styled.img`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 50%;
  border-bottom: solid;
  border-radius: 1rem;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: white;
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
