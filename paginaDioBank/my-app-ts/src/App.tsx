
import { Layout } from './components/Layout'
import styled from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'

const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  padding-left: 5px;
`

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box>
          <h1>Faça Login</h1>
        </Box>
      
        <label htmlFor='emailInput'>
          Email
        </label>
        <input id='emailInput' type='email'/>
        <label htmlFor='passwordInput'>
          Senha
        </label>
        <input id='passwordInput' type='password'/>
        <button>
          Entrar
        </button>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
