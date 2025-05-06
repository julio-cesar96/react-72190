import './App.css'
import Button from './components/Button/Button'
import Welcome from './components/Welcome/Welcome'
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  function resetar() {
    setContador(0);
  }

  return (
    <>
      <Welcome name="Gabriel" />
      <Welcome name="Amanda" />
      <Welcome name="Lais" />
      <Welcome name="Julio" />
      <Button color="red">
        <span>
          Clique em mim
        </span>
      </Button>

      <div style={{
        textAlign: "center",
        backgroundColor: "#facb98",
      }}>
        <h1> Contador: {contador} </h1>
        <button onClick={incrementar}> Incrementar </button>
        <button onClick={decrementar}> Decrementar </button>
        <button onClick={resetar}> Resetar </button>
      </div>
    </>
  )
}

export default App
