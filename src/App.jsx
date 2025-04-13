import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"
import './index.css'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer bienvenida={"Bienvenidos a Sassenach!"}></ItemListContainer>
    </>
  )
}

export default App
