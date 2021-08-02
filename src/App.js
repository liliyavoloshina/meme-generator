import Header from './components/TheHeader'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
    </div>
  )
}

export default App
