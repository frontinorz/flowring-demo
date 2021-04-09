<template>
  <q-card flat bordered class="card q-my-md">
    <div class="rank text-h1">{{ index }}</div>
    <q-card-section class="items-stretch" horizontal>
      <q-img
        class="w-50"
        :src="imgUrlPrefix + item.poster_path" :alt="item.title"
      ></q-img>
      <q-card-section class="w-50">
        <h4 class="text-h6 q-my-none">{{ item.title }}</h4>
        <div class="row items-center q-mb-sm">
          <q-icon name="star" class="text-orange"/>
          <span class="text-caption text-grey q-ml-sm">
            {{ item.vote_average }}
            ({{ item.vote_count }})
          </span>
        </div>
        <p class="line-clamp">{{ item.overview }}</p>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      imgUrlPrefix: 'https://image.tmdb.org/t/p/w400'
    }
  }
}
</script>

<style lang="scss">
  .w-50{
    width: 50%;
  }
  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .rank{
    position: absolute;
    left: 0;
    top: 0;
    color: #ccc;
    opacity: .6;
    transform: translate(-40%,-60%);
    // z-index: 3;
  }

</style>
