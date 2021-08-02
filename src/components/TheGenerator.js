import React from 'react'
import styled from 'styled-components'
import { Container } from './uiComponents'
import Meme from './TheMeme'

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
    opacity: 0.5;
  }
`

class Generator extends React.Component {
  constructor() {
    super()
    this.state = {
      textTop: 'One does not simply',
      textBottom: 'Walk into Mordor',
      image: "http://i.imgflip.com/1bij.jpg"
    }
  }

  handleChange = (e) => {
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <Container>
        <Form>
          <Input onChange={this.handleChange} value={this.state.textTop} name="textTop" placeholder="Top text" />
          <Input onChange={this.handleChange} value={this.state.textBottom} name="textBottom" placeholder="Bottom text" />
          <Button>Generate!</Button>
        </Form>
        <Meme textTop={this.state.textTop} textBottom={this.state.textBottom} image={this.state.image}/>
      </Container>
    )
  }
}

export default Generator
