
# 🚀 Unidade 7: Firebase e Firestore em React

## 🎯 Objetivos da Aula

- Entender o que é o Firebase e sua arquitetura serverless.
- Configurar um projeto React integrado ao Firestore.
- Ler, inserir e atualizar dados em coleções.
- Criar pedidos e trabalhar com carrinho de compras.
- Explorar boas práticas com Firebase e React.

---

## ☁️ O que é Firebase?

Firebase é uma plataforma da Google que oferece uma série de ferramentas serverless para desenvolvimento web e mobile, como:

- **Autenticação**
- **Banco de dados em tempo real (Realtime Database e Firestore)**
- **Armazenamento**
- **Funções em nuvem**

O Firestore é um banco NoSQL em tempo real com sincronização automática e queries avançadas.

### 📦 Vantagens

- Zero manutenção de servidores
- Plano gratuito generoso
- Escalável automaticamente
- Integração fácil com React

---

## 🔧 Preparando o Ambiente

### 1. Criando um Projeto no Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Clique em “Adicionar Projeto”
3. Siga os passos e crie um App Web
4. Copie o objeto de configuração (apiKey, authDomain etc)

### 2. Instalando Firebase

```bash
npm install firebase
```

### 3. Configurando Firebase no Projeto

```js
// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_PROJETO_ID",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

## 🔍 Lendo Dados do Firestore

### 🔹 Lendo todos os documentos de uma coleção

```js
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(items);
};
```

### 🔹 Lendo documento único

```js
import { doc, getDoc } from "firebase/firestore";

const getItem = async (itemId) => {
  const ref = doc(db, "items", itemId);
  const snapshot = await getDoc(ref);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    console.log("Documento não encontrado");
  }
};
```

---

## 📝 Inserindo e Atualizando Dados

### 🔹 Criando documento com `addDoc`

```js
import { collection, addDoc } from "firebase/firestore";

const createItem = async (newItem) => {
  const docRef = await addDoc(collection(db, "items"), newItem);
  console.log("Item adicionado com ID:", docRef.id);
};
```

### 🔹 Atualizando documento com `updateDoc`

```js
import { doc, updateDoc } from "firebase/firestore";

const updateItem = async (itemId, updates) => {
  const ref = doc(db, "items", itemId);
  await updateDoc(ref, updates);
  console.log("Item atualizado com sucesso!");
};
```

---

## 🧠 Desafio Prático I — Crie sua Coleção `items`

1. Configure sua conta Firebase
2. Crie um projeto e inicialize o Firestore
3. Adicione manualmente pelo menos 2 produtos com os campos: `title`, `price`, `stock`, `description`.

> 💡 Use o StackBlitz para testar rapidamente:  
> [Stackblitz de exemplo](https://stackblitz.com/edit/stackblitz-starters-xjc8jd?file=src%2FApp.js)

---

## 🛒 Criando uma Ordem de Compra

```js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const createOrder = async (cartItems, buyerData) => {
  const order = {
    buyer: buyerData,
    items: cartItems.map(({ id, title, quantity, price }) => ({
      id, title, quantity, price
    })),
    total: cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0),
    date: serverTimestamp()
  };

  const docRef = await addDoc(collection(db, "orders"), order);
  console.log("Pedido criado com ID:", docRef.id);
};
```

---

## 🧩 Exercícios Interativos

### 1. Crie uma interface com formulário para cadastro de produtos no Firestore

> Crie um formulário com campos: Nome, Preço, Estoque. Ao clicar em “Salvar”, o produto deve ser salvo na coleção `items`.

### 2. Exiba todos os produtos cadastrados dinamicamente

> Use `useEffect` para buscar os dados e renderize-os com um `.map()`.

### 3. Faça um componente de "Detalhe do Produto"

> Ao clicar em um item da lista, mostre os dados completos do produto em outro componente.

### 4. Monte um carrinho de compras com os produtos selecionados

> Adicione quantidade e calcule o total.

### 5. Gere um pedido de compra com dados do comprador

> Implemente o `createOrder()` usando os dados do carrinho e do formulário de comprador.

---

## 💡 Dicas e Boas Práticas

- Use `useEffect` para carregar dados apenas quando necessário.
- Armazene `timestamps` com `serverTimestamp()` para garantir a consistência.
- Utilize `writeBatch` para múltiplas escritas.

---

## 📚 Links úteis

- [Documentação Firestore](https://firebase.google.com/docs/firestore)
- [Gerenciar Dados Firestore](https://firebase.google.com/docs/firestore/manage-data/add-data)

---

## 🎓 Resumo da Aula

- Firebase e arquitetura serverless
- Firestore: leitura, escrita e atualização
- Criação de pedidos com React
- Boas práticas e desafios

