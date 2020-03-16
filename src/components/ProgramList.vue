<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-6-mobile is-4-tablet is-3-desktop" v-for="item in programList" :key="item.title">
      <article class="box">
        <div>{{ item.title }}</div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      programList: [
        {
          title: 'dummy'
        },
        {
          title: 'dummy1'
        },
        {
          title: 'dummy2'
        },
        {
          title: 'dummy3'
        },
        {
          title: 'dummy5'
        }
      ]
    }
  }
}
</script>

<style>

</style>
