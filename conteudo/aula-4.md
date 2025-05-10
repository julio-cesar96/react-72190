# Aula de React: Conceitos e Desafios

## Objetivos da Aula:

* Identificar diferentes paradigmas de troca de dados.
* Consumir recursos via chamadas a APIs (use async/await).
* Aprofundar os conhecimentos sobre hooks e children.
* Conhecer diferentes padrões de reutilização.

---

## Paradigmas de Troca de Dados

Na programação com React, a troca de dados pode ocorrer de diferentes formas:

1. **Props (Propriedades)** - Utilizadas para passar informações de um componente pai para um componente filho.

```jsx
const ComponenteFilho = ({ mensagem }) => <p>{mensagem}</p>;

const ComponentePai = () => (
  <ComponenteFilho mensagem="Olá, Mundo!" />
);
```

2. **State (Estado)** - Armazena informações locais do componente que podem mudar com o tempo.

```jsx
import { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};
```

3. **Context API** - Permite compartilhar dados entre vários componentes sem precisar passar props manualmente em cada nível.

```jsx
import { createContext, useContext } from 'react';

const TemaContext = createContext('light');

const ExibeTema = () => {
  const tema = useContext(TemaContext);
  return <p>Tema atual: {tema}</p>;
};

const App = () => (
  <TemaContext.Provider value="dark">
    <ExibeTema />
  </TemaContext.Provider>
);
```

---

## Chamadas a APIs (use async/await)

Para consumir APIs, utilizamos a Fetch API em conjunto com `async/await`. Um exemplo simples de requisição:

```jsx
import { useEffect, useState } from 'react';

const ListaDeUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
      const dados = await resposta.json();
      setUsuarios(dados);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}
    </ul>
  );
};
```

---

## Hooks e Children

* **Hooks** são funções que permitem acessar o estado e o ciclo de vida do React em componentes funcionais.
* **Children** é uma propriedade especial que representa os elementos filhos de um componente.

```jsx
const Painel = ({ children }) => (
  <div className="painel">
    {children}
  </div>
);

const App = () => (
  <Painel>
    <p>Conteúdo do Painel</p>
  </Painel>
);
```

---

## Padrões de Reutilização

* **Render Props** - Passa uma função como prop para compartilhar lógica entre componentes.
* **Higher Order Components (HOC)** - Componentes que recebem um componente e retornam um novo componente com funcionalidades adicionais.

```jsx
const withLogging = (Componente) => {
  return (props) => {
    console.log('Componente montado:', Componente.name);
    return <Componente {...props} />;
  };
};

const MeuComponente = () => <p>Olá, React!</p>;

export default withLogging(MeuComponente);
```

---

# Desafios Propostos:

### 1 - Aplicação que consome a API do MercadoLivre ou PokéAPI e lista os primeiros 10 itens.

```jsx
import { useEffect, useState } from 'react';

const ListaPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();
      setPokemons(data.results);
    };
    fetchPokemons();
  }, []);

  return (
    <ul>
      {pokemons.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
};
```

### 2 - Implementar um Higher Order Component (HOC) `withLogging`.

```jsx
const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log(`Componente ${WrappedComponent.name} montado.`);
    return <WrappedComponent {...props} />;
  };
};

const ComponenteTeste = () => <p>Componente Teste</p>;

export default withLogging(ComponenteTeste);
```

### 3 - Componente `Filter` com Render Props para buscar itens em uma lista de tarefas.

```jsx
const Filter = ({ children, items }) => {
  const [query, setQuery] = useState('');
  const filteredItems = items.filter(item => item.includes(query));

  return children({ query, setQuery, filteredItems });
};

const ListaFiltrada = () => {
  const tarefas = ['Estudar React', 'Revisar Hooks', 'Criar Projeto'];

  return (
    <Filter items={tarefas}>
      {({ query, setQuery, filteredItems }) => (
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrar tarefas..."
          />
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </Filter>
  );
};
```
