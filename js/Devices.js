document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.pnlContainer');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.style.display = 'none');
      tab.classList.add('active');
      const target = tab.getAttribute('data-tab');
      const panel = document.querySelector(`.pnlContainer[data-tab-content="${target}"]`);
      if (panel) panel.style.display = '';
    });
  });
});

/*===== Funcion para abrir modal de "ver datos" ======*/
const modal = document.getElementById("ViewDevices");
const btnClose = document.getElementById("btnClose");

/*=====  Contenedor donde se crean las tarjetas ======*/
const contenedorTarjetas = document.querySelector('.cardContainer');

contenedorTarjetas.addEventListener('click', (e) => {
  if (e.target.classList.contains('btnDetalles')) {
    modal.classList.replace("containerModalClose", "containerModal");
  }
});

btnClose.addEventListener("click", () => {
  modal.classList.replace("containerModal", "containerModalClose");
});

/*===== Funciones para abrir modal de añadir dispositivos ======*/
const AddModal = document.getElementById("AddDevices");
const AddBtnClose = document.getElementById("btnCloseAdd");
const AddBtnDevices = document.getElementById("NewDecives");

AddBtnDevices.addEventListener("click", () => {
  AddModal.classList.replace("containerModalClose", "containerModal");
});

AddBtnClose.addEventListener("click", () => {
  AddModal.classList.replace("containerModal", "containerModalClose");
});

/*===== Datos y carga de tarjetas ======*/
const dispositivos = [
  {
    titulo: 'Botiquín 12',
    fecha: '21-05-2025',
    categoriaId: 1
  },
  {
    titulo: 'Caja N°9',
    fecha: '5-02-2025',
    categoriaId: 2
  },
  {
    titulo: 'Set de chalecos 1',
    fecha: '19-08-2025',
    categoriaId: 1
  },
  {
    titulo: 'Set de chalecos 1',
    fecha: '19-08-2025',
    categoriaId: 1
  },
  {
    titulo: 'Set de chalecos 1',
    fecha: '19-08-2025',
    categoriaId: 1
  },
  {
    titulo: 'Botiquín 12',
    fecha: '21-05-2025',
    categoriaId: 1
  },
  {
    titulo: 'Caja N°9',
    fecha: '5-02-2025',
    categoriaId: 2
  },
  {
    titulo: 'Set de chalecos 1',
    fecha: '19-08-2025',
    categoriaId: 1
  },
  {
    titulo: 'Set de chalecos 1',
    fecha: '19-08-2025',
    categoriaId: 1
  },
  {
    titulo: 'Set de chalecos 1',
    fecha: '19-08-2025',
    categoriaId: 1
  },
];

const iconosPorId = {
  1: '../media/Health.svg',
  2: '../media/systems.svg'
};

function cargarTarjetas() {
  const pnlTodos = document.querySelector('[data-tab-content="todos"]');
  const pnlSalud = document.querySelector('[data-tab-content="Salud"]');
  const pnlSistemas = document.querySelector('[data-tab-content="Sistemas"]');

  pnlTodos.innerHTML = '';
  pnlSalud.innerHTML = '';
  pnlSistemas.innerHTML = '';

  dispositivos.forEach(device => {
    const icono = iconosPorId[device.categoriaId] || '';
    const categoriaNombre = device.categoriaId === 1 ? 'Salud' : device.categoriaId === 2 ? 'Sistemas' : 'Otro';

    const tarjeta = `
        <div class="card">
          <div class="cardHeader">
            <h3>${device.titulo}</h3>
            <div class="icon"><img src="${icono}" alt="Icono"></div>
          </div>
          <div class="cardBody">
            <p class="info"><span class="label">Instalado:</span> <span class="date">${device.fecha}</span></p>
          </div>
          <div class="cardFooter">
            <button class="btnDetalles">Detalles</button>
          </div>
        </div>
      `;

    pnlTodos.innerHTML += tarjeta;
    if (categoriaNombre === 'Salud') pnlSalud.innerHTML += tarjeta;
    else if (categoriaNombre === 'Sistemas') pnlSistemas.innerHTML += tarjeta;
  });
}

cargarTarjetas();