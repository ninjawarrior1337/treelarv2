<template>
  <footer class="py-4 text-center w-full text-xl">
    <div>
      Made with
      <fa :icon="['fab', 'vuejs']" color="#41B883"></fa>
      and
      <fa icon="egg" class="text-muse" v-if="eggActive"></fa>
      <fa
        icon="torii-gate"
        class="text-muse"
        v-else-if="
          getRouteBaseName($route) && getRouteBaseName($route).includes('anime')
        "
        v-cloak
      ></fa>
      <fa
        icon="brain"
        class="text-muse"
        v-else-if="
          getRouteBaseName($route) &&
          getRouteBaseName($route).includes('projects')
        "
        v-cloak
      ></fa>
      <fa icon="heart" class="text-muse" v-else v-cloak></fa>
      by
      <span class="text-treelar">Treelar</span>
    </div>
    <div class="mt-2">
      <a
        class="mx-2"
        href="https://twitter.com/TYNROH"
        target="_blank"
        rel="noopener"
        title="Twitter"
        ><fa :icon="['fab', 'twitter']"></fa
      ></a>
      <a
        class="mx-2"
        href="https://github.com/ninjawarrior1337"
        target="_blank"
        rel="noopener"
        title="Github"
        ><fa :icon="['fab', 'github']"></fa
      ></a>
      <!-- <fa class="mx-2" :icon="['fab', 'discord']"></fa> -->
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    eggActive: {
      type: Boolean
    }
  }
};
</script>