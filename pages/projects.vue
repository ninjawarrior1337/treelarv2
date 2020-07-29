<template>
  <div class="container mx-auto min-h-screen">
      <project-card 
      v-for="project of projects" 
      :key="project.title" 
      :title="project.title" 
      :description="project.description"
      :img="project.img" 
      :links="project.links"></project-card>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "@vue/composition-api"
import ProjectCard from "../components/projectcard.vue"
import Projects from "../assets/projects.yaml"

export default defineComponent({
    setup() {
        const projects = ref(Projects)
        return {
            projects
        }
    },
    components: {
        ProjectCard
    }
})
</script>

<style>

</style>