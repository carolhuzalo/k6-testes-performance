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
