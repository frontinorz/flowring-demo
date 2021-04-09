<template>
  <div class="row">
    <div class="col-6 q-pa-md" v-for="i in 4" :key="i">
      <q-card class="flex">
        <q-skeleton width="50%" height="300px" square></q-skeleton>
        <q-card-section style="width:49%;">
          <q-skeleton type="text"></q-skeleton>
          <q-skeleton type="text" width="50%"></q-skeleton>
          <q-skeleton type="text"></q-skeleton>
          <q-skeleton type="text"></q-skeleton>
          <q-skeleton type="text"></q-skeleton>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
