import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, scene, renderer, labelRenderer;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 200 );
    camera.position.set( 10, 5, 20 );
    camera.up.set(0, 0, 1);
    scene = new THREE.Scene();

    const dirLight = new THREE.DirectionalLight( 0xffffff, 3 );
    dirLight.position.set( 0, 0, 1 );
    dirLight.layers.enableAll();
    scene.add( dirLight );

    const axesHelper = new THREE.AxesHelper( 5 );
    axesHelper.layers.enableAll();
    scene.add( axesHelper );

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = 5;
    controls.maxDistance = 100;
    window.addEventListener( 'resize', onWindowResize );
    controls.addEventListener('change', animate);

    // Api test
    const box1 = new THREE.Box2();
    const box2 = new THREE.Box2(new THREE.Vector2(-1, -1), new THREE.Vector2(3, 3));
    console.log(box2.distanceToPoint(new THREE.Vector2(0, 0)));
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    // requestAnimationFrame( animate );
    renderer.render( scene, camera );
}