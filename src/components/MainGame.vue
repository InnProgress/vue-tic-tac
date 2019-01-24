<template>
  <div>
    <p><strong>{{ turn }}</strong> turn</p>
    <board />
    <reset-button />
    <leader-board />
    <end-game-button />

    <transition name="fade">
      <img class="load" src="https://thumbs.gfycat.com/RadiantCheerfulBigmouthbass-max-1mb.gif" v-if="loading" :class="{ visible: loading }">
    </transition>
  </div>
</template>

<script>
import Board from '@/components/Board.vue'
import LeaderBoard from '@/components/Leaderboard.vue'
import ResetButton from '@/components/ResetButton.vue'
import EndGameButton from '@/components/EndGameButton.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Board,
    LeaderBoard,
    ResetButton,
    EndGameButton
  },
  computed: {
    ...mapState([
      'turn',
      'loading'
    ])
  }
}
</script>

<style scoped>
img.load {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>
