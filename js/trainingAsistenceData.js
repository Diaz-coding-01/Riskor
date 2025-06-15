'use strict';

let btnOpenModalEmployee = document.getElementById('btnOpenModalEmployee');
let modalEmployees = document.querySelector('.containerModalEmployees');
let modalTabFilterEmployees = document.querySelector('.containerModalTabFilter')
let tabFilterEmployees = document.querySelector('.tabFilter');
let btnFilterEmployees = document.querySelector('.btnFilter');
const params = new URLSearchParams(window.location.search);
const trainingId = params.get('id')

btnOpenModalEmployee.addEventListener('click', () => {
    modalEmployees.classList.replace('hideModal', 'showModal');
    loadEmployeesTraining();
});

/* document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnClose') || e.target.closest('.btnClose')) {
        let modalClass = e.target.dataset.modal || e.target.closest('.btnClose').dataset.modal;
        let modal = document.querySelector(`.${modalClass}`);
        containerModalEmployees.classList.replace('showModal', 'hideModal');
        modal.classList.replace('showModal', 'hideModal');
    } else if ((modalTabFilterEmployees.classList.contains('showModal') && !e.target.closest('.tabFilter') && !e.target.closest('.btnFilter')) || e.target.classList.contains('containerModalTabFilter')) {
        modalTabFilterEmployees.classList.replace('showModal', 'hideModal');
        tabFilterEmployees.classList.replace('showModal', 'hideModal');
    }
}); */

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnClose') || e.target.classList.contains('containerModalEmployees') || e.target.closest('.btnClose')) {
        modalEmployees.classList.replace('showModal', 'hideModal');
    } else if ((modalTabFilterEmployees.classList.contains('showModal') && !e.target.closest('.tabFilter') && !e.target.closest('.btnFilter')) || e.target.classList.contains('containerModalTabFilter')) {
        modalTabFilterEmployees.classList.replace('showModal', 'hideModal');
        tabFilterEmployees.classList.replace('showModal', 'hideModal');
    }
});

btnFilterEmployees.addEventListener('click', () => {
    let rect = btnFilterEmployees.getBoundingClientRect();
    let styles = window.getComputedStyle(tabFilterEmployees);

    console.log(window.scrollX, rect.left, scrollY, rect.bottom, styles.width)
    tabFilterEmployees.style.top = `${rect.bottom + 20}px`;
    tabFilterEmployees.style.left = `${rect.left - parseFloat(styles.width) - 10}px`;

    modalTabFilterEmployees.classList.replace('hideModal', 'showModal');
    tabFilterEmployees.classList.replace('hideModal', 'showModal');
});


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

let loadEmployeesTraining = async () => {
    try {
        let response = await fetch(`https://retoolapi.dev/NpDyIE/data/${trainingId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let trainingData = await response.json();

        loadDataEmployeesModal(JSON.parse(trainingData.employees));
    } catch (error) {
        console.error('Error loading employees for training:', error);
    }
};
