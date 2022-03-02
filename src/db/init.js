/* Arquivo que vai iniciar o nosso banco de dados */

const Database = require('./config');

// constante pra guardar nossas funcoes
const initDb = {
    // pra poder usar "await" tem que ter esse "async" na funcao
    async init() {
        // "await" vai esperar o Database() retornar seu resultado pra ai sim ir pra proxima linha
        const db = await Database(); // abrindo conexao com o nosso banco de dados

        await db.exec(`CREATE TABLE rooms(
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);
        // "PRIMARY KEY" so deixa ocorrer o numero uma vez

        await db.exec(`CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close(); // fechando a conexao com o nosso banco de dados
    } 
}

initDb.init(); // executando a inicializacao