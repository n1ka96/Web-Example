import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { UIDUtil } from '../utils/UIDUtil';

class Viewport {
    constructor(container) {

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('#AAAA00');

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
        this.camera.position.set(10, 5, 20);
        this.camera.up.set(0, 0, 1);
    
        this.dirLight = new THREE.DirectionalLight(0xffffff, 3);
        this.dirLight.position.set(0, 0, 1);
        this.scene.add(this.dirLight);
    
        this.axesHelper = new THREE.AxesHelper(5);
        this.scene.add(this.axesHelper);
    
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(this.renderer.domElement);
    
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.minDistance = 5;
        this.controls.maxDistance = 100;

        this.addEvent();

        this.render();
    }

    render = () => {
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.render();
    }

    addEvent() {
        window.addEventListener('resize', this.onWindowResize);
        this.controls.addEventListener('change', this.render); 
    }
}

export { Viewport };