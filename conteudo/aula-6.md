
# Aula: Context API no React 🚀

## 🎯 Objetivos da Aula

- Compartilhar dados entre componentes sem passar props manualmente.
- Criar estruturas reutilizáveis com Context e Custom Providers.
- Entender e aplicar técnicas de rendering condicional.
- Conhecer `React.memo` para otimização de performance.

---

## 🧠 Relembrando os Conceitos Básicos

- **Props**: servem para passar dados de um componente pai para seus filhos.
- **Estado (state)**: dados internos do componente, manipulados com `useState`.
- **Problema**: quando muitos componentes precisam da mesma informação → "prop drilling".

---

## 🌐 Introdução ao Context API

### 📌 O que é Context?

O Context API permite **compartilhar dados** entre diversos componentes **sem precisar passar props manualmente**.

### ✨ Casos de uso comuns

- Tema da aplicação (claro/escuro)
- Dados do usuário logado
- Carrinho de compras
- Preferências globais da interface

---

## ⚙️ Exemplo ao vivo: Criando um Contexto Simples

### Etapas:

1. Criar o contexto com `createContext`.
2. Usar o `Provider` para definir o valor.
3. Consumir com `useContext` onde necessário.

```jsx
// context/TitleContext.js
import { createContext } from "react";

export const TitleContext = createContext({ title: "Valor padrão" });
```

```jsx
// App.js
import React from "react";
import { TitleContext } from "./context/TitleContext";
import ChildComponent from "./ChildComponent";

function App() {
  return (
    <TitleContext.Provider value={{ title: "Título da aplicação" }}>
      <ChildComponent />
    </TitleContext.Provider>
  );
}

export default App;
```

```jsx
// ChildComponent.js
import React, { useContext } from "react";
import { TitleContext } from "./context/TitleContext";

function ChildComponent() {
  const { title } = useContext(TitleContext);
  return <h1>{title}</h1>;
}

export default ChildComponent;
```

---

## 🧪 Exercício: Criar o UserContext

### Descrição:

1. Crie um contexto `UserContext` com `{ user: null, isLoggedIn: false }` como valor padrão.
2. Use `context.Provider` como wrapper da aplicação.
3. Consuma os dados usando `useContext`.

```jsx
// context/UserContext.js
import { createContext } from "react";
export const UserContext = createContext({ user: null, isLoggedIn: false });
```

```jsx
// App.js
import { UserContext } from "./context/UserContext";
import Profile from "./Profile";

function App() {
  const user = { name: "Maria", isLoggedIn: true };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}
```

```jsx
// Profile.js
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function Profile() {
  const { name, isLoggedIn } = useContext(UserContext);

  return <p>{isLoggedIn ? `Bem-vinda, ${name}` : "Faça login"}</p>;
}
```

---

## 🏗️ Exemplo ao vivo: Criando um Custom Provider

### Descrição:

Um `CustomProvider` é um componente fachada que encapsula o estado e fornece o valor do contexto.

```jsx
// context/CartContext.js
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart((prev) => [...prev, item]);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
```

```jsx
// App.js
import { CartProvider } from "./context/CartContext";
import ProductList from "./ProductList";

function App() {
  return (
    <CartProvider>
      <ProductList />
    </CartProvider>
  );
}
```

```jsx
// ProductList.js
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function ProductList() {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div>
      <button onClick={() => addToCart("Produto X")}>Adicionar</button>
      <p>Itens no carrinho: {cart.length}</p>
    </div>
  );
}
```

---

## 🧪 Atividade: Crie seu Contexto

### Instruções:

1. Crie a pasta `src/context/`.
2. Crie o arquivo `cartContext.js`.
3. Use `createContext([])` e exporte-o.
4. Importe-o como Provider em `App.js`.

---

## 🧩 Exemplo ao vivo: Rendering Condicional

### Criação de um componente de `Loader`

```jsx
// Loader.js
function Loader({ loading }) {
  if (!loading) return null;
  return <div>Loading...</div>;
}

export default Loader;
```

```jsx
// App.js (exemplo de uso)
import Loader from "./Loader";

function App() {
  const isLoading = true;
  return (
    <div>
      <Loader loading={isLoading} />
    </div>
  );
}
```

---

## 🧪 Exercício: Loader

### Instruções:

1. Crie o componente `Loader`.
2. Ele deve receber uma prop `loading` (boolean).
3. Mostrar “Loading…” se `true`; senão, não renderiza nada.
4. (Opcional) Adicione spinner com biblioteca de UI.

---

## 🚀 Render Optimization com React.memo

### O que é?

`React.memo` é usado para evitar renderizações desnecessárias quando as props **não mudam**.

### Exemplo:

```jsx
const MyComponent = React.memo(function MyComponent({ name }) {
  console.log("Renderizou!");
  return <p>Olá, {name}</p>;
});
```

---

## 🧠 Resumo da Aula

✔️ Aplicação com estado global via Context  
✔️ Uso de Custom Providers  
✔️ Técnicas de rendering condicional  
✔️ Introdução ao `React.memo`  
✔️ Atividades práticas com `UserContext`, `Loader` e `CartContext`

---

## 📌 Projeto Final

✅ Comece a implementação do **CartContext** para seu projeto final.  
👉 [Guia do Cart Context](https://docs.google.com/presentation/d/1L-OL2gcJwPG-ItZKrzPZ66YGLd7_Cfp4)

---

## 📬 Dúvidas?

Estamos ao vivo no chat!  
Bons estudos e até a próxima aula! 🚀
