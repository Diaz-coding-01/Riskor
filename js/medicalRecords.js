const registros = [
    {
        "DUI": "12345678-9",
        "Employee": "Edwin Díaz",
        "BloodType": "A+",
        "Status": "Active"
    },
    {
        "DUI": "12345678-8",
        "Employee": "Kevin Castro",
        "BloodType": "OH+",
        "Status": "Active"
    },
    {
        "DUI": "12345678-7",
        "Employee": "Jorge Pérez",
        "BloodType": "A-",
        "Status": "Active"
    },
    {
        "DUI": "12345678-9",
        "Employee": "Edwin Díaz",
        "BloodType": "A+",
        "Status": "Active"
    },
    {
        "DUI": "12345678-8",
        "Employee": "Kevin Castro",
        "BloodType": "OH+",
        "Status": "Active"
    },
    {
        "DUI": "12345678-7",
        "Employee": "Jorge Pérez",
        "BloodType": "A-",
        "Status": "Active"
    }
];

function loadRecords(records){
    let container = `
        <div class="pnlContainer"> <!--Contenedor de paneles/tarjetas / Posee los registros-->        
    `;
    records.forEach(record => {
        container += `
            <a href="#" id="recordEmployee" class="recordEmployee"> <!--Registro-->
                <div id="Employee" class="informationPnl"> <!--Empleado-->

                    <div class="image"> <!--Div dirigido a la imagen del empleado-->
                        <img src="../media/133866211092483860.jpg" alt="fotoEmpleado" class="pictureEmployee">
                    </div>

                    <div class="info"> 
                        <div class="name" style="font-size: 1.2em; margin-left: 0.3em;"> <!--Nombre del empleado (Título del panel)-->
                            ${record.Employee}
                        </div>
                        <div class="dataEmployee"> <!--Datos del empleado en la parte inferior del panel-->
                            <p>DUI: <b>${record.DUI}</b></p>
                            <p>Tipo de sangre: <b>${record.BloodType}</b></p>
                            <p>Estado: <b>${record.Status}</b></p>
                        </div>
                    </div>
                        
                    <div class="arrow"> <!--Flecha apuntando a la derecha como svg para no perder calidad-->
                        <img src="../media/grey_arrow_right.svg" alt="arrow.svg">
                    </div>
                </div>
            </a>
        `;
    });

    container += `
        </div>
    `;

    document.getElementById("recordEmployeContainer").innerHTML = container;
}

loadRecords(registros);