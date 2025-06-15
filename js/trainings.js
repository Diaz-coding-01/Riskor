'use strict';

let btnOpenAddTraining = document.getElementById('btnOpenAddTraining');
let formAddTraining = document.getElementById('formAddTraining');
let modalAddTraining = document.querySelector('.containerModalAddTraining');
let containerTrainings = document.querySelector('.pnlContainer');
let btnAddTraining = document.getElementById('btnAddTraining');
let modalEmployees = document.querySelector('.containerModalEmployees');
let btnNotifications = document.querySelector('.btnNotifications');
let modalNotifications = document.querySelector('.containerModalNotifications');

// Mostrar modal de empleados al hacer click en "Añadir empleados"
btnAddTraining.addEventListener('click', () => {
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

// Abrir modal para agregar capacitación
btnOpenAddTraining.addEventListener('click', () => {
    modalAddTraining.classList.replace('hideModal', 'showModal');
});

// Prevenir submit por defecto en el formulario de agregar capacitación
formAddTraining.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Cerrar modales al hacer click fuera del contenido
document.addEventListener('click', (e) => {
    if (e.target === modalAddTraining) {
        modalAddTraining.classList.replace('showModal', 'hideModal');
    } else if (e.target === modalEmployees) {
        modalEmployees.classList.replace('showModal', 'hideModal');
    } else if (e.target === modalNotifications){
        modalNotifications.classList.replace('showModal', 'hideModal');
    }
});

btnNotifications.addEventListener('click', () => {
    modalNotifications.classList.replace('hideModal', 'showModal');
})

/*Mandar a llamar a una api*/
document.addEventListener('DOMContentLoaded', () => {
    getTrainings();
});

let getTrainings = async () => {
    try {
        let response = await fetch('https://retoolapi.dev/NpDyIE/data');
        let data = await response.json();
        insertTrainings(data);
    } catch (error) {
        console.error('Error fetching trainings:', error);
    }
};

/*Insertar capacitaciones en el DOM*/
let insertTrainings = (data) => {
    let trainingContainer = document.querySelector('.pnlContainer');
    trainingContainer.innerHTML = '';
    let fragment = document.createDocumentFragment();

    data.forEach(training => {
        let trainingElement = document.createElement('a');
        let trainingName = document.createElement('span');
        let containerMoreInfoTraining = document.createElement('div');
        let containerTrainingUsers = document.createElement('div');
        let arrowIcon = document.createElement('img');

        trainingElement.setAttribute('href', `../pages/trainingAsistenceData.html?id=${training.id}`);

        trainingName.textContent = training.trainingName;

        let employeeData = [];
        try {
            employeeData = JSON.parse(training.employees);
        } catch (e) {
            employeeData = [];
        }

        // Solo muestra hasta 3 empleados
        employeeData.slice(0, 3).forEach((employee, idx) => {
            let userImg = document.createElement('img');
            userImg.setAttribute('src', employee.image || '../media/Frame 59.png');
            userImg.classList.add('userTraining', `user${idx+1}`);
            containerTrainingUsers.appendChild(userImg);
        });

        arrowIcon.src = "../media/grey_arrow_right.svg";

        trainingElement.classList.add('informationPnl');
        trainingName.classList.add('trainingName');
        containerMoreInfoTraining.classList.add('containerMoreInfoTraining');
        containerTrainingUsers.classList.add('containerTrainingUsers');

        containerMoreInfoTraining.appendChild(containerTrainingUsers);
        containerMoreInfoTraining.appendChild(arrowIcon);

        trainingElement.appendChild(trainingName);
        trainingElement.appendChild(containerMoreInfoTraining);

        fragment.appendChild(trainingElement);
    });

    trainingContainer.appendChild(fragment);
};