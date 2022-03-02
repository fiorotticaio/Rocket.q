const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router(); // route guarda todas as funcionalidades de rota que o express tem

route.get('/', (req, res) => res.render('index', {page: 'enter-room'})); // "/" simplifica "localhost:3000/"
                                                                        // "res.render("index")" manda como resposta (abre) a pagina index.ejs
                                                                        // dentro de "req" tem o que vem da url
                                                                        // "{page: }" eh uma variavel que ta mandando
route.get('/create-pass', (req, res) => res.render('index', {page: 'crate-pass'}));

route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open); // formato que p formulario de dentro da modal tem que passar a informacao
route.post('/enterroom', RoomController.enter);

route.post('/question/create/:room', QuestionController.create);
route.post('/question/:room/:question/:action', QuestionController.index); // ":" indica que o que vem depois eh uma variavel

module.exports = route; // exportanto a constante route para o server.js poder usar