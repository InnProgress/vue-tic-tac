<template>
  <div>
    <p>
      <strong>O</strong> wins: {{ wins.O }}
    </p>
    <p>
      <strong>X</strong> wins: {{ wins.X }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'wins'
    ])
  }
}
</script>

<style lang="scss" scoped>
 div {
   margin: 5px;
 }
</style>
