import styled from 'styled-components'
import { Container } from './uiComponents'

function Header() {

  return (
    <HeaderElement>
      <Container>
        <HeaderWrapper>
          <Image
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            alt="Problem?"
          />
          <Title>Meme Generator</Title>
        </HeaderWrapper>
      </Container>
    </HeaderElement>
  )
}

const HeaderElement = styled.header`
    padding: 1em;
    background: #6441a5;
  `

  const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2em;
  `

  const Title = styled.h1`
    color: #ffffff;
  `

  const Image = styled.img`
    width: 100px;
    height: 100px;
  `

export default Header
