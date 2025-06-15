import * as THREE from 'https://esm.sh/three@0.160.1';
import { OBJLoader } from 'https://esm.sh/three@0.160.1/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'https://esm.sh/three@0.160.1/examples/jsm/controls/OrbitControls.js';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('modeloBody3D');

  // Escena
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  // Cámara
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 1.5, 3);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

// Luces: iluminación más intensa y balanceada
scene.add(new THREE.AmbientLight(0xffffff, 1.2)); // Luz ambiente más fuerte

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
dirLight.position.set(5, 10, 7);
dirLight.castShadow = true;
dirLight.shadow.camera.top = 10;
dirLight.shadow.camera.bottom = -10;
dirLight.shadow.camera.left = -10;
dirLight.shadow.camera.right = 10;
scene.add(dirLight);

// Luz de relleno para iluminar frontalmente
const fillLight = new THREE.PointLight(0xffffff, 0.8);
fillLight.position.set(0, 2, 3); // Luz frontal
scene.add(fillLight);

  // Controles
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1, 0);
  controls.update();

  // Carga de texturas
  const loaderTex = new THREE.TextureLoader();
  const textures = {
    body: {
      map: loaderTex.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_BaseColor.png'),
      normalMap: loaderTex.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_Normal.png'),
      roughnessMap: loaderTex.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_Roughness.png'),
      metalnessMap: loaderTex.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_Metallic.png'),
      heightMap: loaderTex.load('../media/female_quad_obj/female_texture/body/femal_low_M_body_Height.png'),
    },
    eyebrows: {
      map: loaderTex.load('../media/female_quad_obj/female_texture/eyebrow/femal_low_M_eyebrow_BaseColor.png'),
      normalMap: loaderTex.load('../media/female_quad_obj/female_texture/eyebrow/femal_low_M_eyebrow_Normal.png'),
      roughnessMap: loaderTex.load('../media/female_quad_obj/female_texture/eyebrow/femal_low_M_eyebrow_Roughness.png'),
      metalnessMap: loaderTex.load('../media/female_quad_obj/female_texture/eyebrow/femal_low_M_eyebrow_Metallic.png'),
    },
    eyes: {
      map: loaderTex.load('../media/female_quad_obj/female_texture/eyes/femal_low_M_eyes_BaseColor.png'),
      normalMap: loaderTex.load('../media/female_quad_obj/female_texture/eyes/femal_low_M_eyes_Normal.png'),
      roughnessMap: loaderTex.load('../media/female_quad_obj/female_texture/eyes/femal_low_M_eyes_Roughness.png'),
      metalnessMap: loaderTex.load('../media/female_quad_obj/female_texture/eyes/femal_low_M_eyes_Metallic.png'),
    },
    hair: {
      map: loaderTex.load('../media/female_quad_obj/female_texture/hair/femal_low_M_hair_BaseColor.png'),
      normalMap: loaderTex.load('../media/female_quad_obj/female_texture/hair/femal_low_M_hair_Normal.png'),
      roughnessMap: loaderTex.load('../media/female_quad_obj/female_texture/hair/femal_low_M_hair_Roughness.png'),
      metalnessMap: loaderTex.load('../media/female_quad_obj/female_texture/hair/femal_low_M_hair_Metallic.png'),
    },
    pantsAndBra: {
      map: loaderTex.load('../media/female_quad_obj/female_texture/pant and bra/femal_low_M_pant_and_bra_BaseColor.png'),
      normalMap: loaderTex.load('../media/female_quad_obj/female_texture/pant and bra/femal_low_M_pant_and_bra_Normal.png'),
      roughnessMap: loaderTex.load('../media/female_quad_obj/female_texture/pant and bra/femal_low_M_pant_and_bra_Roughness.png'),
      metalnessMap: loaderTex.load('../media/female_quad_obj/female_texture/pant and bra/femal_low_M_pant_and_bra_Metallic.png'),
    },
    teeth: {
      map: loaderTex.load('../media/female_quad_obj/female_texture/teeth/femal_low_M_teeth_BaseColor.png'),
      normalMap: loaderTex.load('../media/female_quad_obj/female_texture/teeth/femal_low_M_teeth_Normal.png'),
      roughnessMap: loaderTex.load('../media/female_quad_obj/female_texture/teeth/femal_low_M_teeth_Roughness.png'),
      metalnessMap: loaderTex.load('../media/female_quad_obj/female_texture/teeth/femal_low_M_teeth_Metallic.png'),
    },
  };

  Object.values(textures).forEach(group => {
    Object.values(group).forEach(tex => {
      tex.encoding = THREE.sRGBEncoding;
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    });
  });

  // Materiales
  const materialMap = {
    body: new THREE.MeshStandardMaterial({
      map: textures.body.map,
      normalMap: textures.body.normalMap,
      roughnessMap: textures.body.roughnessMap,
      metalnessMap: textures.body.metalnessMap,
      displacementMap: textures.body.heightMap,
      displacementScale: 0.015,
      metalness: 0.02,
      roughness: 0.2,
    }),
    eyebrows: new THREE.MeshStandardMaterial({
      map: textures.eyebrows.map,
      normalMap: textures.eyebrows.normalMap,
      roughnessMap: textures.eyebrows.roughnessMap,
      metalnessMap: textures.eyebrows.metalnessMap,
      metalness: 0.05,
      roughness: 0.8,
    }),
    eyes: new THREE.MeshStandardMaterial({
      map: textures.eyes.map,
      normalMap: textures.eyes.normalMap,
      roughnessMap: textures.eyes.roughnessMap,
      metalnessMap: textures.eyes.metalnessMap,
      metalness: 0.5,
      roughness: 0.3,
    }),
    hair: new THREE.MeshStandardMaterial({
      map: textures.hair.map,
      normalMap: textures.hair.normalMap,
      roughnessMap: textures.hair.roughnessMap,
      metalnessMap: textures.hair.metalnessMap,
      metalness: 0.2,
      roughness: 0.6,
    }),
    pantsAndBra: new THREE.MeshStandardMaterial({
      map: textures.pantsAndBra.map,
      normalMap: textures.pantsAndBra.normalMap,
      roughnessMap: textures.pantsAndBra.roughnessMap,
      metalnessMap: textures.pantsAndBra.metalnessMap,
      metalness: 0.15,
      roughness: 0.4,
    }),
    teeth: new THREE.MeshStandardMaterial({
      map: textures.teeth.map,
      normalMap: textures.teeth.normalMap,
      roughnessMap: textures.teeth.roughnessMap,
      metalnessMap: textures.teeth.metalnessMap,
      metalness: 0.05,
      roughness: 0.9,
    }),
  };

  // Cargar modelo
  const objLoader = new OBJLoader();
  objLoader.load(
    '../media/female_quad_obj/female_quad_obj.obj',
    (object) => {
      object.scale.set(0.01, 0.01, 0.01);

      object.traverse((child) => {
        if (child.isMesh) {
          const key = child.name.toLowerCase();
          console.log('Mesh name:', child.name); // Para depuración
          if (key.includes('body')) child.material = materialMap.body;
          else if (key.includes('eyebrow')) child.material = materialMap.eyebrows;
          else if (key.includes('eye')) child.material = materialMap.eyes;
          else if (key.includes('hair')) child.material = materialMap.hair;
          else if (key.includes('pant') || key.includes('bra')) child.material = materialMap.pantsAndBra;
          else if (key.includes('teeth')) child.material = materialMap.teeth;
          else child.material = materialMap.body;

          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(object);
      animate();
    },
    undefined,
    (err) => console.error('Error cargando OBJ:', err)
  );

  // Animación
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
});
