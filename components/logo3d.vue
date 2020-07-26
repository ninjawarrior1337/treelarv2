<template>
  <canvas ref="renderer">

  </canvas>
</template>

<script lang="ts">
  import Vue from "vue"
  import * as THREE from "three"
  import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
  import {Box3, Object3D, Vector3} from "three";

  export default Vue.extend({
    mounted() {
      let container = this.$refs["renderer"] as HTMLCanvasElement
      let scene = new THREE.Scene()

      let camera = new THREE.PerspectiveCamera(70, container.clientHeight/container.clientWidth)
      camera.position.z = 30;
      camera.position.y = 10;

      let renderer = new THREE.WebGLRenderer({
        alpha: true,
        canvas: container,
        antialias: true
      })
      let loader = new GLTFLoader()

      let al = new THREE.AmbientLight(0xffffff, 1)
      scene.add(al)
      // let sl = new THREE.SpotLight(0xffffff, 2)
      // sl.castShadow = true
      // scene.add(sl)
      //
      // let hl = new THREE.HemisphereLight(0xffffff, 0xffffff, 2)
      // hl.position.set(0, 50, 0)
      // scene.add(hl)
      //
      let dirLight = new THREE.DirectionalLight(0xffffff, 1)
      dirLight.position.set(-1, 1.75, 1)
      scene.add(dirLight)

      let logo: Object3D
      loader.load("logo2020.glb", function (gltf) {
        logo = gltf.scene.children[1]
        const box = new Box3().setFromObject(logo)
        const center = box.getCenter(new Vector3())
        logo.position.x += logo.position.x - center.x
        logo.position.y += logo.position.y - center.y
        logo.position.z += logo.position.z - center.z

        logo.rotation.z += 0.5
        logo.rotation.x += -0.2

        logo.traverse(n => {
          if(n.type == "mesh") {
            n.castShadow = true
            n.receiveShadow = true
          }
        })
        scene.add(logo)
        animate();
      }, undefined, function (err) {
        console.error(err)
      })
      let counter = 0;
      let animate = function () {
        requestAnimationFrame( animate );
        counter+=0.01
        logo.position.y = (Math.sin(counter) *3)
        renderer.render( scene, camera );
      };
    },
    name: "logo3d"
  })
</script>

<style scoped>

</style>
