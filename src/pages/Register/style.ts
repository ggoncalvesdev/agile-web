import styled from 'styled-components'

export const Header = styled.div`
  height: 80px;
  background-image: radial-gradient(
    circle at 120.71% 70%,
    #c9e2ff 0,
    #82adff 25%,
    #3c78f2 50%,
    #00469e 75%,
    #001b53 100%
  );
`

export const Body = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  align-items: center;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Background = styled.div`
  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: column;

  border-top-right-radius: 20%;
  border-top-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-bottom-left-radius: 20%;

  background-image: radial-gradient(
    circle at 120.71% 70%,
    #c9e2ff 0,
    #82adff 25%,
    #3c78f2 50%,
    #00469e 75%,
    #001b53 100%
  );

  @media (max-width: 520px) {
    width: 350px;
    height: 450px;
  }
  @media (max-width: 520px) {
    width: 300px;
    height: 400px;
  }
`

export const LogoAgile = styled.img`
  width: 140px;
  height: 140px;

  display: flex;
  align-self: center;

  margin-bottom: 40px;
`

export const ContainerImput = styled.form`
  display: flex;
  flex-direction: column;

  width: 70%;
  gap: 20px;
`

export const Imput = styled.input`
  height: 50px;
  width: 100%;

  border-radius: 10px;
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

export const Button = styled.button`
  width: 300px;

  margin-top: 50px;
  padding-top: 15px;
  padding-bottom: 15px;

  border-radius: 20px;

  font-size: 20px;
  &:hover {
    color: #fff;
  }
  background-image: radial-gradient(
    circle at 120.71% 70%,
    #c9e2ff 0,
    #82adff 25%,
    #3c78f2 50%,
    #00469e 75%,
    #001b53 100%
  );
`
export const SecurityImput = styled.div`
  background-color: white;

  display: flex;
  align-items: center;
  height: 50px;
  input {
    width: 100%;
  }

  border-radius: 10px;
  border: 2px solid #fff;
`
