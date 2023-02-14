import * as THREE from 'three'
import { Sphere } from 'three';
import { OrbitControls } from './jsm/controls/OrbitControls.js'





const scene = new THREE.Scene()
// const axesHelper = new THREE.AxesHelper( 10 );
// scene.add( axesHelper );


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)




const sunGeometry = new THREE.SphereGeometry()
const sunMaterial = new THREE.MeshBasicMaterial({
	color:0xffc400,
	wireframe:true
})
const sun = new THREE.Mesh(sunGeometry,sunMaterial)
scene.add(sun)
sun.position.set(0,0,0)







//mercury

const mercuryGeometry = new THREE.SphereGeometry(0.3)
const mercuryMaterial = new THREE.MeshBasicMaterial({
	color:0xC0C2C9,
	wireframe:true
})

const mercuryObj = new THREE.Object3D()
const mercury = new THREE.Mesh(mercuryGeometry,mercuryMaterial)
scene.add(mercuryObj)
mercuryObj.add(mercury)

mercury.position.set(2,0,0)


//venus

const venusGeometry = new THREE.SphereGeometry(0.3)
const venusMaterial = new THREE.MeshBasicMaterial({
	color:0xDCF3E5,
	wireframe:true
})

const venusObj = new THREE.Object3D()
const venus = new THREE.Mesh(venusGeometry,venusMaterial)
scene.add(venusObj)
venusObj.add(venus)

venus.position.set(3,0,0)


//earth

const earthGeometry = new THREE.SphereGeometry(0.3)
const earthMaterial = new THREE.MeshBasicMaterial({
	color:0x0096FF,
	wireframe:true
})

const earthObj = new THREE.Object3D()
const earth = new THREE.Mesh(earthGeometry,earthMaterial)
scene.add(earthObj)
earthObj.add(earth)

earth.position.set(4,0,0)

//mars

const marsGeometry = new THREE.SphereGeometry(0.3)
const marsMaterial = new THREE.MeshBasicMaterial({
	color:0x8B0000,
	wireframe:true
})

const marsObj = new THREE.Object3D()
const mars = new THREE.Mesh(marsGeometry,marsMaterial)
scene.add(marsObj)
marsObj.add(mars)

mars.position.set(5,0,0)

//jupiter

const jupiterGeometry = new THREE.SphereGeometry(0.3)
const jupiterMaterial = new THREE.MeshBasicMaterial({
	color:0xbfbdb6,
	wireframe:true
})

const jupiterObj = new THREE.Object3D()
const jupiter = new THREE.Mesh(jupiterGeometry,jupiterMaterial)
scene.add(jupiterObj)
jupiterObj.add(jupiter)

jupiter.position.set(6,0,0)

//saturn

const saturnGeometry = new THREE.SphereGeometry(0.6)
const saturnMaterial = new THREE.MeshBasicMaterial({
	color:0xF5F5DC,
	wireframe:true
})
const saturn = new THREE.Mesh(saturnGeometry,saturnMaterial)
const saturnObj = new THREE.Object3D()
saturn.position.set(7,0,0)
scene.add(saturnObj)
saturnObj.add(saturn)

const ringGeometry = new THREE.RingGeometry(.5,1,60)
const ringMaterial = new THREE.MeshBasicMaterial({
	color:0x616161,
	wireframe:true
})
const ring = new THREE.Mesh(ringGeometry,ringMaterial)
saturnObj.add(ring)
ring.rotation.x= Math.PI / 2
ring.position.set(7,0,0)



//uranus

const uranusGeometry = new THREE.SphereGeometry(0.3)
const uranusMaterial = new THREE.MeshBasicMaterial({
	color:0x022d59,
	wireframe:true
})

const uranusObj = new THREE.Object3D()
const uranus = new THREE.Mesh(uranusGeometry,uranusMaterial)
scene.add(uranusObj)
uranusObj.add(uranus)

uranus.position.set(8,0,0)

//neptune
const neptuneGeometry = new THREE.SphereGeometry(0.3)
const neptuneMaterial = new THREE.MeshBasicMaterial({
	color:0x004e9d,
	wireframe:true
})

const neptuneObj = new THREE.Object3D()
const neptune = new THREE.Mesh(neptuneGeometry,neptuneMaterial)
scene.add(neptuneObj)
neptuneObj.add(neptune)

neptune.position.set(9,0,0)

//pluto

const plutoGeometry = new THREE.SphereGeometry(0.3)
const plutoMaterial = new THREE.MeshBasicMaterial({
	color:0xADD8E6,
	wireframe:true
})

const plutoObj = new THREE.Object3D()
const pluto = new THREE.Mesh(plutoGeometry,plutoMaterial)
scene.add(plutoObj)
plutoObj.add(pluto)

pluto.position.set(10,0,0)










window.addEventListener(
    'resize',
    () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    },
    false
)


function animate() {
    requestAnimationFrame(animate)
	
    mercuryObj.rotation.y += 0.012
    venusObj.rotation.y += 0.0210
    earthObj.rotation.y += 0.019
    marsObj.rotation.y += 0.024
    jupiterObj.rotation.y += 0.0298
    saturnObj.rotation.y += 0.011
    uranusObj.rotation.y += 0.005
    neptuneObj.rotation.y += 0.036
    plutoObj.rotation.y += 0.023

    sun.rotation.y += 0.006

    mercury.rotation.y += 0.01
    venus.rotation.y += 0.01
    earth.rotation.y += 0.01
    mars.rotation.y += 0.01
    jupiter.rotation.y += 0.01
    saturn.rotation.y += 0.01
    uranus.rotation.y += 0.01
    neptune.rotation.y += 0.01
    pluto.rotation.y += 0.01
   


    controls.update()
    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()