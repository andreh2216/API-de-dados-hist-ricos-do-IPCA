# API Histórico IPCA

API REST desenvolvida em Node.js e Express para consulta do histórico de IPCA (Índice de Preços ao Consumidor Amplo) e cálculo de correção monetária baseado na inflação acumulada em um período.

## 🚀 Tecnologias

- Node.js
- Express

## 📦 Instalação

\`\`\`bash
git clone <seu-repositorio>
cd <pasta-do-projeto>
npm install
node index.js
\`\`\`

O servidor sobe em `http://localhost:3000`

## 📚 Endpoints

### GET /historicoIPCA
Retorna todo o histórico de inflação armazenado.

**Resposta:**
\`\`\`json
{
  "historicoInflacao": [
    { "id": 1, "ano": 2023, "mes": 1, "indice": 0.53 }
  ]
}
\`\`\`

### GET /historicoIPCA/ano?ano=2023
Retorna os registros de um ano específico.

**Query params:**
| Parâmetro | Tipo   | Obrigatório |
|-----------|--------|-------------|
| ano       | number | sim         |

**Resposta:**
\`\`\`json
{ "resultado": [ { "id": 1, "ano": 2023, "mes": 1, "indice": 0.53 } ] }
\`\`\`

### GET /historicoIPCA/id/:id
Retorna um registro específico pelo id.

**Resposta:**
\`\`\`json
{ "resultado": { "id": 1, "ano": 2023, "mes": 1, "indice": 0.53 } }
\`\`\`

### GET /historicoIPCA/calculo
Calcula o valor corrigido pela inflação acumulada entre dois períodos.

**Query params:**
| Parâmetro   | Tipo   | Obrigatório |
|-------------|--------|-------------|
| valor       | number | sim         |
| mesInicial  | number | sim         |
| anoInicial  | number | sim         |
| mesFinal    | number | sim         |
| anoFinal    | number | sim         |

**Exemplo:**
\`\`\`
GET /historicoIPCA/calculo?valor=1000&mesInicial=1&anoInicial=2020&mesFinal=1&anoFinal=2024
\`\`\`
