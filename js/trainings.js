'use strict';

let btnOpenAddTraining = document.getElementById('btnOpenAddTraining');
let btnCloseAddTraining = document.getElementById('btnCloseAddTraining');
let formAddTraining = document.getElementById('formAddTraining');
let modal = document.querySelector('.containerModalAddTraining');

btnOpenAddTraining.addEventListener('click', () => {
    modal.classList.replace('containerModalAddTrainingClose', 'containerModalAddTrainingOpen');
})

btnCloseAddTraining.addEventListener('click', () => {
    modal.classList.replace('containerModalAddTrainingOpen', 'containerModalAddTrainingClose');
})

formAddTraining.addEventListener('submit', (e) => {
    e.preventDefault();
})

document.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.replace('containerModalAddTrainingOpen', 'containerModalAddTrainingClose');
    }
})