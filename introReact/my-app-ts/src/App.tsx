import { Card } from "./components/Card";
import { Layout } from "./components/layout";

function App() {
  return (
    // <React.Fragment>  -> Posso passar assim tbm. Ou posso usar apenas <>
    <Layout>
      <>
        Hello World!
        <Card
          id={1}
          paragraph="Olá mundo"
          details="TS para front e backend"
        />
        <Card
          id={2}
          paragraph="Olá mundo"
          details="TS para front e backend"
        />
        <Card
          id={3}
          paragraph="Olá mundo"
          details="TS para front e backend"
        />
      
      </>
    </Layout>
    // </React.Fragment> 
  );
}

export default App;
