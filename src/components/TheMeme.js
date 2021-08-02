import styled from 'styled-components'
function Meme(props) {
  return (
    <MemeElement>
      <MemeImage src={props.image} alt="Generated Meme Image" />
      <MemeTextTop>{props.textTop}</MemeTextTop>
      <MemeTextBottom>{props.textBottom}</MemeTextBottom>
    </MemeElement>
  )
}

const MemeElement = styled.div`
  position: relative;
  height: 550px;
  margin: 2em auto;
`
const MemeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const Text = styled.h2`
  position: absolute;
  width: 80%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px 0;
  padding: 0 5px;
  font-family: impact, sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
    2px 2px 5px #000;
`

const MemeTextTop = styled(Text)`
  top: .5em;
`
const MemeTextBottom = styled(Text)`
  bottom: .5em;
`

export default Meme
