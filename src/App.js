import Header from './components/TheHeader'
import Generator from './components/TheGenerator'
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
      <Generator />
    </div>
  )
}

export default App
