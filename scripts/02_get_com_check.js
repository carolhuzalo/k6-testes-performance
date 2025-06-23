import http from 'k6/http';
import { check } from 'k6';

// Configuração do teste
export let options = {
  vus: 10,              // 10 usuários virtuais simultâneos
  duration: '30s',      // executando durante 30 segundos
};

export default function () {
  // Requisição GET à API pública do K6
  let res = http.get('https://test-api.k6.io/public/crocodiles/');

  // Validações (checks)
  check(res, {
    'status is 200': (r) => r.status === 200,           // Confirma que a resposta foi OK
    'body is not empty': (r) => r.body.length > 0,      // Confirma que o corpo da resposta não está vazio
  });
}