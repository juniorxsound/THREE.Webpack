import {
    ShaderMaterial,
    SphereBufferGeometry,
    Mesh,
    Points,
    Clock,
    Scene,
    Vector2,
    WebGLRenderer,
    PerspectiveCamera,
} from 'three'
import './style.css'

import NoiseFragmentSource from './shaders/noise-effect.frag'
import NoiseVertexSource from './shaders/noise-effect.vert'

const clock = new Clock()
const scene = new Scene()
const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
camera.position.set(0, 0.1, 3)

const sphere = new Points(
    new SphereBufferGeometry(1, 128, 128),
    new ShaderMaterial({
        uniforms: {
            time: {
                value: 0.0,
            },
        },
        vertexShader: NoiseVertexSource,
        fragmentShader: NoiseFragmentSource,
        wireframe: true,
    })
)
scene.add(sphere)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

const render = () => {
    requestAnimationFrame(() => render())
    sphere.material.uniforms.time.value = clock.getElapsedTime()
    renderer.render(scene, camera)
}

render()
