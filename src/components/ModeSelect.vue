<template>
  <div>
    <p>Please select game mode</p>
    <button @click="select(false)">1 vs. 1</button>
    <button @click="select(true)">1 vs. NPC</button>
  </div>
</template>

<script>
export default {
  methods: {
    select(type) {
      this.$store.commit('setGameMode', type);
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  margin: 5px;
}
</style>
