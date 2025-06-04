'use strict';

let nav = document.getElementById('sidebar');

/*Se añade dinamicamente el navbar*/
nav.innerHTML = `
    <div class="navbarContainer navbarOpen">
                    <div class="navbar">
                        <div class="logoContainer widthOpenItems">
                            <img src="../media/sidebar/newRiskorLogo.svg" alt="" class="logo" id="logo">
                        </div>
                        <nav class="navbarItemsContainer widthOpenItems">
                            <div class="groupItems">
                                <a href="" style="margin-top: 0;" class="navbarItem">
                                    <img src="../media/sidebar/Inicio.svg" alt="" class="navbarIcon">
                                    <span class="navbarText navTextVisible">Inicio</span>
                                </a>
                                <div class="navbarItemEmployeesContainer">
                                    <a style="margin-top: 0;" class="navbarItem" href="">
                                        <img src="../media/sidebar/Empleado.svg" alt="" class="navbarIcon">
                                        <span class="navbarText navTextVisible">Empleados</span>
                                    </a>
                                    <button id="btnSubmenu" class="visible">
                                        <img src="../media/grey_arrow_right.svg" alt="" class="visible">
                                    </button>
                                </div>
                            </div>
                            <div class="visible submenuClose" id="submenu">
                                <div class="submenuItemsContainer">
                                    <div class="drawSubmenu">
                                        <a href="" class="submenuItem" style="right: -80px;">Comité</a>
                                    </div>
                                    <div class="drawSubmenu">
                                        <a href="" class="submenuItem" style="right: -120px;">Expedientes</a>
                                    </div>
                                </div>
                            </div>                    
                            <a href="" class="navbarItem">
                                <img src="../media/sidebar/Accidentes.svg" alt="" class="navbarIcon">
                                <span class="navbarText navTextVisible">Accidentes</span>
                            </a>
                            <a href="" class="navbarItem">
                                <img src="../media/sidebar/capacitaciones.svg" alt="" class="navbarIcon">
                                <span class="navbarText navTextVisible">Capacitaciones</span>
                            </a>
                            <a href="" class="navbarItem">
                                <img src="../media/sidebar/permisos.svg" alt="" class="navbarIcon">
                                <span class="navbarText navTextVisible">Permisos</span>
                            </a>
                            <a href="" class="navbarItem">
                                <img src="../media/sidebar/Incapacidad.svg" alt="" class="navbarIcon">
                                <span class="navbarText navTextVisible">Incapacidad</span>
                            </a>
                            <a href="" class="navbarItem">
                                <img src="../media/sidebar/RegulacionesEmpresariales.svg" alt="" class="navbarIcon">
                                <span class="navbarText navTextVisible">Regulaciones...</span>
                            </a>
                            <a href="" class="navbarItem">
                                <img src="../media/sidebar/AreasEmpresa.svg" alt="" class="navbarIcon">
                                <span class="navbarText navTextVisible">Áreas</span>
                            </a>
                            <a href="" class="navbarItem">
                                <img src="../media/sidebar/Infraestructura.svg" alt="" class="navbarIcon">
                                <span style="text-wrap: nowrap" class="navbarText navTextVisible">Dispositivos</span>
                            </a>
                            <a href="" class="navbarItem">
                                <img src="../media/sidebar/Configuracion.svg" alt="" class="navbarIcon">
                                <span class="navbarText navTextVisible">Configuración</span>
                            </a>
                        </nav>
                    </div>
                    <div class="userContainer userContainerOpen">
                        <a href="" class="navbarUserItem">
                            <img src="../media/sidebar/Usuario.svg" alt="" class="userIcon">
                            <span class="navbarText navTextVisible">User</span>
                        </a>
                    </div>
                </div>`;

const menuItems = document.querySelectorAll(".navbarItem");

/*Este codigo sirve para mostrar la barrita a la izquierda del item o apartado seleccionado*/
menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
    e.preventDefault();
    menuItems.forEach(el => el.classList.remove("activeNavbarItem"));
        item.classList.add("activeNavbarItem");   
    });
});

const btnSubMenu = document.getElementById('btnSubmenu');

/*Este codigo sirve para mostrar y ocultar los sub-apartados del apartado de empleados*/
btnSubMenu.addEventListener('click', () => {
    let submenu = document.getElementById('submenu');
    btnSubMenu.classList.toggle('rotate180');
    if(submenu.classList.contains('submenuClose')){
        submenu.classList.replace('submenuClose', 'submenuOpen');
    }
    else{
        submenu.classList.replace('submenuOpen', 'submenuClose');
    }
})
