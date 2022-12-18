      
      

            lightintensity = 4;
      
      // Set Scene
      var scene = new THREE.Scene();
      scene.background = new THREE.Color('black'); // black background

      // Set Camera
      var camera = new THREE.PerspectiveCamera(100,window.innerWidth / window.innerHeight, 0.1, 1000 , 1000);
      camera.position.set(0, 0, 
      3);

      // Set Renderer
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
     
    
      
 // kolory
var material2 = new THREE.MeshStandardMaterial({
   color: 'black'
 });
      var material = new THREE.MeshStandardMaterial({
          color: '#112200' 
      });
      var treelogmaterial= new THREE.MeshStandardMaterial({
        color: '#211300'
      });
      var leavematerial = new THREE.MeshStandardMaterial({
        color: '#111800'
      });
 //objekty
 
      var floor = new THREE.BoxGeometry(100,10,100);
      var geometry = new THREE.BoxGeometry(1, 1,1);
      var treelog = new THREE.BoxGeometry(1, 8,1);
      var leaves = new THREE.SphereGeometry(5,5,5);
          //
      var cube = new THREE.Mesh(geometry, material2);
			var floor= new THREE.Mesh(floor, material);
			var tree = new THREE.Mesh(treelog, treelogmaterial);
						var tree3 = new THREE.Mesh(treelog, treelogmaterial);
		var leaf = new THREE.Mesh(leaves, leavematerial ) ;
									var tree2 = new THREE.Mesh(treelog, treelogmaterial);
	var leaf2 = new THREE.Mesh(leaves, leavematerial ) ;
	var leaf3 = new THREE.Mesh(leaves, leavematerial ) ;
//obtut objektu	

      cube.rotation.x = 22.5;
      cube.rotation.y = 45;
//pokaż objekt

      scene.add(cube);
			scene.add(floor);
			scene.add(tree);
			scene.add(leaf);
			scene.add(tree2);
scene.add(leaf2);
			scene.add(leaf3);
			scene.add(tree3);
			//objekty pozycja 
			
			floor.position.y -= 8
			 tree.position.z -= 10
						 tree.position.x -= 10
		 leaf.position.z -= 10
					 leaf.position.x -= 10
					 leaf.position.y += 5
			tree2.position.y -= 2
						tree2.position.z -= 6
			leaf2.position.z -= 6
			leaf2.position.y += 5
			leaf3.position.y += 5
			leaf3.position.x += 10
			tree3.position.x += 10
			leaf3.position.z -= 10
						tree3.position.z -= 10
      // Directional Light
      var directionalLight = new THREE.DirectionalLight(0xffffff, lightintensity );
      lightintensity = 200;
      directionalLight.position.x = 0;
      directionalLight.position.y = 3;
      directionalLight.position.z = 2;
      
      scene.add(directionalLight);




//pętlowanie




      // Show the scene
      renderer.render(scene, camera);
      var render = function() {
			requestAnimationFrame(render);
			cube.rotation.x -= 0.005;
		cube.rotation.z += 0.008;

			if (xt > 520) {
			  camera.rotation.y -= xt / 30000;
			}
if (xt < 580) {
  camera.rotation.y += xt / 30000;
}



			if (yt < 150) {
			  camera.rotation.x += yt / 28000;
			}
if (yt > 200) {
  camera.rotation.x -= yt / 28000;
}
			
			
			
			renderer.render(scene, camera);


};	
function myFunction(event) {
  
     xt = event.touches[0].clientX;
     yt = event.touches[0].clientY;
     
     TO=1;
     
  document.getElementById("console").innerHTML = xt + ", " + yt +" .........All by krystian popiołek 198 lines of code "
  
}

function go(event) {
  
     camera.position.z -= 0.1;
  
}
function back(event) {
  
     camera.position.z += 0.1;
  
}
function up(event) {
  camera.position.y  += 0.1 ;
}

function left(event) {
  camera.position.x  += 0.1 ;
}

function right(event) {
  camera.position.x  -= 0.1 ;
}
function down(event) {
  camera.position.y -= 0.1;
}

render();


if  ((event) = false) {
  xt=0;
  yt=0;
  
}
window.addEventListener('touchstart', function onFirstTouch() {
  // we could use a class
  document.body.classList.add('user-is-touching');

  // or set some global variable
  window.USER_IS_TOUCHING = true;

  // or set your app's state however you normally would
  myFrameworkOfChoice.dispatchEvent('USER_IS_TOUCHING', true);

  // we only need to know once that a human touched the screen, so we can stop listening now
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);
onload = function gmtime() {
	setTimeout(doSomething2, 1);
	function doSomething2() {
	
	      lightintensity + 1;
	document.getElementById("console2").innerHTML = ". X.cam poz" +camera.position.x+".  Z.cam poz."+camera.position.y;
	setTimeout(1  );
	return gmtime();
}}
 