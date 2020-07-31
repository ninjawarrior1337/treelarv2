<template>
  <canvas class="" :width="$props.width" :height="$props.height" ref="renderer">

  </canvas>
</template>

<script lang="ts">
  import Vue from "vue"
  import * as THREE from "three"
  import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
  // import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
  import {Box3, Object3D, Vector3} from "three";
  import { defineComponent, reactive, ref } from "@vue/composition-api";

  export default defineComponent({
    setup() {
      const state = reactive({
        counter: 0,
        logoObj: {} as THREE.Object3D,
        scene: {} as THREE.Scene,
        camera: {} as THREE.PerspectiveCamera,
        renderer: {} as THREE.WebGLRenderer,
        animationFrameId: {} as number
      })
      const renderer = ref(null)
      return {
        state
      }
    },
    props:[
      "width",
      "height"
    ],
    methods: {
      init() {
        let container = this.$refs["renderer"] as HTMLCanvasElement
        this.state.scene = new THREE.Scene()

        //2nd value is the aspect ratio...
        this.state.camera = new THREE.PerspectiveCamera(70, 1/1)
        this.state.camera.position.z = 30;
        this.state.camera.position.y = 10;

        this.state.renderer = new THREE.WebGLRenderer({
          alpha: true,
          canvas: container,
          antialias: true,
        })

        // var controls = new OrbitControls( camera, renderer.domElement );
        // controls.update()

        let loader = new GLTFLoader()

        let al = new THREE.AmbientLight(0xffffff, 1)
        this.state.scene.add(al)
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
        this.state.scene.add(dirLight)

        loader.load("logo2020.glb", (gltf) => {
          this.state.logoObj = gltf.scene.children[1]
          let logo = this.state.logoObj
          const box = new Box3().setFromObject(logo)
          const center = box.getCenter(new Vector3())
          logo.position.x += logo.position.x - center.x
          logo.position.y += logo.position.y - center.y
          logo.position.z += logo.position.z - center.z

          logo.rotation.z += (Math.PI) / 6
          logo.rotation.x += 0

          logo.traverse(n => {
            if(n.type == "mesh") {
              n.castShadow = true
              n.receiveShadow = true
            }
          })
          this.state.scene.add(logo)
          this.animate();
        }, undefined, function (err) {
          console.error(err)
        })
      },
      animate() {
        this.state.animationFrameId = requestAnimationFrame( this.animate );
        this.state.counter+=0.01
        // controls.update()
        this.state.logoObj.position.y = (Math.sin(this.state.counter) *1)
        this.state.renderer.render( this.state.scene, this.state.camera );
      }
    },
    destroyed() {
      cancelAnimationFrame(this.state.animationFrameId)
    },
    mounted() {
      this.init()
    },
    name: "logo3d"
  })
</script>

<style scoped>

</style>
