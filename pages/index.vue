<template>
  <div class="container mx-auto h-screen">
    <div class="flex justify-around align-center">
      <div class="shadow-lg rounded">
        <h1>Treelar</h1>
      </div>
      <div class="shadow-lg rounded-lg">
        <Logo3d></Logo3d>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Logo3d from "@/components/logo3d.vue"
  import {reactive} from "@vue/composition-api";
  export default {
    setup() {
      const state = reactive({
        bruh: "fortnite"
      })
      return {
        state
      }
    },
    components: {
      Logo3d
    }
  }
</script>
