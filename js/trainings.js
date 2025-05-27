'use strict';

let btnOpenAddTraining = document.getElementById('btnOpenAddTraining');
let btnCloseAddTraining = document.getElementById('btnCloseAddTraining');
let formAddTraining = document.getElementById('formAddTraining');

btnOpenAddTraining.addEventListener('click', () => {
    let modal = document.querySelector('.containerModalAddTraining');
    modal.classList.replace('containerModalAddTrainingClose', 'containerModalAddTrainingOpen');
})

btnCloseAddTraining.addEventListener('click', () => {
    let modal = document.querySelector('.containerModalAddTraining');
    modal.classList.replace('containerModalAddTrainingOpen', 'containerModalAddTrainingClose');
})

formAddTraining.addEventListener('submit', (e) => {
    e.preventDefault();
})