//
// Sketch.js
// 11/5/19
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Initialize variables
let fov = 75;
let sizeX = window.innerWidth;
let sizeY = window.innerHeight;
let aspect = sizeX / sizeY;
let near = 0.1;
let far = 1000;

// Setup scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas')});
renderer.setClearColor(0x2F4F4F);
renderer.setSize(sizeX, sizeY);
document.body.appendChild(renderer.domElement);

// Moving camera
camera.position.z = 3;

// Adding cube
let w = 1;
    h = 1;
    d = 1;
var geometry = new THREE.BoxGeometry(w, h, d);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Rendering
function render() {
    cube.rotation.y += .01;
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
render();
