'use strict';

document.addEventListener('DOMContentLoaded', refreshTable);

const Devices = [ 
  {
    FechaM: '19-08-2025',
    Descripcion: 'Revisión por protocolo',
    empleado: 'Vladimir Gómez'
  },
  {
    FechaM: '19-08-2025',
    Descripcion: 'Revisión por reporte de falsos',
    empleado: 'Christian Vladimir Contreras Gómez' //Prueba de longitud de carácteres
  },
  {
     FechaM: '19-08-2025',
    Descripcion: 'Revisión por protocolo',
    empleado: 'Christian Vladimir Contreras Gómez'
  },
  {
     FechaM: '19-08-2025',
    Descripcion: 'Revisión por protocolo',
    empleado: 'Christian Vladimir Contreras Gómez'
  }
];

function refreshTable() {
  const cuerpo = document.getElementById('DeviceMaintenanceTableBody');
  cuerpo.innerHTML = '';
  Devices.forEach((e) => {
    cuerpo.innerHTML += `
      <tr>
        <td>${e.FechaM}</td>
        <td>${e.Descripcion}</td>
        <td>${e.empleado}</td>
        <td>
           <img src="../media/globalMedia/actions/read-Icon.svg" title="Ver">
            <img src="../media/globalMedia/actions/update-Icon.svg" title="Editar">
            <img src="../media/globalMedia/actions/delete-Icon.svg" title="Eliminar">
        </td>
      </tr>
    `;
  });
}

/*===== Funciones para abrir modal de añadir Mantenimiento ======*/
const AddModal = document.getElementById("AddDeviceMaintenance");
const AddBtnClose = document.getElementById("btnClose");
const AddBtnDevices = document.getElementById("NewDeviceMaintenance");

AddBtnDevices.addEventListener("click", () => {
  AddModal.classList.replace("containerModalClose", "containerModal");
});

AddBtnClose.addEventListener("click", () => {
  AddModal.classList.replace("containerModal", "containerModalClose");
});