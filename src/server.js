const express = require('express'); // busca a pasta "express" no "node_modules"
const route = require('./route');
const path = require('path');

const server = express(); // inicia o express

server.set('view engine', 'ejs'); // quem vai ser o responsavel pela view engine eh o modulo ejs

server.use(express.static('public')); // pasta onde ta o conteudo estatico

server.set('views', path.join(__dirname, 'views')); // "__dirname" eh o diretorio onde esta esse arquivo que esse comando ta dentro
// torna o caminhos da nossa pasta "views" o caminho oficial pro node procurar, e nao mais fora de src

// Midware: pega o conteudo que ta vindo do formulario, decodificar e passar pro controller
server.use(express.urlencoded({extended: true}));

server.use(route); // comecou a usar o arquivo route.js (onde tem nossas rotas)

server.listen(3000, () => console.log("RODANDO")); // "() =>" funcao simplificada 