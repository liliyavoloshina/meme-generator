import styled from "styled-components"

function Header() {
  const Header = styled.header`
  display: flex;
  align-items: center;
  column-gap: 2em;
  padding: 1em;
  background: #6441A5;
  `;

  const Title = styled.h1`
  color: #ffffff;
  `

  const Image = styled.img`
  width: 150px;
  height: 150px;
  `

  return (
    <Header>
      <Image src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Problem?" />
      <Title>Meme Generator</Title>
    </Header>
  )
}

export default Header