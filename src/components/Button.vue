<template>
  <q-btn flat :label="text" @click="clickHandler"></q-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button'
    }
  },
  methods: {
    clickHandler () {
      this.$emit('clickHandler')
    }
  }
}
</script>

<style lang="scss">
  .btn{
    background-color: #aaa;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin: 2px;
    &:hover{
      background-color: #888;
    }
  }
</style>
