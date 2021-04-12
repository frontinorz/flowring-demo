<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Flowring Demo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="200"
    >
      <q-list class="q-pb-md">
        <q-item-label header>連結</q-item-label>
        <q-item clickable to="/" tag="a">
          <q-item-section avatar>
            <q-icon name="plus_one" />
          </q-item-section>
          <q-item-section>
            <q-item-label>計時器</q-item-label>
            <q-item-label caption>計時器範例</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/api" tag="a">
          <q-item-section avatar>
            <q-icon name="format_list_bulleted" />
          </q-item-section>
          <q-item-section>
            <q-item-label>API</q-item-label>
            <q-item-label caption>API範例</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-toggle
        v-model="isDarkmode"
        @input="darkmodeHandler"
        label="深色主題"
        class="absolute-bottom q-pb-sm"
      ></q-toggle>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      leftDrawerOpen: false,
      isDarkmode: true
    }
  },
  created () {
    console.log(this.$q.dark.isActive)
    this.$q.dark.set(this.isDarkmode)
    console.log('API:', process.env.VUE_APP_API_URL)
    console.log('ENV:', process.env.NODE_ENV)
  },
  methods: {
    darkmodeHandler () {
      this.$q.dark.set(this.isDarkmode)
    }
  }
}
</script>

<style>
</style>
