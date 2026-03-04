import './App.css';
import Header from './components/Header';
import Test from './components/Test';
import Objects from './components/Objects';
import Users from './components/Users';
import ListaCards from './components/ListaCards';
import ListaTarefas from './components/ListaTarefas';

function App() {
  return (
    <>
      <Header />
      <Test />
      <Objects />
      <Users />
      <ListaCards />
      <ListaTarefas />
    </>
  );
}

export default App;

/*
O problema no seu código está na estrutura do JSX dentro da função App(). 
No React, um componente precisa retornar um único elemento pai.

Atualmente, seu código está retornando <Header /> e <Test /> 
como elementos separados, o que causará um erro de sintaxe.
*/