# 🏀⚽ Sports Analyst Bot  
### Bot de análise esportiva para Basquete e Futebol usando histórico, dados ao vivo e previsões futuras.

---

## 📌 Sobre o Projeto
O **Sports Analyst Bot** é um sistema completo com:
- **Backend (Node + Express)**  
- **Frontend (HTML + JS + Axios + Vite)**  
- **Worker automático**  
- **Deploy 100% grátis no Render**  
- **CI/CD integrado via GitHub Actions**

O sistema analisa jogos de **basquete** e **futebol** com base em:
- Histórico dos times  
- Dados antigos  
- Situações atuais  
- Prognósticos para jogos futuros  

---

## 📁 Estrutura do Projeto

bot-sports-analyst/
│
├── backend/
│ ├── package.json
│ └── src/
│ └── index.js
│
├── frontend/
│ ├── index.html
│ └── package.json
│
├── worker/
│ └── worker.js
│
├── db/
│
├── .github/
│ └── workflows/
│ └── deploy.yml
│
├── render.yaml
└── README.md


## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- Axios
- Vite
- JavaScript
- Render
- GitHub Actions

## 🌍 Deploy Online
O Render cria automaticamente 3 serviços:

| Serviço | Tipo | Função |
|--------|------|--------|
| Backend | Web Service | API |
| Frontend | Static Site | Interface |
| Worker | Background Worker | Tarefas automáticas |

## 🖥️ Como Rodar Localmente
```bash
git clone https://github.com/Cadinho-jpg/bot-sports-analyst.git

cd backend
npm install
npm start

cd ../frontend
npm install
npm run dev
