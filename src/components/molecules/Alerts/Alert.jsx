import React from 'react'
import { AlertStyled, Message, IconWrapper, CloseButton } from './styles'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
// icones font awesome
import {
  faCheckCircle,
  faInfoCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons'

const Alert = ({ message, type = 'info' }) => {
  const [alert, setAlert] = React.useState(false)

  React.useEffect(() => {
    if (message) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 6000)
    }
  }, [message])

  // cor e icone de acordo com o tipo do alerta
  const alertConfig = {
    success: {
      color: '--success-color',
      icon: faCheckCircle,
    },
    error: {
      color: '--error-color',
      icon: faExclamationCircle,
    },
    info: {
      color: '--info-color',
      icon: faInfoCircle,
    },
  }

  return (
    <AlertStyled showAlert={alert} color={alertConfig[type].color}>
      <IconWrapper color={alertConfig[type].color}>
        <Icon icon={alertConfig[type].icon} />
      </IconWrapper>
      <div>
        <Message>{message}</Message>
      </div>
      <CloseButton
        onClick={() => {
          setAlert(false)
        }}
      >
        x
      </CloseButton>
    </AlertStyled>
  )
}

export default Alert
