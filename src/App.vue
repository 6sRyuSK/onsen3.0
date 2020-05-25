<template>
  <div id="app" class="w-screen h-screen">
    <nav id="app-header" class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span class="font-semibold text-xl tracking-tight">Onsen Spot</span>
      </div>
    </nav>
    <div id="app-content">
      <div id="side-bar" class="bg-teal-600"></div>
      <program-list v-if="showProgramList"></program-list>
    </div>
  </div>
</template>

<script>
import { ALL_PROGRAM } from './constants/program'
import programList from './components/programList'
export default {
  name: 'App',
  components: {
    programList
  },
  data () {
    return {
      showProgramList: false
    }
  },
  apollo: {
    programs: {
      query: ALL_PROGRAM,
      result (val) {
        const map = val.data.programs.map(obj => {
          if (!obj.update || !obj.moviePath) return
          obj.update = new Date(obj.update)
          return obj
        })
        const filtered = map.filter(obj => obj)
        const sorted = filtered.sort((a, b) => a.update < b.update ? 1 : -1)
        this.showProgramList = this.$store.dispatch('setPrograms', sorted).then(() => true)
      }
    }
  }
}
</script>

<style lang="scss">
#app-header {
  position: sticky;
  top: 0;
}
#app-content {
  display: flex;
  flex-direction: row;
  height: calc(100% - 80px);
  #side-bar {
    display: block;
    width: 30%;
    height: 100%;
    margin: 0;
  }
}
</style>
