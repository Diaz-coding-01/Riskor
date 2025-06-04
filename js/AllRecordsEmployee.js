'use strict';

document.addEventListener('DOMContentLoaded', refreshTable);

const employees = [ 
  {
    inicioT: '19-08-2025',
    finT: '19-08-2025',
    empleado: 'Edwin Díaz',
    estado: 'Activo',
  },
  {
    inicioT: '22-06-2025',
    finT: '22-07-2025',
    empleado: 'Edwin Díaz Henríquez Edwin Díaz Henríquez Edwin Díaz Henríquez', //Prueba de longitud de carácteres
    estado: 'Finalizado',
  },
  {
    inicioT: '22-06-2025',
    finT: '22-07-2025',
    empleado: 'Edwin Díaz',
    estado: 'Finalizado',
  }
];

function refreshTable() {
  const cuerpo = document.getElementById('recordEmployeeTableBody');
  cuerpo.innerHTML = '';
  employees.forEach((e) => {
    cuerpo.innerHTML += `
      <tr>
        <td>${e.inicioT}</td>
        <td>${e.finT}</td>
        <td>${e.empleado}</td>
        <td>${e.estado}</td>
        <td>
           <img src="../media/globalMedia/actions/read-Icon.svg" title="Ver">
            <img src="../media/globalMedia/actions/update-Icon.svg" title="Editar">
            <img src="../media/globalMedia/actions/delete-Icon.svg" title="Eliminar">
        </td>
      </tr>
    `;
  });
}