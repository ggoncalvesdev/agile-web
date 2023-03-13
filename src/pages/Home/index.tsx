import { Component } from 'react'
import UserService from '../../services/user'
import {
  BackgroundOverlay,
  Contacts,
  ContactsContainer,
  Container,
  Footer,
  Header,
  IMG,
  LogoFooter,
  LogoFooterAgile,
  NavFooter,
  ProduzidoEm,
  SubTitle,
  TextFooter,
  Title,
} from './style'
import img from '../../assets/Programmer.png'
import FooterImg from '../../assets/logo-agile-branca.png'

type Props = {}

type State = {
  content: string
}

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      content: '',
    }
  }

  componentDidMount() {
    UserService.getPublicContent().then((response) => {
      this.setState({
        content: response.data,
      })
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <BackgroundOverlay>
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
                  <TextFooter href="" target="_blank" rel="noreferrer">
                    <LogoFooter
                      src="../../src/assets/linkedin.png"
                      alt="Perfil Linkedin"
                    />
                    Linkedin
                  </TextFooter>
                </li>
                <li>
                  <TextFooter href="" target="_blank" rel="noreferrer">
                    <LogoFooter
                      src="../../src/assets/insta.png"
                      alt="Perfil no Instagram"
                    />
                    Instagram
                  </TextFooter>
                </li>
                <li>
                  <TextFooter href="" target="_blank" rel="noreferrer">
                    <LogoFooter
                      src="../../src/assets/facebook.png"
                      alt="Perfil no Facebook"
                    />
                    Facebook
                  </TextFooter>
                </li>
              </Contacts>
              <LogoFooterAgile src={FooterImg} />
              <Contacts>
                <p>Contacts</p>
                <li>
                  <TextFooter href="" target="_blank" rel="noreferrer">
                    <LogoFooter
                      src="../../src/assets/call_icon.png"
                      alt="Contato Telefonico"
                    />
                    +55 (22) 9999-9999
                  </TextFooter>
                </li>
                <li>
                  <TextFooter href="" target="_blank" rel="noreferrer">
                    <LogoFooter
                      src="../../src/assets/mail_icon.png"
                      alt="Contato Email"
                    />
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
}
