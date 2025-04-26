import './App.css'
import Button from './components/Button/Button'
import Welcome from './components/Welcome/Welcome'

function App() {

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
    </>
  )
}

export default App
