<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <mode-select v-if="$store.state.npcMode === null" />
      <main-game v-else />
    </transition>
  </div>
</template>

<script>
import ModeSelect from './components/ModeSelect.vue'
import MainGame from './components/MainGame.vue'

export default {
  components: {
    ModeSelect,
    MainGame
  }
}
</script>

<style lang="scss">
body {
  background-image: url('assets/bg.jpg');
  font-family: 'Open Sans', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
  width: 310px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
