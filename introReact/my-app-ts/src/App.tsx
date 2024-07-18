import { Card } from "./components/Card";

function App() {
  return (
    <div>
      <h1>World</h1>
      <p>Paragrafo</p>
      <div>
        <h1>Card 1</h1>
        <p>Paragrafo</p>
      </div>
      <div>
        <h1>Card 2</h1>
        <p>Paragrafo 2</p>
      </div>
      <div>
        <h1>Card 3</h1>
        <p>Paragrafo</p>
      </div>
      <Card />
    </div>
  );
}

export default App;
