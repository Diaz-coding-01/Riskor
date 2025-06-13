'use strict';

let btnOpenModalEmployee = document.getElementById('btnOpenModalEmployee');
let modalEmployees = document.querySelector('.containerModalEmployees');

btnOpenModalEmployee.addEventListener('click', () => {
    modalEmployees.classList.replace('hideModal', 'showModal');
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('containerModal')) {
        e.target.classList.replace('showModal', 'hideModal');
    } else if (e.target.classList.contains('btnClose') || e.target.closest('.btnClose')) {
        let modalClass = e.target.dataset.modal || e.target.closest('.btnClose').dataset.modal;
        let modal = document.querySelector(`.${modalClass}`);
        modal.classList.replace('showModal', 'hideModal');
    }
});