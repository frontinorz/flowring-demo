<template>
  <q-page class="q-pa-lg">
    <h2 class="text-h4 q-ml-md q-mt-sm q-mb-lg">電影人氣排行</h2>
    <q-infinite-scroll @load="onLoad" :offset="250" v-if="movieList.length">
      <div class="row items-stretch">
        <div class="card col-6 q-pa-md" v-for="(item, index) in movieList" :key="item.id">
          <MovieCard :item="item" :index="index+1"/>
        </div>
      </div>
      <!-- <template v-slot:loading>
        <MovieSkelton />
      </template> -->
    </q-infinite-scroll>
    <MovieSkelton v-else/>
  </q-page>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import MovieCard from '@/components/MovieCard'
import MovieSkelton from '@/components/MovieSkelton'

export default {
  created () {
    if (!this.isPageInvoke) {
      this.browseMovie(`&language=zh-TW&sort_by=popularity.desc&include_video&page=${this.page}`)
      this.setPageInvoke()
    }
  },
  components: {
    MovieCard,
    MovieSkelton
  },
  data () {
    return {
      page: 1
    }
  },
  computed: {
    ...mapGetters('movie', [
      'movieList',
      'isPageInvoke'
    ]
    )
  },
  methods: {
    ...mapActions('movie', [
      'browseMovie'
    ]),
    ...mapMutations('movie', [
      'setPageInvoke'
    ]),
    onLoad (index, done) {
      console.log('Loading')
      this.page++
      this.browseMovie(`&language=zh-TW&sort_by=popularity.desc&include_video&page=${this.page}`)
      done()
    }
  }
}
</script>

<style lang="scss">

</style>
