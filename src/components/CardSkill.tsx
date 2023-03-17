import { useState, useEffect, useContext } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { DataContext } from '../context/DataContext'
import { Api } from '../services/Api/api'

export const CardSkill = () => {
  const navigate: NavigateFunction = useNavigate()

  const [dataSkill, setDataSkill] = useState([])
  const [knowledgeLevel, setKnowledgeLevel] = useState(0)
  const [refreshing, setRefreshing] = useState(false)

  const { dadosUsuarioLogin } = useContext(DataContext)

  useEffect(() => {
    const loadSkill = async () => {
      try {
        const response = await Api.get(`/skills/all`).then((resp) => {
          setDataSkill(resp.data)
          console.log('resp.data: ', resp.data)
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
        navigate('/user')
        onRefresh()
        if (resp.status === 201) {
          console.info('Skill cadastrada no perfil do usuario .')
          alert('Parabéns, sua skill foi cadastrada com sucesso!')
        }
      })
    } catch {
      console.log(Error)
    }
  }

  const onRefresh = () => {
    setRefreshing(true)
    setDataSkill([])
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
  return (
    <>
      {dataSkill.map((dataSkill: any) => (
        <>
          <ContainerSkill>
            <Inf>
              <IMG src={dataSkill.imageUrl} />
              <TittleCard>{dataSkill.name}</TittleCard>
              <Version>Versão: {dataSkill.version}</Version>
              <Description>{dataSkill.description}</Description>
            </Inf>
            <DisplayButton>
              <ContainerConfig>
                <ButtonLevelContainer>
                  <UpdateLevel>Atualizar Level: {knowledgeLevel}</UpdateLevel>
                  <AlineButton>
                    <ButtonLevel onClick={() => increaseLevel()}>
                      <h3>+</h3>
                    </ButtonLevel>
                    <ButtonLevel onClick={() => decreaseLevel()}>
                      <h3>-</h3>
                    </ButtonLevel>
                  </AlineButton>
                </ButtonLevelContainer>
              </ContainerConfig>
              <ContainerButton onClick={() => postSkill(dataSkill.id)}>
                <Button>Cadastrar</Button>
              </ContainerButton>
            </DisplayButton>
          </ContainerSkill>
        </>
      ))}
    </>
  )
}

export const ContainerSkill = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  border-radius: 1rem;
  border: solid;

  background-image: radial-gradient(
    circle at 120.71% 70%,
    #3c78f2 50%,
    #00469e 75%,
    #001b53 100%
  );
`
export const Inf = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const TittleCard = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 10px;
  margin-bottom: 0px;
`

export const Version = styled.h3`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 16px;
`

export const Description = styled.h3`
  color: white;
  width: 90%;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 20px;
  display: flex;
  text-align: center;
`

export const ContainerConfig = styled.div`
  display: flex;
`
export const UpdateLevel = styled.h3`
  color: white;
  font-size: 18px;
`

export const ButtonLevelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`
export const AlineButton = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  flex-direction: row;
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
  justify-content: space-around;
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
export const IMG = styled.img`
  display: flex;
  justify-content: center;

  width: 100px;
  height: 100px;

  border-radius: 1rem;

  background-color: white;
`
