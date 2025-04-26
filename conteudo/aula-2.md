# Unidade 2: JSX, Transpiling e Componentes

## 🌟 Objetivos da aula
- Entender o que é **sugar syntax** e como ela evoluiu nas linguagens de programação.
- Desenvolver código utilizando **JSX**.
- Compreender o conceito de **componentes** e o problema que eles resolvem.
- Implementar componentes na prática com React.

---

## 📚 Parte 1: Entendendo o JSX e a Sugar Syntax

### O que é JSX?
- **JSX** (JavaScript XML) é uma extensão de sintaxe para JavaScript.
- Permite escrever estruturas semelhantes a HTML dentro do JavaScript.
- Exemplo:
  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

### Por que usar JSX?
- Facilita a criação de componentes de UI de forma declarativa.
- Torna o código mais **legível** e **intuitivo**.
- É convertido em chamadas de `React.createElement()` por trás dos panos (processo chamado de **transpiling**, feito pelo Babel).

### Sugar Syntax
- Conceitos como:
  - **Spread Operator (`...`)**
  - **Propriedades dinâmicas**
  - **Desestruturação**
- Tornam o código mais limpo, fácil de escrever e ler.

Exemplo de Sugar Syntax:
```javascript
const user = { name: 'John', age: 30 };
const newUser = { ...user, location: 'New York' }; // spread operator -> { nome: 'John', age: '30', location: 'New York'}
const { name, age } = newUser; // desestruturação
```

---

## 📚 Parte 2: Entendendo Componentes

### O que é um Componente?
- Um **componente** é como uma função JavaScript que retorna uma interface (UI).
- É a base para construir aplicações React de forma modular e reutilizável.

### Vantagens de usar Componentes:
- Reutilização de código.
- Organização e manutenção facilitadas.
- Separar responsabilidades (cada componente tem seu próprio propósito).

### Como criar um Componente?
Exemplo básico:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Ou usando arrow functions:
```jsx
const Welcome = ({ name }) => <h1>Hello, {name}</h1>;
```

---

# 🛠️ Atividades Práticas

## ✏️ Atividade 1: Botão Multiuso
⏳ **Duração: 25 minutos**

### Instruções:
1. Crie um arquivo chamado **`Button.jsx`** dentro da pasta `/src/components/Button`.
2. Implemente um componente `Button` que:
   - Receba via **props**:
     - `color` (cor de fundo)
     - `onClick` (função a ser executada ao clicar)
   - Use `children` para mostrar o texto do botão.
3. Exporte o componente.
4. Importe e use o botão dentro de `App.jsx`, alterando as props para ver a reutilização.

### Exemplo de Código:
```jsx
// src/components/Button/Button.jsx
import React from 'react';

const Button = ({ color, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: color, padding: '10px 20px', border: 'none', color: 'white', borderRadius: '5px' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

```jsx
// App.jsx
import React from 'react';
import Button from './components/Button/Button';

function App() {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div>
      <Button color="blue" onClick={handleClick}>Clique Aqui</Button>
      <Button color="green" onClick={handleClick}>Outro Botão</Button>
    </div>
  );
}

export default App;
```

> 💡 **Dica:** Você pode adicionar mais props como `disabled`, `size`, `border`, etc.

---

## ✏️ Atividade 2: Corrigir Sugar Syntax
⏳ **Duração: 20 minutos**

### Instruções:
Corrija o código abaixo, que contém erros na utilização de sugar syntax:

### Código com erro:
```javascript
const data = { name: 'John', age: 30 };
const newData = { ...data, location: 'New York' };

function display({ name age }) {
  return `Name: ${name}, Age: ${age}`;
}

console.log(display(newData));
```

### Correção sugerida:
```javascript
const data = { name: 'John', age: 30 };
const newData = { ...data, location: 'New York' };

function display({ name, age }) { // Corrigido: adicionado a vírgula
  return `Name: ${name}, Age: ${age}`;
}

console.log(display(newData));
```

---

## ✏️ Atividade 3: Implementar Polyfill
⏳ **Duração: 25 minutos**

### Instruções:
Crie um **polyfill** para o método `Array.prototype.includes` para navegadores antigos.

### Exemplo de Polyfill:
```javascript
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement) {
    return this.indexOf(searchElement) !== -1;
  };
}
```

---

## ✏️ Atividade 4: Exemplo Vivo - Regras do JSX
⏳ **Duração: 10 minutos**

### Particularidades do JSX:
- Um componente deve retornar apenas **um elemento pai**.
- Atributos HTML mudam de nome:
  - `class` vira `className`
  - `for` vira `htmlFor`
- Você pode usar **expressões JavaScript** dentro de `{}`:
  ```jsx
  const name = "React";
  return <h1>Hello, {name}!</h1>;
  ```

---

## ✏️ Atividade 5: Criação de um Contador
⏳ **Duração: 25 minutos**

### Instruções:
Crie um componente `ItemCount` com:
- Um estado `count` inicializado em 0.
- Dois botões: um para incrementar e outro para decrementar o contador.

Use o **hook `useState`** para gerenciar o estado.

### Exemplo de Código:
```jsx
import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default ItemCount;
```

---

# 📋 Encerramento e Perguntas

⏳ **Duração: 10 minutos**

### Recapitulando:
- **JSX** facilita escrever componentes de interface de forma declarativa.
- **Sugar Syntax** deixa o código mais limpo e conciso.
- **Componentes** organizam melhor o projeto, são reutilizáveis e facilitam a manutenção.
- **Hooks** como `useState` permitem gerenciar estados nos componentes.

### Perguntas finais
- Alguma dúvida sobre a criação de componentes?
- Perguntas sobre uso de props, children ou estados?

