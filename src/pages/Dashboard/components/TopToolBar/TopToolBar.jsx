import React from 'react'
import Input from '../../../../components/molecules/Input/Input'
import Button from '../../../../components/atoms/Button/Button'
import { Wrapper } from './style.js'

function TopToolBar({ search, setSearch, addModal }) {
  return (
    <>
      <Wrapper>
        <Input
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Pesquisar por título..."
          value={search}
        />
        <Button onClick={() => addModal(true)}>Nova Música</Button>
      </Wrapper>
    </>
  )
}

export default TopToolBar
