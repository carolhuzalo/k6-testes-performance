# 🧪 Testes de Performance com K6

Este repositório contém uma coleção de scripts de testes de performance utilizando a ferramenta [K6](https://k6.io/), com foco educacional e prático. Os exemplos cobrem desde testes básicos até testes com dados externos, thresholds e execução em cloud.


## 📑 Sumário

- [📂 Scripts incluídos](#-scripts-incluídos)
- [▶️ Como executar](#️-como-executar)
- [📦 Dados externos](#-dados-externos)
- [📊 Relatórios](#-relatórios)
- [🔧 Tecnologias](#-tecnologias)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)


## 📂 Scripts incluídos

| Arquivo                        | Descrição                                          |
|-------------------------------|----------------------------------------------------|
| `01_get_basico.js`            | Script com requisição GET simples                  |
| `02_get_com_check.js`         | GET com validações usando `check()`               |
| `03_post_dados_externos.js`   | POST utilizando dados externos de um JSON         |
| `04_thresholds.js`            | Teste com thresholds para SLAs de latência e erro |
| `05_spike_test.js`            | Simulação de pico de usuários (Spike Test)        |
| `06_cloud_test.js`            | Execução de script no K6 Cloud                    |


## ▶️ Como executar

### 1. Instale o K6

#### Linux (Debian/Ubuntu):
`sudo apt install k6`

#### MacOS:
`brew install k6`

#### Windows (via Chocolatey):
`choco install k6`

### 2. Rode um script
`k6 run scripts/01_get_basico.js`

### 3. Execute no K6 Cloud (requer login)

 `k6 login cloud`

 `k6 cloud scripts/06_cloud_test.js`



## 📦 Dados externos
O script 03_post_dados_externos.js usa um arquivo chamado `users.json.` 
Exemplo:
dados/users.json

```json
[
  {
    "username": "usuario1",
    "email": "usuario1@email.com",
    "password": "123456"
  },
  {
    "username": "usuario2",
    "email": "usuario2@email.com",
    "password": "abcdef"
  }
]
```



## 📊 Relatórios
* Você pode exportar os resultados para JSON e visualizá-los com outras ferramentas:
* `k6 run scripts/04_thresholds.js --out json=resultado.json`
* Ferramentas externas como o `k6-reporter` permitem conversão para HTML.



## 🔧 Tecnologias
* K6 – Framework para testes de carga

* JavaScript ES6



## 🤝 Contribuição
Sinta-se à vontade para contribuir com novos scripts, melhorias ou sugestões via Pull Request.



## 📄 Licença
Este projeto está licenciado sob a MIT License. Uso livre para fins pessoais, profissionais e educacionais.

---

## RESUMO SOBRE TESTES DE PERFORMANCE COM K6

### 1. O que é o K6?

K6 é uma ferramenta de código aberto voltada para testes de performance, desenvolvida pela Grafana Labs. Sua proposta é permitir a criação de scripts leves e eficazes utilizando JavaScript.

#### Vantagens:

- Scripts em JavaScript
- Escrita simples e intuitiva
- Baixo consumo de recursos
- Integração com CI/CD
- Execução local ou na nuvem

### 2. Tipos de Testes de Performance

#### Load Test

Simula o uso esperado da aplicação com múltiplos usuários simultâneos.

#### Stress Test

Avalia a resistência do sistema ao aumentar gradualmente a carga até ultrapassar os limites suportados.

#### Spike Test

Insere picos súbitos de usuários em curtos períodos de tempo.

#### Soak Test

Verifica o comportamento do sistema sob carga constante por um longo período.

### 3. Estrutura de um Script K6

```jsx
import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  let res = http.get('<https://test-api.k6.io>');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}

```

#### Componentes principais:

- `http`: biblioteca para chamadas HTTP.
- `check`: validações.
- `options`: define a configuração do teste (VUs e duração).

### 4. Métricas e Checks

#### Métricas padrão:

- `http_req_duration`: tempo de resposta total
- `http_req_failed`: requisições com erro
- `vus`: número de usuários virtuais ativos

#### Uso de Checks:

```jsx
check(res, {
  'status is 200': (r) => r.status === 200,
});

```

---

### 5. Thresholds

Permitem definir SLAs para determinar se o teste foi bem-sucedido:

```jsx
export let options = {
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

```

---

### 6. Testes com Dados Externos

#### Importando arquivos:

```jsx
import { SharedArray } from 'k6/data';
const users = new SharedArray("users", function() {
  return JSON.parse(open('./usuarios.json'));
});

```

Usado para alimentar o teste com dados dinâmicos.

---

### 7. Relatórios

#### Saídas padrões:

- Console
- JSON
- HTML via ferramentas externas (ex: `k6-summary-html`)

#### Exemplo:

```bash
k6 run script.js --out json=resultado.json

```

---

### 8. Execução em Cloud e AWS

#### K6 Cloud:

Permite execução e análise avançada na nuvem da Grafana:

```bash
k6 login cloud
k6 cloud script.js

```

#### AWS:

- Utilização de EC2 para execução em larga escala
- Armazenamento de relatórios no S3

