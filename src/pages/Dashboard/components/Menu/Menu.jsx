import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// icones font awesome
import { faMusic, faDoorOpen, faFire } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faFire} />
      </LogoContainer>

      <nav>
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
              <Link to="/logout">
                <FontAwesomeIcon icon={faDoorOpen} />
                <LinkText>Logout</LinkText>
              </Link>
            </LinkWrapper>
          </MenuItem>
        </MenuContainer>
      </nav>
    </NavContainer>
  )
}

export default Menu
