# Desafio frontend Conta Azul

[![GitHub version](https://badge.fury.io/gh/ViniciusAugusto%2Fweather-now.svg)](https://badge.fury.io/gh/ViniciusAugusto%2Fweather-now)
[![Coverage Status](https://coveralls.io/repos/github/ViniciusAugusto/weather-now/badge.svg)](https://coveralls.io/github/ViniciusAugusto/weather-now)
[![dependencies Status](https://david-dm.org/ViniciusAugusto/weather-now/status.svg)](https://david-dm.org/ViniciusAugusto/weather-now)
[![codebeat badge](https://codebeat.co/badges/9faadde1-75c7-4e2e-a9e0-a9b8ec0b8df9)](https://codebeat.co/projects/github-com-viniciusaugusto-weather-now-master)

[App Demo](https://weather-now-challenge.herokuapp.com/)

## Challenge

**Objetivo:** ​Construir uma aplicação para exibir a temperatura atual de 3 cidades
diferentes.

**Descrição:**
​A aplicação deve respeitar a seguinte especificação:
- Exibir as condições climáticas das seguintes cidades:
- Nuuk/GL, Urubici/BR e Nairobi/KE
- Temperatura deve ser exibidas em graus Celsius
- Umidade deve ser exibida em percentual
- Pressão deve ser exibida em hectoPascal
- Temperaturas igual ou abaixo de 5 graus devem ser exibidas em azul
- Temperaturas acima de 6 graus e igual ou abaixo de 25 devem ser exibidas
em laranja
- Temperaturas acima de 26 graus devem ser exibidas em vermelho
- As condições climáticas devem ser atualizadas a cada 10 minutos
- As condições climáticas devem ser cacheadas no front-end por 10 minutos
- A topbar deve permanecer fixa ao rolar a página.

## Info

Aplicação desenvolvida utilizando [VueJs](https://vuejs.org/) como Framework, foi utilizado o [Vuex](https://vuex.vuejs.org/en/) para armazernar os dados de temperatura das cidades e lidar com estado da aplicação.

Para teste unitário foi utilizado o [Jest](https://facebook.github.io/jest/) e [vue-test-utils](https://vue-test-utils.vuejs.org/pt-br/)

Para empacotar a aplicação foi utilizado o [Webpack](https://webpack.js.org/)

A Aplicação está hospeda no [Heroku](https://www.heroku.com/) para demonstrar o funcionamento.

## Getting Started

``` bash
git clone https://github.com/ViniciusAugusto/weather-now.git
cd weather-now
```

### Prerequisites

**NodeJs**

### Installing

``` bash
# install dependencies
npm install
```

## Running development

``` bash
npm run dev
```

## Build App

``` bash
npm run build
```

## Running the tests

``` bash
# run unit test
npm test
```

## Deployment

Deploy app in heroku

``` bash
# run deploy
npm run deploy
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ViniciusAugusto/weather-now/tags).

## Authors

* **Vinicius Augusto Cunha** - *Initial work* - [ViniciusAugusto](https://github.com/ViniciusAugusto)

See also the list of [contributors](https://github.com/ViniciusAugusto/weather-now/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
