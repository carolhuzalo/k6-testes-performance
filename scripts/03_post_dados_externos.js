import http from 'k6/http';

// Importa SharedArray para carregar dados externos uma única vez e compartilhar entre VUs
import { SharedArray } from 'k6/data';

// Carrega e usa o arquivo JSON com dados dos usuários, armazenando numa estrutura compartilhada
const users = new SharedArray('user data', function () {
  // Abre e converte o arquivo users.json em um array de objetos JavaScript
  return JSON.parse(open('./dados/users.json'));
});

export default function () {
  // Seleciona aleatoriamente um usuário do array para usar no payload
  const payload = JSON.stringify(users[Math.floor(Math.random() * users.length)]);

  // Define o cabeçalho HTTP indicando que o corpo da requisição é JSON
  const headers = { 'Content-Type': 'application/json' };

  // Envia uma requisição POST para o endpoint de registro, enviando o payload e os headers
  http.post('https://test-api.k6.io/user/register/', payload, { headers });
}