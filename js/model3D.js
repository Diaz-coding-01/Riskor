/*Modelo 3D*/
/*
// Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

// Cámara
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.5, 3);

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luces
scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1));
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(3, 2, 2);
scene.add(dirLight);

// Controles
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);
controls.update();

// Cargar texturas
const textureLoader = new THREE.TextureLoader();
const textures = {
  body: {
    map: textureLoader.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_BaseColor.png'),
    normalMap: textureLoader.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_Normal.png'),
    roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_Roughness.png')
  },
  eyes: {
    map: textureLoader.load('../media/female_quad_obj/female_texture/eyes/femal_low_M_eyes_BaseColor.png'),
    normalMap: textureLoader.load('../media/female_quad_obj/female_texture/eyes/femal_low_M_eyes_Normal.png'),
    roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/eyes/femal_low_M_eyes_Roughness.png')
  },
  eyesbrow: {
    map: textureLoader.load('../media/female_quad_obj/female_texture/eyebrow/femal_low_M_eyebrow_BaseColor.png'),
    normalMap: textureLoader.load('../media/female_quad_obj/female_texture/eyebrow/femal_low_M_eyebrow_Normal.png'),
    roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/eyebrow/femal_low_M_eyebrow_Roughness.png')
  },
  hair: {
    map: textureLoader.load('../media/female_quad_obj/female_texture/hair/femal_low_M_hair_BaseColor.png'),
    normalMap: textureLoader.load('../media/female_quad_obj/female_texture/hair/femal_low_M_hair_Normal.png'),
    roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/hair/femal_low_M_hair_Roughness.png')
  },
  pantsAndBra: {
    map: textureLoader.load('../media/female_quad_obj/female_texture/pantsAndBra/femal_low_M_pantsAndBra_BaseColor.png'),
    normalMap: textureLoader.load('../media/female_quad_obj/female_texture/pantsAndBra/femal_low_M_pantsAndBra_Normal.png'),
    roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/pantsAndBra/femal_low_M_pantsAndBra_Roughness.png')
  },
  teeth: {
    map: textureLoader.load('../media/female_quad_obj/female_texture/teeth/femal_low_M_teeth_BaseColor.png'),
    normalMap: textureLoader.load('../media/female_quad_obj/female_texture/teeth/femal_low_M_teeth_Normal.png'),
    roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/teeth/femal_low_M_teeth_Roughness.png')
  }
};

// Crear materiales
const bodyMaterial = new THREE.MeshStandardMaterial({ ...textures.body, metalness: 0.2, roughness: 1 });
const eyesMaterial = new THREE.MeshStandardMaterial({ ...textures.eyes, metalness: 0.1, roughness: 1 });
const eyesbrowMaterial = new THREE.MeshStandardMaterial({ ...textures.eyesbrow, metalness: 0.1, roughness: 1 });
const hairMaterial = new THREE.MeshStandardMaterial({ ...textures.hair, metalness: 0.1, roughness: 1 });
const pantsAnBraMaterial = new THREE.MeshStandardMaterial({ ...textures.pantsAndBra, metalness: 0.1, roughness: 1 });
const teethMaterial = new THREE.MeshStandardMaterial({ ...textures.teeth, metalness: 0.1, roughness: 1 });

// Cargar modelo obj
const loader = new THREE.OBJLoader();
loader.load('../media/female_quad_obj/female_quad_obj.obj', function (object) {
  object.scale.set(0.01, 0.01, 0.01);

  object.traverse((child) => {
    if (child.isMesh) {
      const name = child.name.toLowerCase();

      if (name.includes("body")) child.material = bodyMaterial;
      else if (name.includes("eyebrow")) child.material = eyesbrowMaterial;
      else if (name.includes("eyes")) child.material = eyesMaterial;
      else if (name.includes("hair")) child.material = hairMaterial;
      else if (name.includes("pantsandbra")) child.material = pantsAnBraMaterial;
      else if (name.includes("teeth")) child.material = teethMaterial;
    }
  });

  scene.add(object);
}, undefined, function (error) {
  console.error("Error cargando OBJ:", error);
});

// Animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Ajuste al redimensionar
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
*/
import * as THREE from 'https://unpkg.com/three@0.160.1/build/three.module.js';
import { OBJLoader } from 'https://unpkg.com/three@0.160.1/examples/jsm/loaders/OBJLoader.js';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('modeloBody3D');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);


  const textureLoader = new THREE.TextureLoader();
  const textures = {
    body: {
      map: textureLoader.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_BaseColor.png'),
      normalMap: textureLoader.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_Normal.png'),
      roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_Roughness.png')
    },
    eyes: {
      map: textureLoader.load('../media/female_quad_obj/female_texture/eyes/femal_low_M_eyes_BaseColor.png'),
      normalMap: textureLoader.load('../media/female_quad_obj/female_texture/eyes/femal_low_M_eyes_Normal.png'),
      roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/eyes/femal_low_M_eyes_Roughness.png')
    },
    eyesbrow: {
      map: textureLoader.load('../media/female_quad_obj/female_texture/eyebrow/femal_low_M_eyebrow_BaseColor.png'),
      normalMap: textureLoader.load('../media/female_quad_obj/female_texture/eyebrow/femal_low_M_eyebrow_Normal.png'),
      roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/eyebrow/femal_low_M_eyebrow_Roughness.png')
    },
    hair: {
      map: textureLoader.load('../media/female_quad_obj/female_texture/hair/femal_low_M_hair_BaseColor.png'),
      normalMap: textureLoader.load('../media/female_quad_obj/female_texture/hair/femal_low_M_hair_Normal.png'),
      roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/hair/femal_low_M_hair_Roughness.png')
    },
    pantsAndBra: {
      map: textureLoader.load('../media/female_quad_obj/female_texture/pant and bra/femal_low_M_pant_and_bra_BaseColor.png'),
      normalMap: textureLoader.load('../media/female_quad_obj/female_texture/pant and bra/femal_low_M_pant_and_bra_Normal.png'),
      roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/pant and bra/femal_low_M_pant_and_bra_Roughness.png')
    },
    teeth: {
      map: textureLoader.load('../media/female_quad_obj/female_texture/teeth/femal_low_M_teeth_BaseColor.png'),
      normalMap: textureLoader.load('../media/female_quad_obj/female_texture/teeth/femal_low_M_teeth_Normal.png'),
      roughnessMap: textureLoader.load('../media/female_quad_obj/female_texture/teeth/femal_low_M_teeth_Roughness.png')
    }
  };
//Cargar Materiales
  const bodyMaterial = new THREE.MeshStandardMaterial({ ...textures.body, metalness: 0.2, roughness: 1 });
  const eyesMaterial = new THREE.MeshStandardMaterial({ ...textures.eyes, metalness: 0.1, roughness: 1 });
  const eyesbrowMaterial = new THREE.MeshStandardMaterial({ ...textures.eyesbrow, metalness: 0.1, roughness: 1 });
  const hairMaterial = new THREE.MeshStandardMaterial({ ...textures.hair, metalness: 0.1, roughness: 1 });
  const pantsAnBraMaterial = new THREE.MeshStandardMaterial({ ...textures.pantsAndBra, metalness: 0.1, roughness: 1 });
  const teethMaterial = new THREE.MeshStandardMaterial({ ...textures.teeth, metalness: 0.1, roughness: 1 });

const objLoader = new OBJLoader();
  objLoader.setPath('../media/female_quad_obj/female_quad_obj.obj'); // Ruta de la carpeta donde está el .obj

  objLoader.load('../media/female_quad_obj/female_quad_obj.obj', (object) => {
    object.traverse((child) => {
      if (child instanceof THREE.mesh.mview) {
  switch (child.name.toLowerCase()) {
    case 'body':
      child.material = bodyMaterial;
      break;
    case 'eyes':
      child.material = eyesMaterial;
      break;
    case 'eyebrow':
      child.material = eyesbrowMaterial;
      break;
    case 'hair':
      child.material = hairMaterial;
      break;
    case 'PantsAndBra':
      child.material = pantsAnBraMaterial;
      break;
    case 'teeth' :
      child.material = teethMaterial;
      break;
      default:
      child.material = bodyMaterial;
  }
}

  });

    object.scale.set(0.5, 0.5, 0.5);
    scene.add(object);
    animate();
  });

  camera.position.z = 2;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
});
