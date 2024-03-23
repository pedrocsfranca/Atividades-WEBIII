const Sequelize = require('sequelize');
const database = require('./db');
const pedidos = require('./models/pedidos');
const produto = require('./models/produto');
const categoria = require('./models/categoria')
const clientes = require('./models/clientes')
const itens_pedidos = require('./models/itens_pedido')

database.authenticate()
.then(() => {
console.log('Conexão bem-sucedida com o banco de dados.');
})
.catch(err => {
console.error('Erro ao conectar ao banco de dados:', err);
});

database.sync()
.then(()=> {
    console.log('tabelas criadas')
})