<template>
  <div id="app">
    <p><strong>{{ turn }}</strong> turn</p>
    <board />
    <reset-button />
    <leader-board />
  </div>
</template>

<script>
import Board from './components/Board.vue'
import LeaderBoard from './components/Leaderboard.vue'
import ResetButton from './components/ResetButton.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Board,
    LeaderBoard,
    ResetButton
  },
  computed: {
    ...mapState([
      'turn'
    ])
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
</style>
