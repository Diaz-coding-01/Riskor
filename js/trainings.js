'use strict';

let btnOpenAddTraining = document.getElementById('btnOpenAddTraining');
let btnCloseModal = document.querySelectorAll('.btnCloseModal');
let formAddTraining = document.getElementById('formAddTraining');
let formTrainings = document.getElementById('formTraining');
let modalAddTraining = document.querySelector('.containerModalAddTraining');
let modalTraining = document.querySelector('.containerModalTraining');
let containerTrainings = document.querySelector('.pnlContainer');
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
        if (modalClass === 'containerModalAddTraining') {
            formAddTraining.reset();
        } else if (modalClass === 'containerModalEmployees') {
            modalEmployees.querySelector('.bodyModalEmployees').innerHTML = '';
        } else if (modalClass === 'containerModalTraining') {
            formTrainings.reset();
        }
    });
});

containerTrainings.addEventListener('click', async (e) => {
    if (e.target.classList.contains('informationPnl')) {
        await loadTrainingData(e.target.dataset.id);
        modalTraining.classList.replace('hideModal', 'showModal');
    } else if (e.target.classList.contains('btnAddMembers')) {
        modalEmployees.classList.replace('hideModal', 'showModal');
        loadEmployeesTraining(e.target.closest('.informationPnl').dataset.id);
    }
})

btnOpenAddTraining.addEventListener('click', () => {
    modalAddTraining.classList.replace('hideModal', 'showModal');
})

formAddTraining.addEventListener('submit', (e) => {
    e.preventDefault();
})

document.addEventListener('click', (e) => {
    if (e.target === modalAddTraining) {
        modalAddTraining.classList.replace('showModal', 'hideModal');
    } else if (e.target === modalEmployees) {
        modalEmployees.classList.replace('showModal', 'hideModal');
    } else if (e.target === modalTraining) {
        modalTraining.classList.replace('showModal', 'hideModal');
    }
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
}

let loadTrainingData = async (id) => {
    try {
        let response = await fetch(`https://retoolapi.dev/NpDyIE/data/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let trainingData = await response.json();

        loadDataTrainingsModal(trainingData);
    } catch (error) {
        console.error('Error loading training data:', error);
    }
}

let loadDataTrainingsModal = (trainingData) => {
    let trainingName = document.getElementById('trainingName');
    let trainingDescription = document.getElementById('txtTrainingDescription');
    let trainingModality = document.getElementById('cmbTrainingModality');
    let trainingDate = document.getElementById('dtTrainingDate');
    let trainingTime = document.getElementById('tmTrainingDuration');
    let TrainingPlace = document.getElementById('txtTrainingPlace');

    trainingName.textContent = trainingData.trainingName;
    trainingDescription.value = trainingData.description;
    TrainingPlace.value = trainingData.place;
    trainingDate.value = new Date(trainingData.date).toLocaleDateString();
    trainingTime.value = trainingData.duration;
}

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
    })
    bodyModalEmployees.appendChild(fragment);
}

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
}

let insertTrainings = (data) => {
    let trainingContainer = document.querySelector('.pnlContainer');


    let fragment = document.createDocumentFragment();

    data.forEach(training => {
        let trainingElement = document.createElement('button');
        let trainingName = document.createElement('span');
        let containerMoreInfoTraining = document.createElement('div');
        let containerTrainingUsers = document.createElement('div');
        let userTraining1 = document.createElement('img');
        let userTraining2 = document.createElement('img');
        let userTraining3 = document.createElement('img');
        let arrowIcon = document.createElement('img');
        
        let addMembers = document.createElement('div');
        let addMembersIcon = document.createElement('img');

        trainingElement.setAttribute('data-id', training.id);

        trainingName.textContent = training.trainingName;

        let employeeData = JSON.parse(training.employees);

        addMembersIcon.setAttribute('src', '../media/addMembers.svg');
        userTraining1.setAttribute('src', employeeData[0].image || '../media/Frame 59.png');
        userTraining2.setAttribute('src', employeeData[1].image || '../media/Frame 59.png');
        userTraining3.setAttribute('src', employeeData[2].image || '../media/Frame 59.png');
        arrowIcon.src = "../media/grey_arrow_right.svg";

        trainingElement.classList.add('informationPnl');
        trainingElement.type = 'button';

        trainingName.classList.add('trainingName');

        containerMoreInfoTraining.classList.add('containerMoreInfoTraining');

        containerTrainingUsers.classList.add('containerTrainingUsers');

        userTraining1.classList.add('userTraining', 'user1');
        userTraining2.classList.add('userTraining', 'user2');
        userTraining3.classList.add('userTraining', 'user3');

        addMembers.classList.add('userTraining', 'btnAddMembers');
        addMembersIcon.classList.add('btnAddMembers');

        addMembers.appendChild(addMembersIcon);

        containerTrainingUsers.appendChild(addMembers);
        containerTrainingUsers.appendChild(userTraining1);
        containerTrainingUsers.appendChild(userTraining2);
        containerTrainingUsers.appendChild(userTraining3);

        containerMoreInfoTraining.appendChild(containerTrainingUsers);
        containerMoreInfoTraining.appendChild(arrowIcon);

        trainingElement.appendChild(trainingName);
        trainingElement.appendChild(containerMoreInfoTraining);

        fragment.appendChild(trainingElement);
    });

    trainingContainer.appendChild(fragment);
}