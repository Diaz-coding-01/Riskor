document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalEvidencias");
  const btnAbrir = document.getElementById("btnAgregar");
  const cerrar = document.querySelector(".closeAddAccidente"); 
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");
  const examinarBtn = document.getElementById("examinarBtn");

  // Abrir modal
  btnAbrir.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Cerrar modal
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar al hacer clic fuera del modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Click en "Examinar"
  examinarBtn.addEventListener("click", () => {
    fileInput.click();
  });

  // Drag & Drop
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#6366f1";
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.style.borderColor = "#ccc";
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    alert(`Has subido: ${files.length} archivo(s)`);
  });
});
/*Función para que el examininador de archivos pueda agregar las imagenes de evidencia*/
fileInput.addEventListener("change", (e) => {
  const files = e.target.files;
  const previewContainer = document.getElementById("previewContainer");
  previewContainer.innerHTML = ""; 
  for (const file of files) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const item = document.createElement("div");
      item.className = "preview-item";

      item.innerHTML = `
        <img src="${event.target.result}" alt="${file.name}" />
        <span>${file.name}</span>
      `;

      previewContainer.appendChild(item);
    };
    reader.readAsDataURL(file);
  }
});
