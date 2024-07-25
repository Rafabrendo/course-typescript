
import { Layout } from './components/Layout'

import './App.css';

function App() {
  return (
    <Layout>
      <h1>Faça Login</h1>
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
  );
}

export default App;
