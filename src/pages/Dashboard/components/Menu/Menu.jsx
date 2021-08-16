import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// icones font awesome
import {
  faBook,
  faUserCog,
  faCog,
  faOutdent,
} from '@fortawesome/free-solid-svg-icons'

// styled components
import {
  NavContainer,
  LogoContainer,
  MenuContainer,
  MenuItem,
  LinkWrapper,
  LinkText,
} from './style.js'

const Menu = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <span>Books App</span>
      </LogoContainer>

      <MenuContainer>
        <MenuItem>
          <LinkWrapper>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faBook} />
              <LinkText>Livros</LinkText>
            </Link>
          </LinkWrapper>
        </MenuItem>

        <MenuItem>
          <LinkWrapper>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faUserCog} />
              <LinkText>Soon</LinkText>
            </Link>
          </LinkWrapper>
        </MenuItem>

        <MenuItem>
          <LinkWrapper>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faCog} />
              <LinkText>Soon</LinkText>
            </Link>
          </LinkWrapper>
        </MenuItem>
      </MenuContainer>
    </NavContainer>
  )
}

export default Menu
