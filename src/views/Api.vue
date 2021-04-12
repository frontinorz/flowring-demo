<template>
  <q-page class="q-pa-lg">
    <h2 class="text-h4 q-ml-md q-mt-sm q-mb-lg">電影排行榜</h2>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-mt-md q-mb-xl"
    >
      <q-select filled v-model="movieSort" :options="sortList" label="依照排序">
        <template v-slot:option="scope">
          <q-item
            v-bind="scope.itemProps"
            v-on="scope.itemEvents"
          >
            <q-item-section>
              <q-item-label v-html="scope.opt.label"></q-item-label>
            </q-item-section>
          </q-item>
          </template>
      </q-select>
      <q-field
        filled
        stack-label
        label="評價人數大於"
        class="q-pt-md"
      >
        <template v-slot:control >
          <q-slider class="q-mt-lg" v-model="voteCount" :min="0" :max="5000" :step="100" label label-always></q-slider>
        </template>
      </q-field>
      <div>
        <q-btn label="開始查詢" type="submit" color="primary"></q-btn>
        <q-btn label="重新查詢" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
      </div>
    </q-form>
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
      this.movieBrowseHandler(this.movieSort.value, this.voteCount, this.page)
      this.getGenreList()
      this.setPageInvoke()
    }
  },
  components: {
    MovieCard,
    MovieSkelton
  },
  data () {
    return {
      page: 1,
      sortList: [
        {
          label: '人氣',
          value: 'popularity.desc'
        }, {
          label: '上映日期',
          value: 'release_date.desc'
        }, {
          label: '評價',
          value: 'vote_average.desc'
        }
      ],
      movieSort: {
        label: '人氣',
        value: 'popularity.desc'
      },
      voteCount: 100
    }
  },
  computed: {
    ...mapGetters('movie', [
      'movieList',
      'genresList',
      'isPageInvoke'
    ]
    )
  },
  methods: {
    ...mapActions('movie', [
      'browseMovie',
      'getGenreList'
    ]),
    ...mapMutations('movie', [
      'setPageInvoke',
      'resetList'
    ]),
    movieBrowseHandler (sortBy, voteCount, page) {
      this.browseMovie(`&language=zh-TW&sort_by=${sortBy}&vote_count.gte=${voteCount}&page=${page}`)
    },
    onLoad (index, done) {
      this.page++
      this.movieBrowseHandler(this.movieSort.value, this.voteCount, this.page)
      done()
    },
    onSubmit () {
      // 避免清單接續載入
      this.resetList()
      // 重新計算頁數
      this.page = 1
      this.movieBrowseHandler(this.movieSort.value, this.voteCount, this.page)
    },
    onReset () {
      this.movieSort = this.sortList[0]
      this.voteCount = 100
      this.onSubmit()
    }
  }
}
</script>

<style lang="scss">

</style>
