import http from 'k6/http';

export let options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  http.get('https://test-api.k6.io');
  // Este script pode ser executado com: k6 cloud 06_cloud_test.js
}