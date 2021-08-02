import React from 'react'
import styled from 'styled-components'
import {Container} from './uiComponents'

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  width: 42%;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid #cccccc;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #6441a5;
  }
`

const Button = styled.button`
  padding: 1em;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  background-color: #6441a5;
  &:hover {
    cursor: pointer;
    opacity: .5;
  }
`

class Generator extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Container>
        <Form>
          <Input placeholder="Top text" />
          <Input placeholder="Bottom text" />
          <Button>Generate!</Button>
        </Form>
      </Container>
    )
  }
}

export default Generator
