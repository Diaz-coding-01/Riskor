const modal = document.getElementById("modalEvidencias");
const btnAbrir = document.getElementById("btnAgregar");
const cerrar = document.querySelector(".cerrar");
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

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Click en examinar
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
