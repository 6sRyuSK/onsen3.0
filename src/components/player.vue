<template>
  <div id="player">
    <audio :src="playing.moviePath" id="audio-elm"></audio>
    <div class="flex h-full justify-center">
      <div id="playing-content" class="w-4/12 flex">
        <div class="h-full w-4/12 flex item-center">
          <img :src="playing.thumbnailPath" class="thumbnail h-full w-auto p-1 mr-0">
        </div>
        <div class="w-8/12">
          <p><marquee behavior="scroll" direction="left"><b class="text-white">{{ playing.title }}</b></marquee></p>
          <small class="text-white">{{ playing.personality }}</small>
        </div>
      </div>
      <div id="controll-panel " class="w-4/12 flex justify-center">
        <div class="play-button flex items-center select-none" @click="clickPlay"><i class="material-icons play-icon">{{ isPlaying ? 'pause' : 'play_arrow'}}</i></div>
      </div>
      <div id="volume-controll" class="w-4/12"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  computed: {
    playing () { return this.$store.getters.getPlaying || { moviePath: '', thumbnailPath: '', title: '', personality: '' } }
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
  .playing-content {
    color: white;
    .thumbnail {
      margin: 0;
    }
  }
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
