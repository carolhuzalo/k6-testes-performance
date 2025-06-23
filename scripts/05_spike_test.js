import http from 'k6/http';

// Configuração do Spike Test
export let options = {
  stages: [
    { duration: '10s', target: 10 },   // Sobe para 10 usuários em 10s (rampa inicial)
    { duration: '2s', target: 100 },   // Pico abrupto: 100 usuários em 2s
    { duration: '10s', target: 10 },   // Redução rápida: volta para 10 usuários
  ],
};

export default function () {
  http.get('https://test-api.k6.io');
}