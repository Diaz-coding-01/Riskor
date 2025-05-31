'use strict'
// Cargar tabla al inicio
document.addEventListener('DOMContentLoaded', refreshTable);
//Busqueda del empleado
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchEmployee').addEventListener('click', searchEmployee);
});

/*Agregar el evento onclick*/

const employees = [ /*Variable que registra los empleados*/
  {
    dui: '12345678-9',
    nombre: 'José Maximiliano Fernández',
    correo: 'jose@correo.com',
    cargo: 'Gerente',
  },
  {
    dui: '12345678-8',
    nombre: 'Fernando Ignacio Mendoza',
    correo: 'fer.m@correo.com',
    cargo: 'Contador',
  },
  {
    dui: '12345678-7',
    nombre: 'Isidora Valentina María Morales',
    correo: 'v.maria@correo.com',
    cargo: 'Contador',
  },
];
/*Datos cargados de la tabla*/
function refreshTable() {
  const cuerpo = document.getElementById('employeeTableBody');
  cuerpo.innerHTML = '';
  employees.forEach((e) => {
    cuerpo.innerHTML += `
      <tr>
        <td>${e.dui}</td>
        <td>${e.nombre}</td>
        <td>${e.correo}</td>
        <td>${e.cargo}</td>
        <td>
           <img src="../media/famicons_eye-sharp.svg" title="Ver">
            <img src="../media/ri_edit-fill.svg" title="Editar">
            <img src="../media/Vector.svg" title="Eliminar">
        </td>
      </tr>
    `;
  });
}
/*Función de busqueda segun los registros de la tabla*/
function searchEmployee() {
  const texto = document.getElementById('txtSearch').value.toLowerCase();
  const cuerpo = document.getElementById('employeeTableBody');
  cuerpo.innerHTML = '';
  employees
    .filter((e) => e.nombre.toLowerCase().includes(texto))
    .forEach((e) => {
      cuerpo.innerHTML += `
        <tr>
          <td>${e.dui}</td>
          <td>${e.nombre}</td>
          <td>${e.correo}</td>
          <td>${e.cargo}</td>
          <td>
            <img src="../media/famicons_eye-sharp.svg" title="Ver">
            <img src="../media/ri_edit-fill.svg" title="Editar">
            <img src="../media/Vector.svg" title="Eliminar">
          </td>
        </tr>
      `;
    });
}
/*Función para agregar un nuevo empleado*/

let addEmployee = document.getElementById('addEmployee');
let closeAddEmployee = document.getElementById('closeAddEmployee');
let formAddEmployee = document.getElementById('formAddEmployee');
let modal = document.querySelector('.containerModalAddEmployee');

addEmployee.addEventListener('click', () => {
  modal.classList.replace('containerModalAddEmployeeClose' , 'containerModalAddEmployeeOpen')
})

closeAddEmployee.addEventListener('click', () =>{
  modal.classList.replace('containerModalAddEmployeeOpen', 'containerModalAddEmployeeClose');
})

formAddEmployee.addEventListener('submit', (e) => {
  e.preventDefault();
})
document.addEventListener('click', (e) => {
  if (e.target === modal){
    modal.classList.replace('containerModalAddEmployeeOpen' , 'containerModalAddEmployeeClose')
  }
})
/*Función para agregar foto, esto abrira el explorador de archivos*/
const inputFoto = document.getElementById("fotoEmpleado");
const btnAgregarFoto = document.getElementById("btnAgregarFoto");

btnAgregarFoto.addEventListener("click", () => {
  inputFoto.click();
});

inputFoto.addEventListener("change", () => {
  const file = inputFoto.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewFoto.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
/*Función para al momento de ingresar el nombre y apellido se detalle el nombre completo */
const nombreInput = document.getElementById("txtAddEmployeeName");
const apellidoInput = document.getElementById("txtAddEmployeeLastName");
const fullNameHeader = document.getElementById("FullName");

// Función para actualizar el título superior
function actualizarNombreCompleto() {
    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    fullNameHeader.textContent = (nombre || apellido) ? `${nombre} ${apellido}` : "Empleado";
}
nombreInput.addEventListener("input", actualizarNombreCompleto);
apellidoInput.addEventListener("input", actualizarNombreCompleto);
