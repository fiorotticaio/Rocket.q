/* O banco de dados eh como se fosse uma tabela com varias informacoes armazenadas */

const sqlite3 = require('sqlite3');
const { open } = require('sqlite'); // tranzendo so o "open" do sqlite
// o "open()" abre uma conexao com o banco de dados

module.exports = () => {
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database, // comanda o banco de dados
        // recebe as instrucoes em sql e armazena as coisas la sozinho
    });
}