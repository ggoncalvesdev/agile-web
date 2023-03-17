import styled from 'styled-components'
export const Container = styled.div`
  background-color: #0e0e0e;

  @media (max-width: 930px) {
    width: 100%;
  }
`
export const Header = styled.div`
  background-color: #0e0e0e;
  padding-bottom: 20%;
  text-align: right;

  @media (max-width: 1380px) {
    padding-bottom: 30rem;
  }

  @media (max-width: 930px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding-bottom: 25rem;
  }

  @media (max-width: 720px) {
    padding-bottom: 25rem;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`
export const Title = styled.h1`
  display: flex;
  text-align: justify;

  font-family: 'Michroma', sans-serif;
  font-weight: bold;
  color: white;
  font-size: 30px;

  width: 50%;
  margin-left: 5%;
  padding-top: 10%;

  @media (max-width: 930px) {
    text-align: center;
    font-size: 20px;
    margin-left: 22%;

    width: 60%;
  }
  @media (max-width: 320px) {
    display: flex;
    text-align: center;

    width: 58%;
    padding-top: 2rem;
  }
`

export const SubTitle = styled.p`
  display: flex;

  text-align: left;
  font-size: 18px;
  font-family: 'Michroma', sans-serif;
  color: white;

  padding-left: 5rem;
  padding-top: 2rem;

  @media (max-width: 930px) {
    font-size: 14px;
    text-align: center;
    justify-content: center;

    padding-right: 50px;
    margin-top: 50px;
  }

  @media (max-width: 430px) {
    text-align: center;
    justify-content: center;
    margin-top: 10px;

    width: 100%;
  }

  @media (max-width: 320px) {
    text-align: center;
    justify-content: center;
    margin-top: 30px;
    width: 90%;
  }
`
export const BackgroundOverlay = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40vw;

  border-bottom-right-radius: 250%;
  border-bottom-left-radius: 40%;
  background-image: radial-gradient(
    circle at 120.71% 70%,
    #c9e2ff 0,
    #82adff 25%,
    #3c78f2 50%,
    #00469e 75%,
    #001b53 100%
  );

  @media (max-width: 930px) {
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    width: 100%;
    height: 455px;
  }
`
export const IMG = styled.img`
  position: absolute;
  width: 40vw;
  height: 40vw;

  right: 2vw;
  top: 15vw;

  @media (max-width: 1380px) {
    position: absolute;

    width: 50vw;
    height: 50vw;

    right: 25vw;
    top: 35vw;
  }

  @media (max-width: 930px) {
    position: absolute;

    width: 60vw;
    height: 60vw;

    right: 18vw;
    top: 40vw;
  }
  @media (max-width: 750px) {
    top: 60vw;
  }
  @media (max-width: 630px) {
    position: absolute;

    width: 70vw;
    height: 70vw;
    top: 80vw;
    right: 15vw;
  }
  @media (max-width: 430px) {
    top: 140vw;
  }
`
export const Button = styled.button``

export const Footer = styled.footer`
  text-align: center;
  position: absolute;
  width: 100%;
  color: white;
  background-image: radial-gradient(
    circle at 120.71% 70%,
    #c9e2ff 0,
    #82adff 25%,
    #3c78f2 50%,
    #00469e 75%,
    #001b53 100%
  );
`
export const ContactsContainer = styled.nav`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  font-size: 18px;

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

export const LogoFooterAgile = styled.img`
  width: 90px;
  height: 90px;

  margin-top: 20px;

  @media (max-width: 630px) {
    align-self: center;
  }
`

export const TextFooter = styled.a`
  color: #ffff;
  margin-left: 10px;
`

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;

  @media (max-width: 630px) {
    justify-content: center;
  }
`
export const NavFooter = styled.nav`
  width: 100%;
  text-align: start;
`
export const ProduzidoEm = styled.p`
  margin-right: 50px;

  @media (max-width: 630px) {
    align-self: center;
    margin-left: 80px;
    margin-top: 30px;
  }
`
