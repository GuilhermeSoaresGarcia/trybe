import './App.css';

function List(value) {
  const arrayCompromissos = ['teste', 'teste1', 'teste2', 'teste3'];
  return (<ul>
    {arrayCompromissos.map((item) => <li>{item}</li> )}
  </ul>
  );
}

function App() {
  return (
    <div>
      <h1>Listinha cretina só pra testar se está funcionando</h1>
      <List />
    </div>

  );
}

export default App;
