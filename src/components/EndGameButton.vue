<template>
  <button @click="endGame">End game</button>
</template>

<script>
export default {
  methods: {
    endGame() {
      this.$store.dispatch('endGame');
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  border: 2px solid grey;
  background-color: white;
  border-radius: 5px;
  padding: 5px 7px;
  margin: 10px 0 0;
  cursor: pointer;
}
</style>
