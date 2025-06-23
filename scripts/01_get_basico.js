// Importa o módulo HTTP do K6 para realizar requisições
import http from 'k6/http';

// Define as configurações do teste
export let options = {
  vus: 5,              // Quantidade de usuários virtuais simultâneos
  duration: '15s',     // Duração total do teste (15 segundos)
};

// Função principal que será executada pelos VUs (Virtual Users)
export default function () {
  // Realiza uma requisição HTTP do tipo GET para a API pública do K6
  http.get('https://test-api.k6.io');
}