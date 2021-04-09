<template>
  <div class="q-pa-md row items-center q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="text-center">
        <div class="text-h6">{{ number }}</div>
      </q-card-section>
      <q-card-actions align="around">
        <Button :text="'增加'" @clickHandler="increseHandler" />
        <Button :text="'重設'" @clickHandler="resetHandler" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  data () {
    return {
      number: 0
    }
  },
  components: {
    Button
  },
  methods: {
    increseHandler () {
      this.number++
    },
    resetHandler () {
      this.number = 0
    }
  }
}
</script>

<style lang="scss">

</style>
