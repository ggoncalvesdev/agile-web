import {
  BackgroundOverlay,
  Contacts,
  ContactsContainer,
  Container,
  Footer,
  Header,
  IMG,
  LogoFooterAgile,
  NavFooter,
  ProduzidoEm,
  SubTitle,
  TextFooter,
  Title,
} from './style'

import { NavHeader } from '../NavHeader'

import { AiFillLinkedin, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { SiMinutemailer } from 'react-icons/si'

import img from '../../assets/Programmer.png'
import FooterImg from '../../assets/logo-agile-branca.png'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import { retrieveLocalData } from '../../services/LocalStorageService'
import { NavigateFunction, useNavigate } from 'react-router-dom'

export function Home() {
  const navigate: NavigateFunction = useNavigate()

  const { armazenaDadosUsuarioLogin } = useContext(DataContext)
  const { dadosUsuarioLogin } = useContext(DataContext)

  useEffect(() => {
    usuarioLogado()
  }, [])

  const usuarioLogado = async () => {
    let tokenJwt: any = null

    try {
      const response = JSON.parse(await retrieveLocalData('user'))
      if (response) {
        tokenJwt = response
        navigate('/login')
      }
      armazenaDadosUsuarioLogin(tokenJwt)
      navigate('/home')
    } catch (error) {}
  }

  return (
    <Container>
      <Header>
        <BackgroundOverlay>
          <NavHeader />
          <Title>
            Agilize sua vida, tire suas dúvidas de forma rápida e prática
          </Title>
          <SubTitle>
            Busque soluções para seu código ou <br /> compartilhe com seus
            amigos suas stacks favoritas <br />
          </SubTitle>
        </BackgroundOverlay>
        <IMG src={img} />
      </Header>
      {/*  <Body>
         
        </Body> */}
      <Footer>
        <NavFooter>
          <ContactsContainer>
            <Contacts>
              <p>Social Network</p>
              <li>
                <AiFillLinkedin size={25} />
                <TextFooter href="" target="_blank" rel="noreferrer">
                  Linkedin
                </TextFooter>
              </li>
              <li>
                <AiFillInstagram size={25} />
                <TextFooter href="" target="_blank" rel="noreferrer">
                  Instagram
                </TextFooter>
              </li>
              <li>
                <AiFillFacebook size={25} />
                <TextFooter href="" target="_blank" rel="noreferrer">
                  Facebook
                </TextFooter>
              </li>
            </Contacts>
            <LogoFooterAgile src={FooterImg} />
            <Contacts>
              <p>Contacts</p>
              <li>
                <BsFillTelephoneFill size={20} />
                <TextFooter href="" target="_blank" rel="noreferrer">
                  +55 (22) 9999-9999
                </TextFooter>
              </li>
              <li>
                <SiMinutemailer size={23} />
                <TextFooter href="" target="_blank" rel="noreferrer">
                  agile_dev@email.com
                </TextFooter>
              </li>
            </Contacts>
          </ContactsContainer>
        </NavFooter>
        <ProduzidoEm>Produzido em 2023 por AgileDev.</ProduzidoEm>
      </Footer>
    </Container>
  )
}
