<template>
  <q-page class="q-pa-lg">
    <h2 class="text-h4 q-ml-md q-mt-sm q-mb-lg">電影人氣排行</h2>
    <div class="row items-stretch" v-if="movieList.length">
      <div class="card col-6 q-pa-md" v-for="(item, index) in movieList" :key="item.id">
        <MovieCard :item="item" :index="index+1"/>
      </div>
    </div>
    <div v-else>
      <MovieSkelton />
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MovieCard from '@/components/MovieCard'
import MovieSkelton from '@/components/MovieSkelton'

export default {
  created () {
    setTimeout(() => {
      this.browseMovie('&language=zh-TW&sort_by=popularity.desc&include_video&page=1')
    }, 3000)
  },
  components: {
    MovieCard,
    MovieSkelton
  },
  computed: {
    ...mapGetters('movie', [
      'movieList'
    ]
    )
  },
  methods: {
    ...mapActions('movie', [
      'browseMovie'
    ])
  }
}
</script>

<style lang="scss">

</style>
