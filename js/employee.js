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
function addEmployee() {
    
}

// Cargar tabla al inicio
document.addEventListener('DOMContentLoaded', refreshTable);
/*Agregar el evento onclick*/
