import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

// pegar os botoes que existem com a clss "check"
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {
    // adicionar a escuta
    button.addEventListener('click', handleClick);
});


// quando o botao excluir for clicado ele abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete');

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false));
})

function handleClick(event, check = true) { // o padrao do "check" eh true
    event.preventDefault(); // tirar o "#" da url quando clicae em cima
    const text = check ? "Marcar como lida" : "Excluir";
    const slug = check ? "check" : "delete";
    // ".dataset.id" pega o num do atributo "data-id"
    const roomId = document.querySelector('#room-id').dataset.id;
    const questionId = event.target.dataset.id;

    const form = document.querySelector('.modal form');
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`;
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red');

    // abrir modal
    modal.open();
}