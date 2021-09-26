/**************************************
 * 
 * File Name: background.js
 * Date: 9/25/2021
 * Description: This is a THREE.js based background that rotates multiple numbers around in space to create a cool 3D animation.  
 * 
 **************************************/

// Creating the scene for the entire background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Creating the renderer that will assist in rendering the 3D objects
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Presetting the camera position 
camera.position.z = 2;

// Setting a group for all of the 3D objects to be apart of for easy of use later on
var numbers = new THREE.Group();
scene.add(numbers);

// Setting up a light to light up the 3D space
const light = new THREE.AmbientLight( 0xffffff);
scene.add(light);

// Creating mtl Material for number 0
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('models/number0/obj.mtl' , function (materials) {

    materials.preload();

    // Loading the obj file for number 0
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('models/number0/tinker.obj' , function (object) {

        // Adding the object to the group and presetting its scale and positon in space
        numbers.add(object);
        object.scale.x = 0.05;
        object.scale.y = 0.05;
        object.scale.z = 0.05;
        object.color = 0x00ff00;
    });
});

// Creating mtl Material for number 1
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('models/number1/obj.mtl' , function (materials) {

    materials.preload();

    // Loading the obj file for number 1
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('models/number1/tinker.obj' , function (object) {

        // Adding the object to the group and presetting its scale and positon in space
        numbers.add(object);
        object.scale.x = 0.05;
        object.scale.y = 0.05;
        object.scale.z = 0.05;
        object.color = 0x00ff00;
        object.position.x = 1.5;
    });
});

// Creating mtl Material for number 2
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('models/number2/obj.mtl' , function (materials) {

    materials.preload();

    // Loading the obj file for number 2
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('models/number2/tinker.obj' , function (object) {

        // Adding the object to the group and presetting its scale and positon in space
        numbers.add(object);
        object.scale.x = 0.05;
        object.scale.y = 0.05;
        object.scale.z = 0.05;
        object.color = 0x00ff00;
        object.position.x = -1.5;
    });
});

// Creating mtl Material for number 3
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('models/number3/obj.mtl' , function (materials) {

    materials.preload();

    // Loading the obj file for number 3
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('models/number3/tinker.obj' , function (object) {

        // Adding the object to the group and presetting its scale and positon in space
        numbers.add(object);
        object.scale.x = 0.05;
        object.scale.y = 0.05;
        object.scale.z = 0.05;
        object.color = 0x00ff00;
        object.position.y = -1.5;
    });
});

// Creating mtl Material for number 4
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('models/number4/obj.mtl' , function (materials) {

    materials.preload();

    // Loading the obj file for number 4
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('models/number4/tinker.obj' , function (object) {

        // Adding the object to the group and presetting its scale and positon in space
        numbers.add(object);
        object.scale.x = 0.05;
        object.scale.y = 0.05;
        object.scale.z = 0.05;
        object.color = 0x00ff00;
        object.position.y = 1.5;
    });
});

// Creating mtl Material for number 5
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('models/number5/obj.mtl' , function (materials) {

    materials.preload();

    // Loading the obj file for number 5
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('models/number5/tinker.obj' , function (object) {

        // Adding the object to the group and presetting its scale and positon in space
        numbers.add(object);
        object.scale.x = 0.05;
        object.scale.y = 0.05;
        object.scale.z = 0.05;
        object.color = 0x00ff00;
        object.position.y = 1.5;
        object.position.x = 1.5;
    });
});

// Creating mtl Material for number 6
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('models/number6/obj.mtl' , function (materials) {

    materials.preload();

    // Loading the obj file for number 6
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('models/number6/tinker.obj' , function (object) {

        // Adding the object to the group and presetting its scale and positon in space
        numbers.add(object);
        object.scale.x = 0.05;
        object.scale.y = 0.05;
        object.scale.z = 0.05;
        object.color = 0x00ff00;
        object.position.y = 1.5;
        object.position.x = -1.5;
    });
});

// Creating mtl Material for number 7
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('models/number7/obj.mtl' , function (materials) {

    materials.preload();

    // Loading the obj file for number 7
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('models/number7/tinker.obj' , function (object) {

        // Adding the object to the group and presetting its scale and positon in space
        numbers.add(object);
        object.scale.x = 0.05;
        object.scale.y = 0.05;
        object.scale.z = 0.05;
        object.color = 0x00ff00;
        object.position.y = -1.5;
        object.position.x = 1.5;
    });
});

// Creating mtl Material for number 8
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('models/number8/obj.mtl' , function (materials) {

    materials.preload();

    // Loading the obj file for number 8
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('models/number8/tinker.obj' , function (object) {

        // Adding the object to the group and presetting its scale and positon in space
        numbers.add(object);
        object.scale.x = 0.05;
        object.scale.y = 0.05;
        object.scale.z = 0.05;
        object.color = 0x00ff00;
        object.position.y = -1.5;
        object.position.x = -1.5;
    });
});

// Animation loop to continue animation on the objects
const animate = function () {
    requestAnimationFrame( animate );

    // Rotating the numbers
    numbers.rotation.x += 0.01;
    numbers.rotation.y += 0.01;

    renderer.render( scene, camera );
};
animate();