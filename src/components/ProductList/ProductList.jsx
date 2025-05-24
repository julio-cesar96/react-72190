import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ProductList = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div>
      <button onClick={() => addToCart("Produto X")}>Adicionar</button>
      <p>Itens no carrinho: {cart.length}</p>
    </div>
  );
}

export default ProductList