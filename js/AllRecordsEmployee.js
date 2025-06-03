'use strict';

document.addEventListener('DOMContentLoaded', refreshTable);

const employees = [ 
  {
    inicioT: '19-08-2025',
    finT: '19-08-2025',
    empleado: 'Edwin Adrián Díaz',
    estado: 'Activo',
  },
  {
    inicioT: '22-06-2025',
    finT: '22-07-2025',
    empleado: 'Edwin Adrián Díaz',
    estado: 'Finalizado',
  },
  {
    inicioT: '22-06-2025',
    finT: '22-07-2025',
    empleado: 'Edwin Adrián Díaz',
    estado: 'Finalizado',
  },
  
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
           <img src="../media/famicons_eye-sharp.svg" title="Ver">
            <img src="../media/ri_edit-fill.svg" title="Editar">
            <img src="../media/Vector.svg" title="Eliminar">
        </td>
      </tr>
    `;
  });
}