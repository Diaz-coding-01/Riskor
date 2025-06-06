'use strict';

let btnOpenAddTraining = document.getElementById('btnOpenAddTraining');
let btnCloseModal = document.querySelectorAll('.btnCloseModal');
let formAddTraining = document.getElementById('formAddTraining');
let modalAddTraining = document.querySelector('.containerModalAddTraining');
let modalTraining = document.querySelector('.containerModalTraining');
let trainings = document.querySelectorAll('.informationPnl');
let btnAddTraining = document.getElementById('btnAddTraining');
let modalEmployees = document.querySelector('.containerModalEmployees');


btnAddTraining.addEventListener('click', () => {
    modalEmployees.classList.replace('hideModal', 'showModal');
});

modalEmployees.addEventListener('submit', (e) => {
    e.preventDefault();
});

btnCloseModal.forEach(btn => {
    btn.addEventListener('click', () => {
        let modalClass = btn.dataset.modal;
        let modal = document.querySelector(`.${modalClass}`);
        if (!modal) return;
        modal.classList.replace('showModal', 'hideModal');
    });
});

trainings.forEach(training => {
    training.addEventListener('click', () => {
        modalTraining.classList.replace('hideModal', 'showModal');
    });
});

btnOpenAddTraining.addEventListener('click', () => {
    modalAddTraining.classList.replace('hideModal', 'showModal');
})

formAddTraining.addEventListener('submit', (e) => {
    e.preventDefault();
})

document.addEventListener('click', (e) => {
    if (e.target === modalAddTraining) {
        modalAddTraining.classList.replace('showModal', 'hideModal');
    }
})

document.addEventListener('click', (e) => {
    if (e.target === modalTraining) {
        modalTraining.classList.replace('showModal', 'hideModal');
    }
})