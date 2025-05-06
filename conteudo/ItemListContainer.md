
# 📦 Como listar produtos usando `map`, `Promise`, `async/await` e `useEffect` em React

Neste guia, vamos aprender a construir um componente `ItemListContainer` em React que carrega uma lista de produtos a partir de um "mock" (simulação de banco de dados) usando `map`, `Promise`, `async/await` e o hook `useEffect`.

---

## 📁 Estrutura do mock JSON

Crie um arquivo chamado `mockProducts.js` com os dados simulados:

```js
// mockProducts.js
export const products = [
  {
    id: "1",
    name: "Camisa Branca",
    description: "Camisa de algodão branca, confortável e elegante.",
    price: 59.9,
    stock: 10,
  },
  {
    id: "2",
    name: "Calça Jeans",
    description: "Calça jeans azul, corte reto.",
    price: 89.9,
    stock: 5,
  },
  {
    id: "3",
    name: "Tênis Esportivo",
    description: "Ideal para caminhadas e corridas.",
    price: 199.9,
    stock: 3,
  }
];
```

---

## 🔄 Função simulada para buscar produtos (mock com `Promise`)

```js
// getProducts.js
import { products } from "./mockProducts";

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500); // simula um tempo de carregamento (ex: chamada à API)
  });
};
```

---

## 🧩 Componente `ItemListContainer`

```jsx
// ItemListContainer.jsx
import React, { useEffect, useState } from "react";
import { getProducts } from "./getProducts";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  // useEffect é chamado uma vez quando o componente é montado
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // espera os dados simulados
        setProductList(data);             // atualiza o estado com os produtos
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    fetchProducts(); // chama a função ao montar o componente
  }, []);

  return (
    <div>
      <h2>🛍️ Produtos disponíveis</h2>
      {productList.length === 0 ? (
        <p>Carregando produtos...</p>
      ) : (
        <ul>
          {productList.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>💲Preço: R$ {product.price.toFixed(2)}</p>
              <p>📦 Estoque: {product.stock}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemListContainer;
```

---

## 🧠 Conceitos utilizados

| Conceito       | Explicação                                                                 |
|----------------|----------------------------------------------------------------------------|
| `useState`     | Gerencia o estado dos produtos no componente.                             |
| `useEffect`    | Executa uma ação (como buscar produtos) quando o componente é montado.    |
| `async/await`  | Facilita o uso de Promises tornando o código mais legível.                |
| `map`          | Itera sobre o array de produtos para renderizá-los na tela.               |
| `Promise`      | Simula o tempo de resposta como se fosse uma chamada de API real.         |

---

## ✅ Resultado Esperado

Ao abrir a página, o componente exibirá a mensagem "Carregando produtos..." por 1,5 segundo e depois mostrará uma lista com os produtos definidos no mock.

---

## 🧪 Dica Extra

Você pode adicionar mais produtos ao arquivo `mockProducts.js` para testar com uma lista maior!
