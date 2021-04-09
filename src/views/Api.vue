<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md column items-start q-gutter-md" v-if="movieList.length">
      <q-card v-for="item in movieList" :key="item.id" class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-img
            :src="'https://image.tmdb.org/t/p/w200' + item.poster_path" alt=""
          ></q-img>
          <q-card-section>
            {{ item.title }}
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  created () {
    this.browseMovie('&language=zh-TW&sort_by=popularity.desc&page=1')
  },
  data () {
    return {

    }
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
