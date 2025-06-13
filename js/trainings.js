'use strict';

let btnOpenAddTraining = document.getElementById('btnOpenAddTraining');
let formAddTraining = document.getElementById('formAddTraining');
let modalAddTraining = document.querySelector('.containerModalAddTraining');
let containerTrainings = document.querySelector('.pnlContainer');
let btnAddTraining = document.getElementById('btnAddTraining');
let modalEmployees = document.querySelector('.containerModalEmployees');

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
    }
});

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

let loadDataEmployeesModal = (employees) => {
    let bodyModalEmployees = document.querySelector('.bodyModalEmployees');
    let fragment = document.createDocumentFragment();
    bodyModalEmployees.innerHTML = ''; // Clear previous content

    employees.forEach(employee => {
        let employeeElement = document.createElement('div');
        let containerEmployeeImage = document.createElement('div');
        let employeeImage = document.createElement('img');
        let containerEmployeeName = document.createElement('div');
        let employeeName = document.createElement('span');
        let containerCh = document.createElement('div');
        let chEmployee = document.createElement('input');

        employeeImage.setAttribute('src', employee.image || '../media/Frame 59.png');
        employeeName.textContent = employee.name || 'Unknown Employee';

        employeeElement.classList.add('employee');
        containerEmployeeImage.classList.add('containerEmployeeImage');
        employeeImage.classList.add('employeeImage');
        chEmployee.setAttribute('type', 'checkbox');
        chEmployee.classList.add('chEmployee', 'checks');
        chEmployee.style.cssText = 'border-radius: 50%; transform: scale(1.4);';
        containerEmployeeName.style.flex = '1';

        containerEmployeeName.appendChild(employeeName);
        containerEmployeeImage.appendChild(employeeImage);
        containerCh.appendChild(chEmployee);
        employeeElement.appendChild(containerEmployeeImage);
        employeeElement.appendChild(containerEmployeeName);
        employeeElement.appendChild(containerCh);

        fragment.appendChild(employeeElement);
    });
    bodyModalEmployees.appendChild(fragment);
};

let loadEmployeesTraining = async (id) => {
    try {
        let response = await fetch(`https://retoolapi.dev/NpDyIE/data/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let trainingData = await response.json();

        loadDataEmployeesModal(JSON.parse(trainingData.employees));    
    } catch (error) {
        console.error('Error loading employees for training:', error);
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

        trainingElement.setAttribute('href', '../pages/trainingAsistenceData.html');
        trainingElement.setAttribute('data-id', training.id);

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