import http from 'k6/http';

// Importa a função check para validações das respostas
import { check } from 'k6';

// Configurações do teste
export let options = {
  vus: 20,           // Número de usuários virtuais simultâneos
  duration: '30s',   // Tempo total que o teste vai rodar

  // Thresholds definem limites para métricas, usados para avaliar sucesso ou falha do teste
  thresholds: {
    // 95% das requisições devem ter duração menor que 500ms
    http_req_duration: ['p(95)<500'],

    // Taxa de requisições falhas deve ser menor que 1%
    http_req_failed: ['rate<0.01'],
  },
};

// Função principal executada pelos usuários virtuais
export default function () {
  // Executa uma requisição GET para o endpoint especificado
  let res = http.get('https://test-api.k6.io/public/crocodiles/1/');

  // Valida se o status da resposta é 200 (OK)
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
