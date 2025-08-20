# 📊 Controle de Investimentos — Back-end

API RESTful desenvolvida em **Node.js + Express + SQLite** para gerenciar investimentos.
Inclui **validações**, **documentação Swagger** e arquitetura organizada em `controllers`, `services`, `repositories` e `routes`.

---

## 🚀 Tecnologias

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Supabase](https://supabase.com/)
* [Express Validator](https://express-validator.github.io/docs/)
* [Swagger UI](https://swagger.io/tools/swagger-ui/)

---

## 📂 Estrutura de Pastas

```
src/
├── controllers/        # Regras de entrada/saída da API
├── services/           # Lógica de negócio
├── middlewares/        # Validação das regras
├── supabaseClient.js   # Configuração do Banco de dados
├── index.js            # Ponto de entrada da aplicação
```

---

## ⚙️ Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/back-end-gf.git
cd back-end-gf
npm install
```

---

## ▶️ Rodando o projeto

### Ambiente de desenvolvimento

```bash
npm run dev
```

> Usa `nodemon` para reiniciar o servidor automaticamente.

### Ambiente de produção

```bash
npm start
```

O servidor rodará em:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📖 Documentação da API

A documentação está disponível via **Swagger UI** em:
👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

---

## 📌 Endpoints

### **Investimentos**

* **GET** `/api/investments` → Listar todos os investimentos
* **GET** `/api/investments/{id}` → Buscar investimento por ID
* **POST** `/api/investments` → Criar um investimento
* **PUT** `/api/investments/{id}` → Atualizar um investimento
* **DELETE** `/api/investments/{id}` → Remover um investimento

---

## 📦 Exemplo de Request

### Criar investimento

```json
POST /api/investments
Content-Type: application/json

{
  "name": "Tesouro Selic 2029",
  "type": "Título",
  "amount": 1500.50,
  "date": "2025-08-18"
}
```

### Resposta (201)

```json
{
  "id": 1,
  "name": "Tesouro Selic 2029",
  "type": "Título",
  "amount": 1500.50,
  "date": "2025-08-18"
}
```

---

## 🗄️ Banco de Dados

O projeto usa **SQLite** (arquivo local).
O banco será criado automaticamente na primeira execução.

---

## 👨‍💻 Autor

**Igor Rafael Marcelo Morais**
