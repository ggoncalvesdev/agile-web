import { useContext, useState, useEffect } from 'react'
import { ModalSkill } from '../../components/ModalSkill'
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
  Level,
  Title,
  TittleCard,
  UpdateLevel,
  Version,
} from './style'

export function User() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [dataSkillUser, setDataSkillUser] = useState([])
  const [knowledgeLevel, setKnowledgeLevel] = useState(0)
  const { dadosUsuarioLogin } = useContext(DataContext)

  const { armazenaDadosUsuarioLogin } = useContext(DataContext)

  useEffect(() => {
    loadSkillUser()
  }, [dadosUsuarioLogin])

  useEffect(() => {
    usuarioLogado()
  }, [])

  const usuarioLogado = async () => {
    let tokenJwt: any = null
    try {
      const response = localStorage.getItem('user')
      if (response) {
        tokenJwt = JSON.parse(response)

        console.log(tokenJwt.token)
      }
      armazenaDadosUsuarioLogin(tokenJwt)
    } catch (error) {}
  }

  const loadSkillUser = async () => {
    if (dadosUsuarioLogin) {
      try {
        const response = await Api.get(`/userSkills`, {
          headers: {
            Authorization: `Bearer ${dadosUsuarioLogin?.token}`,
          },
        }).then((resp) => {
          setDataSkillUser(resp.data)
        })
      } catch (e) {
        console.error('Erro ao recuperar os dados do servidor.', e)
        alert(
          'Erro ao recuperar os dados do servidor, por favor, tente mais tarde.',
        )
      }
    } else {
      loadSkillUser()
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
        onRefresh()
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
    setDataSkillUser([])
    loadSkillUser()
  }

  const deleteSkill = async (id: number) => {
    await Api.delete(`/userSkills/${id}`, {
      headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
    }).then((res) => {
      onRefresh()
    })
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

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Header>
        <NavHeader />
      </Header>
      <Body>
        <Title>Minhas Skills</Title>
        <button onClick={openModal}>Adicionar Nova Skill</button>
        <ModalSkill modalIsOpen={modalIsOpen} closeModal={closeModal} />
        {dataSkillUser.map((dataSkillUser: any) => (
          <>
            {dadosUsuarioLogin?.id !== dataSkillUser.user.id ? (
              <></>
            ) : (
              <>
                <ContainerSkill>
                  <IMG src={dataSkillUser.skill.imageUrl} />
                  <TittleCard>{dataSkillUser.skill.name}</TittleCard>
                  <Version>Versão: {dataSkillUser.skill.version}</Version>
                  <Description>{dataSkillUser.skill.description}</Description>
                  <Level>
                    Nível de conhecimento:
                    <br /> Level: {dataSkillUser.knowledgeLevel}
                  </Level>
                  <ContainerConfig>
                    <ButtonLevelContainer>
                      <ButtonLevel onClick={() => increaseLevel()}>
                        <h3>+</h3>
                      </ButtonLevel>
                      <UpdateLevel>
                        Atualizar Level: {knowledgeLevel}
                      </UpdateLevel>
                      <ButtonLevel onClick={() => decreaseLevel()}>
                        <h3>-</h3>
                      </ButtonLevel>
                    </ButtonLevelContainer>
                  </ContainerConfig>
                  <DisplayButton>
                    <ContainerButton
                      onClick={() => deleteSkill(dataSkillUser.id)}
                    >
                      <Button>Excluir</Button>
                    </ContainerButton>
                    <ContainerButton
                      onClick={() => updateLevel(dataSkillUser.id)}
                    >
                      <Button>Atualizar</Button>
                    </ContainerButton>
                  </DisplayButton>
                </ContainerSkill>
              </>
            )}
          </>
        ))}
      </Body>
    </>
  )
}
