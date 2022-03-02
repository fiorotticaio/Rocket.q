const Database = require('../db/config');

module.exports = {

    async create(req, res) {
        const db = await Database();
        const pass = req.body.password;
        let roomId;
        let isRoom = false;

        while(isRoom) {
            /* Gera o numero da sala */
            for(var i = 0; i < 6; i++) {
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : 
                    roomId += Math.floor(Math.random() * 10).toString();
                // gera um numero aleatorio de 1 a 10 e vai adicionando na frente (concatenando)
            }

            /* Veriicar se esse numero ja existe */
            const roomaExistIds = await db.all(`SELECT id FROM rooms`);
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId);

            if(!isRoom) {
                /* Insere a sala no banco */
                await db.run(`INSERT INTO rooms(
                    id,
                    pass
                ) VALUES(
                    ${parseInt(roomId)},
                    ${pass}
                )`);
            }
        }

        await db.close();

        res.redirect(`/room/${roomId}`);
    },


    async open(req, res) {
        const db = await Database();
        const roomId = req.params.room;
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`); // trazer somente as perguntas ques nao estao lidas da sala em especifico em que se esta trabalhando
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`);
        let isNoQuestions;

        if(questions.length == 0) {
            if(questionsRead.length == 0) {
                isNoQuestions = true;
            }
        }

        res.render('room', {roomId: roomId, questions: questions, questionsRead: questionsRead, isQuestions: isQuestions});
    },


    enter(req, res) {
        const roomId = req.body.roomId;

        res.redirect(`/room/${roomId}`);
    }
}