
import { Layout } from './components/Layout'
import styled from 'styled-components'
import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button 

} from '@chakra-ui/react'
import { PasswordInput } from './components/Password'


// const Box = styled.div`
//   background-color: orange;
//   border-radius: 25px;
//   padding-left: 5px;
// `

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc'>
        <Center>
          <h1>Faça o login</h1>
        

        <Layout>
          {/* <Box>
            <h1>Faça Login</h1>
          </Box> */}
          <Input placeholder="email" />
        
          {/* <label htmlFor='passwordInput'>
            Senha
          </label> */}
          {/* <input id='passwordInput' type='password'/> */}
        
          <PasswordInput></PasswordInput>
        
          <button>
            Entrar
          </button>
        </Layout>
      </Center> 
      </Box>
      <Center>
        <h1>Outro Box</h1>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Box backgroundColor= '#FFFFFF' borderRadius='25px' padding='15px'>
            <Center>
              <h1>Faça Login</h1>
            </Center> 
            <Input placeholder='email'></Input>
            <Input placeholder='password'></Input>
            <Button colorScheme='teal' size='sm'>
              Button
            </Button>
          </Box>
        </Box>
      </Center>
      

    </ChakraProvider>
  );
}

export default App;
