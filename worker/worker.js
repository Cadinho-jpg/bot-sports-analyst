console.log("Worker iniciado: tarefas automáticas ativadas!");

// Aqui no futuro você adiciona:
// - Buscar jogos antigos
// - Atualizar estatísticas
// - Salvar análise no banco
// - Automatizar previsões

function iniciarWorker() {
  console.log("Executando tarefa automática...");

  // Exemplo: simulação de atualização automática
  const horario = new Date().toLocaleTimeString();
  console.log(`[${horario}] Worker rodando.`);

  // Aqui você colocará tarefas reais futuramente
}

// Executa a cada 60 segundos
setInterval(iniciarWorker, 60000);

