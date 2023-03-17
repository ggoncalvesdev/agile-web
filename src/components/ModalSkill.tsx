import { BsXLg } from 'react-icons/bs'

import ReactModal from 'react-modal'

import styled from 'styled-components'
import { CardSkill } from './CardSkill'

export const ModalSkill = ({ modalIsOpen, closeModal }: any) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          position: 'fixed',
          zIndex: 1020,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          background: '#1C1C1C',
          width: '50rem',
          maxWidth: 'calc(100vw - 2rem)',
          maxHeight: 'calc(100vh - 2rem)',
          overflowY: 'auto',
          position: 'relative',
          border: '0px',
          borderRadius: '1rem',
        },
      }}
    >
      <DivButton>
        <button onClick={closeModal}>
          <BsXLg size={28} />
        </button>
      </DivButton>
      <CardSkill />
    </ReactModal>
  )
}

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 80px;
    height: 40px;
    background-color: transparent;
    border: none;
    color: white;
    :hover {
      width: 95px;
      height: 45px;
      color: red;
    }
  }
`
