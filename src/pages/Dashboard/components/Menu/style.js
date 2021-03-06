import styled from 'styled-components'

export const NavContainer = styled.div`
  background-color: var(--dash-menubg);
  width: 15rem;
  height: 100vh;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;
  border-right: 4px solid var(--main-color);
  top: 0;

  @media (max-width: 768px) {
    border: none;
    position: fixed;
    z-index: 10;
    flex-direction: row;
    width: 100vw;
    height: 4rem;
    bottom: 0;
    top: auto;
  }
`

export const LogoContainer = styled.div`
  height: 10rem;
  font-size: 3rem;
  color: var(--main-color);
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const MenuContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  border-right: 4px solid var(--main-color);

  @media (max-width: 768px) {
    border-right: none;
    border-top: 4px solid var(--main-color);
    border-right: none;
    width: 100vw;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const MenuItem = styled.li`
  margin: 0;
  padding: 0;
  display: block;
  @media (max-width: 768px) {
    margin: 0;
    border-left: none;
  }
`

export const LinkWrapper = styled.div`
  a {
    display: flex;
    width: 15rem;
    padding: 1rem;
    align-items: center;
    color: #fff;
    font-size: 1.3rem;
    transition: 0.2s;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: var(--dash-menubg);

    &:hover {
      background-color: var(--main-color);
    }

    @media (max-width: 768px) {
      border: none;
      text-align: center;
      display: block;
      width: 3.5rem;
    }
  }
`

export const LinkText = styled.span`
  display: block;
  margin-left: 0.8rem;

  @media (max-width: 768px) {
    display: none;
    margin-left: 0;
  }
`
