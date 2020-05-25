<template>
  <div id="program-list" class="w-full">
    <div id="pl-container" class="flex flex-wrap w-full">
      <div class="pl-item w-3/12 p-1" v-for="item in programs" v-bind:key="item.url">
        <img class="pl-item-img" :src="item.thumbnailPath" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'programList',
  computed: {
    programs () { return this.$store.state.programs }
  }
}
</script>

<style lang="scss">
#program-list {
  max-width: 100%;
  overflow-y: scroll;
}
.pl-item {
  user-select: none;
  .pl-item-img {
    width: 100%;
    height: auto;
    pointer-events: none;
  }
}
</style>
