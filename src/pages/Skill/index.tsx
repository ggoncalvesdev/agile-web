import { useContext, useState, useEffect, ChangeEvent } from 'react'

import filter from 'lodash.filter'
import ReactTable from 'react-table'

import { Link, NavigateFunction, useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import { Api } from '../../services/Api/api'
import { NavHeader } from '../NavHeader'
import {
  Body,
  Button,
  ButtonLevel,
  ButtonLevelContainer,
  ContainerButton,
  ContainerConfig,
  ContainerSkill,
  Description,
  DisplayButton,
  Header,
  IMG,
  Input,
  Level,
  SearchContainer,
  Title,
  TittleCard,
  UpdateLevel,
  Version,
} from './style'

import { RiSearch2Line } from 'react-icons/ri'

export function Skill() {
  const navigate: NavigateFunction = useNavigate()

  const [dataSkill, setDataSkill] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [knowledgeLevel, setKnowledgeLevel] = useState(0)

  const { dadosUsuarioLogin } = useContext(DataContext)

  console.log('dadosUsuarioLogin: ', dadosUsuarioLogin.id)

  useEffect(() => {
    const loadSkill = async () => {
      try {
        const response = await Api.get(`/skills/all`, {}).then((resp) => {
          setDataSkill(resp.data)
        })
      } catch (e) {
        console.error('Erro ao recuperar os dados do servidor.', e)
        alert(
          'Erro ao recuperar os dados do servidor, por favor, tente mais tarde.',
        )
      }
    }
    loadSkill()
  }, [])

  const postSkill = async (idSkill: any) => {
    try {
      const postSkill = await Api.post(
        `/userSkills`,
        {
          user: {
            id: dadosUsuarioLogin.id,
          },
          skill: {
            id: idSkill,
          },
          knowledgeLevel,
        },
        {
          headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
        },
      ).then((resp) => {
        if (resp.status === 201) {
          navigate('/user')
          console.info('Skill cadastrada no perfil do usuario .')
          alert('Parabéns, sua skill foi cadastrada com sucesso!')
        }
      })
    } catch {
      console.log(Error)
    }
  }

  const updateLevel = async (idUserSkill: any) => {
    try {
      const response = await Api.put(
        `/userSkills/level/${idUserSkill}`,
        {
          knowledgeLevel,
        },
        {
          headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
        },
      ).then((resp) => {
        navigate('/home')
        if (resp.status === 201) {
          console.info('Skill cadastrado no banco de dados.')
          alert('Parabéns, sua skill foi cadastrada com sucesso!')
        }
      })
    } catch (e) {
      console.error('Erro ao recuperar os dados do servidor.', e)
      alert(
        'Erro ao recuperar os dados do servidor, por favor, tente mais tarde.',
      )
    }
  }

  const onRefresh = () => {
    setRefreshing(true)
    setDataSkill([])
    /* loadSkill() */
  }

  const increaseLevel = () => {
    if (knowledgeLevel < 10) {
      setKnowledgeLevel(knowledgeLevel + 1)
    }
  }
  const decreaseLevel = () => {
    if (knowledgeLevel > 0) {
      setKnowledgeLevel(knowledgeLevel - 1)
    }
  }
  /* 
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const handleSearch = (text: ChangeEvent<HTMLInputElement>) => {
    const formattedQuery = text
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery)
    })
    setDataSearchSkill(filteredData)
    console.log('filteredData: ', filteredData)
    setQuery(text.target.value)
    console.log('TEXTO:', text.target.value)
  }

  function contains({ name, version }, query: any) {
    if (name.includes(query) || version.includes(query)) {
      return true
    }
    return false
  }
 */
  return (
    <>
      <Header>
        <NavHeader />
      </Header>
      <Body>
        <SearchContainer>
          {/*  <Input
            autoCapitalize="none"
            value={query}
            onChange={(queryText: any) => handleSearch(queryText)}
            placeholder="Buscar Skills"
          /> */}
          {/*  <Link to={'/home'}> */}
          {/*    <RiSearch2Line
            size={30}
            style={{
              padding: 2,
              borderRadius: 0,
              borderRight: 0,
              color: '#001b53',
              marginLeft: 20,
              paddingLeft: 10,
            }}
          /> */}
          {/* </Link> */}
        </SearchContainer>
        {dataSkill.map((dataSkill: any) => (
          <>
            <Title>{dataSkill.name}</Title>
            <ContainerSkill>
              <IMG src={dataSkill.imageUrl} />
              <TittleCard>{dataSkill.name}</TittleCard>
              <Version>Versão: {dataSkill.version}</Version>
              <Description>{dataSkill.description}</Description>
              <Level>
                Nível de conhecimento:
                <br /> Level: {dataSkill.knowledgeLevel}
              </Level>
              <ContainerConfig>
                <ButtonLevelContainer>
                  <ButtonLevel onClick={() => increaseLevel()}>
                    <h3>+</h3>
                  </ButtonLevel>
                  <UpdateLevel>Atualizar Level: {knowledgeLevel}</UpdateLevel>
                  <ButtonLevel onClick={() => decreaseLevel()}>
                    <h3>-</h3>
                  </ButtonLevel>
                </ButtonLevelContainer>
              </ContainerConfig>
              <DisplayButton>
                <ContainerButton onClick={() => navigate('/user')}>
                  <Button>Voltar</Button>
                </ContainerButton>
                <ContainerButton onClick={() => postSkill(dataSkill.id)}>
                  <Button>Cadastrar</Button>
                </ContainerButton>
              </DisplayButton>
            </ContainerSkill>
          </>
        ))}
      </Body>
    </>
  )
}
