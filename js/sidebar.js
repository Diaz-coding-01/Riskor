'use strict';

let nav = document.getElementById('sidebar');

/*Se añade dinamicamente el navbar*/
nav.innerHTML = `
    <nav class="sidebar">
        <header>
            <div class="superiorNav">
                    <img src="../media/sidebar/LogoRiskor.png" alt="Logo de Riskor">
            </div>
        </header>
        <hr class="hr-sidebar">
        <div class="menu-sidebar" style="margin-top: 10%;">
            <div class="menu">
                <div class="menu-link">
                    <li class="nav-link">
                            <a href="#" class="links activeNavbarItem">
                                <img src="../media/sidebar/Inicio.svg" alt="" class="navbar-icon">
                                <span class="text nav-text">Inicio</span>
                            </a> 
                    </li>
                    <li class="nav-link dropdown">
                        <a href="#" class="links dropdown-toggle">
                                <img src="../media/sidebar/Empleado.svg" alt="" class="navbar-icon" />
                                <span class="text nav-text">Empleados</span>
                        </a>
                    </li>
                    <li class="nav-link">
                            <a href="#" class="links activeNavbarItem">
                                 <img src="../media/sidebar/Accidentes.svg" alt="" class="navbar-icon">
                            <span class="text nav-text">Accidentes</span>
                            </a> 
                    </li>
                    <li class="nav-link">
                            <a href="#" class="links activeNavbarItem">
                            <img src="../media/sidebar/capacitaciones.svg" alt="" class="navbar-icon">
                            <span class="text nav-text">Capacitaciones</span>
                            </a> 
                    </li>
                    <li class="nav-link">
                            <a href="#" class="links activeNavbarItem">
                            <img src="../media/sidebar/permisos.svg" alt="" class="navbar-icon">
                            <span class="text nav-text">Permisos</span>
                            </a> 
                    </li>
                    <li class="nav-link">
                            <a href="#" class="links activeNavbarItem">
                            <img src="../media/sidebar/Incapacidad.svg" alt="" class="navbar-icon">
                            <span class="text nav-text">Incapacidad</span>
                            </a> 
                    </li>
                    <li class="nav-link">
                            <a href="#" class="links activeNavbarItem">
                            <img src="../media/sidebar/RegulacionesEmpresariales.svg" alt="" class="nav-icon">
                            <span class="text nav-text">Regulaciones...</span>
                            </a> 
                    </li>
                    <li class="nav-link">
                            <a href="#" class="links activeNavbarItem">
                            <img src="../media/sidebar/AreasEmpresa.svg" alt="" class="nav-icon">
                            <span class="text nav-text">Áreas </span>
                            </a> 
                    </li>
                    <li class="nav-link">
                            <a href="#" class="links activeNavbarItem">
                            <img src="../media/sidebar/Infraestructura.svg" alt="" class="nav-icon">
                            <span class="text nav-text">Dispositivos</span>
                            </a> 
                    </li>
                    <li class="nav-link">
                            <a href="#" class="links activeNavbarItem">
                            <img src="../media/sidebar/Configuracion.svg" alt="" class="nav-icon">
                            <span class="text nav-text">Configuración</span>
                            </a> 
                    </li>
                </div>
            </div>
        <div class="userContainer">
            <a href="" class="navbarUserItem">
                <img src="../media/sidebar/Usuario.svg" alt="" class="userIcon">
                <span class="navbarText navTextVisible">User</span>
            </a>
        </div>
    </nav>`;