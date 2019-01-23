<template>
  <div class="board-holder">
    <div v-for="(field, id) in board" @click="use(id)" :key="field + id" :class="[{ green: field === 'O' }, { red: field === 'X' }]">
      <span>{{ field }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    use(index) {
      this.$store.dispatch('fieldClick', index);
    }
  },
  computed: {
    ...mapState([
      'board',
      'gameStarted'
    ])
  }
}
</script>

<style lang="scss">
  .board-holder {
    width: 150px;
    margin: 0 auto;
    div {
      position: relative;
      width: 33.333333%;
      height: 50px;
      display: inline-block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid black;
      vertical-align: middle;
      background-color: lightgrey;
      &:hover {
        cursor: pointer;
      }
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .green {
      background-color: #C7FCD3;
      &:hover {
        background-color: darken(#C7FCD3, 20%);
        cursor: not-allowed !important;
      }
    }
    .red {
      background-color: #F28086;
      &:hover {
        background-color: darken(#F28086, 20%);
        cursor: not-allowed !important;
      }
    }
  }
</style>
