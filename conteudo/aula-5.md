# Plano de Aula - Navegação e Roteamento em React

## Objetivos da Aula

* Organizar a aplicação de maneira estruturada.
* Configurar a navegabilidade entre componentes.
* Entender o sistema de eventos do React e sua implementação.
* Projetar componentes orientados a eventos de forma eficiente.

---

## 1️⃣ **Introdução à Navegação e Roteamento em React**

Uma das principais características das aplicações React é a capacidade de criar experiências dinâmicas e de página única (SPA - Single Page Application), onde a navegação entre diferentes partes do site ocorre sem recarregar a página inteira. Isso é possível graças ao conceito de **roteamento no front-end**.

No React, o roteamento é gerenciado por uma biblioteca chamada **React Router**, que permite criar e controlar a navegação entre componentes, fazendo com que a aplicação reaja às mudanças de URL sem perder o estado da aplicação.

### 📝 **Exemplo Real**

Imagine um site de e-commerce: ao clicar em um produto, a URL muda para algo como `/produto/123`, e os detalhes daquele produto são exibidos, sem que a página inteira seja recarregada. Isso melhora a experiência do usuário e reduz o tempo de carregamento.

---

## 2️⃣ **Configuração do React Router**

### 🔹 **Instalação:**

Para instalar o React Router, basta rodar o seguinte comando:

```bash
npm install react-router-dom
```

### 🔹 **Configuração básica:**

No React, o roteamento é estruturado em três componentes principais:

* `<BrowserRouter>`: Define o contexto de roteamento e monitora as mudanças de URL.
* `<Routes>`: Agrupa as diferentes rotas da aplicação.
* `<Route>`: Define uma rota específica, apontando para um componente.

### ✅ **Exemplo de Configuração:**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 3️⃣ **Rotas Dinâmicas**

Rotas dinâmicas são extremamente úteis quando queremos navegar para páginas baseadas em parâmetros. Um exemplo clássico é acessar os detalhes de um produto através de um ID na URL.

### 🔹 **Uso do `useParams`:**

O React Router fornece o hook `useParams` para capturar esses parâmetros da URL.

### ✅ **Exemplo de Rota Dinâmica para Produtos e Categorias:**

```jsx
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  return <div>Detalhes do produto com ID: {id}</div>;
}

function CategoryDetail() {
  const { category } = useParams();
  return <div>Exibindo produtos da categoria: {category}</div>;
}
```

### 🔹 **Definindo as Rotas:**

```jsx
<Routes>
  <Route path='/product/:id' element={<ProductDetail />} />
  <Route path='/category/:category' element={<CategoryDetail />} />
</Routes>
```

### 🚀 **Desafio Prático:**

* Crie uma nova rota para exibir detalhes de usuários (`/user/:id`).
* Na página, exiba o ID do usuário e uma mensagem personalizada.
* Utilize o `useParams` para capturar o ID.

---

## 4️⃣ **Componentes baseados em Eventos**

### 🔹 **Input com Evento onChange:**

Podemos criar um input que reage a mudanças de valor utilizando o evento sintético `onChange`. Este evento dispara sempre que o valor do input é alterado.

### ✅ **Exemplo:**

```jsx
import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input type='text' value={query} onChange={handleChange} placeholder='Digite sua pesquisa...' />
      <p>Pesquisa atual: {query}</p>
    </div>
  );
}
```

### 🚀 **Desafio Prático:**

* Crie um input que capture o nome do usuário e exiba em tempo real abaixo do campo de texto.
* Adicione uma contagem de caracteres digitados ao lado do nome.

---

## 5️⃣ **Criando Máscara de Input**

### ✅ **Exemplo:**

```jsx
function MaskedInput() {
  const handleKeyDown = (event) => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    if (vogais.includes(event.key.toLowerCase())) {
      event.preventDefault();
    }
  };

  return (
    <input type='text' onKeyDown={handleKeyDown} placeholder='Digite sem vogais...' />
  );
}
```

### 🚀 **Desafio Prático:**

* Crie um input que bloqueie números ao serem digitados.
* Exiba um alerta sempre que um número for pressionado.

---

## 6️⃣ **Componente que responde a um evento com Callback**

### ✅ **Exemplo:**

```jsx
function Child({ onButtonClick }) {
  return <button onClick={() => onButtonClick('Mensagem do Filho')}>Clique no Filho</button>;
}

function Parent() {
  const handleChildClick = (message) => {
    alert(`Callback disparado: ${message}`);
  };

  return <Child onButtonClick={handleChildClick} />;
}
```

### 🚀 **Desafio Prático:**

* Crie um componente filho que emita um evento para o pai quando um input for alterado.
* No componente pai, exiba o valor atualizado do input em tempo real.

---

**Bom trabalho! 🚀**
