import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// icones font awesome
import {
  faMusic,
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
        <span>Guitar</span>
      </LogoContainer>

      <MenuContainer>
        <MenuItem>
          <LinkWrapper>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faMusic} />
              <LinkText>Músicas</LinkText>
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
