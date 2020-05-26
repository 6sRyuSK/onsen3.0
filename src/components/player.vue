<template>
  <div id="player">
    <h1>{{ playing }}</h1>
  </div>
</template>

<script>
export default {
  name: 'player',
  computed: {
    playing () { return this.$store.getters.getPlaying }
  }
}
</script>

<style lang="scss">
#player {
  width: 100%;
  height: 9%;
  background-color: black;
}
</style>
