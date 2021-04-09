<template>
  <q-page class="flex flex-center">
    <Counter />
    <Counter />
  </q-page>
</template>

<script>
import Counter from '@/components/Counter'

export default {
  name: 'HelloWorld',
  components: {
    Counter
  }
}
</script>

<style>
</style>
