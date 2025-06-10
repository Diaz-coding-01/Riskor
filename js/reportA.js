/*Modelo 3D*/
import * as THREE from 'https://unpkg.com/three@0.160.1/build/three.module.js';
import { OBJLoader } from 'https://unpkg.com/three@0.160.1/examples/jsm/loaders/OBJLoader.js';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('modeloBody3D');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  camera.position.z = 5;

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1).normalize();
  scene.add(light);

  const textureLoader = new THREE.TextureLoader();

  const createMaterial = (basePath, name) => new THREE.MeshStandardMaterial({
    map: textureLoader.load(`${basePath}/${name}_BaseColor.png`),
    normalMap: textureLoader.load(`${basePath}/${name}_Normal.png`),
    roughnessMap: textureLoader.load(`${basePath}/${name}_Roughness.png`),
    metalnessMap: textureLoader.load(`${basePath}/${name}_Metallic.png`),
    displacementMap: textureLoader.load(`${basePath}/${name}_Height.png`),
    displacementScale: 0.05,
  });

  const materials = {
    body: createMaterial("../media/female_quad_obj/female_texture/body", "femal_low_M_body"),
    eyebrow: createMaterial("../media/female_quad_obj/female_texture/eyebrow", "femal_low_M_eyebrow"),
    eyes: createMaterial("../media/female_quad_obj/female_texture/eyes", "femal_low_M_eyes"),
    hair: createMaterial("../media/female_quad_obj/female_texture/hair", "femal_low_M_hair"),
    pantAndBra: createMaterial("../media/female_quad_obj/female_texture/pant and bra", "femal_low_M_pant_and_bra"),
    teeth: createMaterial("../media/female_quad_obj/female_texture/teeth", "femal_low_M_teeth"),
  };

  const loader = new OBJLoader();
  loader.load('../media/female_quad_obj/female_quad_obj.obj',
    function (obj) {
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const name = child.name.toLowerCase();
          if (name.includes("eyebrow")) {
            child.material = materials.eyebrow;
          } else if (name.includes("eye")) {
            child.material = materials.eyes;
          } else if (name.includes("hair")) {
            child.material = materials.hair;
          } else if (name.includes("pant") || name.includes("bra")) {
            child.material = materials.pantAndBra;
          } else if (name.includes("teeth")) {
            child.material = materials.teeth;
          } else {
            child.material = materials.body;
          }
        }
      });

      obj.scale.set(1, 1, 1);
      scene.add(obj);
    },
    (xhr) => {
      console.log(`Modelo cargado: ${xhr.loaded / xhr.total * 100}%`);
    },
    (error) => {
      console.error('Error al cargar el modelo:', error);
    }
  );

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
});



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

