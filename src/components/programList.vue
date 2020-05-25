<template>
  <div id="program-list">
    <p v-for="item in programs" v-bind:key="item.url">{{ item.title }} {{ item.update.toString() }}</p>
  </div>
</template>

<script>
export default {
  name: 'programList',
  props: {
    programs: Array
  },
  created () {
    console.log(this.programs)
  }
}
</script>

<style lang="scss">

</style>
