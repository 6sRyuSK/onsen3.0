<template>
  <div id="player">
    <audio :src="playing.moviePath" id="audio-elm"></audio>
    <div class="flex h-full justify-center">
      <div id="controll-panel h-full">
        <div class="play-button flex items-center select-none" @click="clickPlay"><i class="material-icons play-icon">{{ isPlaying ? 'play_arrow' : 'pause'}}</i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  computed: {
    playing () { return this.$store.getters.getPlaying }
  },
  data () {
    return {
      isPlaying: false
    }
  },
  methods: {
    clickPlay () {
      const audioElm = document.getElementById('audio-elm')
      this.isPlaying ? audioElm.pause() : audioElm.play()
      this.isPlaying = !this.isPlaying
    }
  }
}
</script>

<style lang="scss">
#player {
  width: 100%;
  height: 9%;
  background-color: black;
  .play-button {
    height: 100%;
    .play-icon {
      width: auto;
      height: auto;
      color: white;
      font-size: 2.5rem;
      border: solid white 2px;
      border-radius: 25px;
    }
  }
}
</style>
