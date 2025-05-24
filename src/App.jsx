import Heading from "./components/Heading/Heading"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ProductList from "./components/ProductList/ProductList"
import { CartProvider } from "./context/CartContext"
import { TitleContext } from "./context/TitleContext"

    
function App() {

  return (
    <>
      <CartProvider>
        <ProductList />
      </CartProvider>
    </>
  )
}

export default App
