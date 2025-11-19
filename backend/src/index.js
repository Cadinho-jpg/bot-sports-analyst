import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Porta dinâmica para Render
const PORT = process.env.PORT || 8080;

// Endpoint de teste
app.get("/", (req, res) => {
  res.json({ status: "API do Bot Sports Analyst funcionando!" });
});

// ----------------------------
// ANALISADOR DE JOGOS (BASE)
// ----------------------------
app.post("/analisar", async (req, res) => {
  try {
    const { esporte, timeA, timeB, modo } = req.body;

    if (!esporte || !timeA || !timeB || !modo) {
      return res.status(400).json({ error: "Dados incompletos." });
    }

    // Simulação de IA
    const resposta = `Analisando ${esporte.toUpperCase()} entre ${timeA} e ${timeB} no modo: ${modo}.
    Vou considerar jogos antigos, desempenho recente e dados disponíveis.`;

    res.json({
      sucesso: true,
      analise: resposta
    });

  } catch (e) {
    res.status(500).json({ error: "Erro ao gerar análise" });
  }
});

// ----------------------------
// INICIAR SERVIDOR
// ----------------------------
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

