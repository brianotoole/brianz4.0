<template>
<div id="app" v-bind:class="{ navopen: toggleNav }">

<header class="header">
  <div class="row">
    <div class="col-xs-6 logo">
      <router-link to="/" class="nav-item logo">{{site}}</router-link>
    </div><!--/.col-->
    <div class="col-xs-6 end-xs">
      <ul class="nav-primary">
        <li v-for="nav in navs">
          <router-link :to="`/${nav.link}`" class="nav-item">{{nav.title}}</router-link>
        </li>
      </ul><!--/.nav-primary-->
      <div class="nav-toggle" @click="toggleNav = !toggleNav" v-bind:class="{ active: toggleNav }">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
     </div><!--/.nav-toggle-->
     </div><!--/.col-->
  </div><!--/.row-->
</header>

<div class="nav-mobile row" v-bind:class="{ active: toggleNav }">
  <div class="col-xs-12">
    <ul class="nav-mobile-wrap">
        <li v-for="nav in navs">
          <router-link :to="`/${nav.link}`" class="nav-item">{{nav.title}}</router-link>
        </li>
      </ul><!--/.nav-primary-->
  </div><!--/.col-->
</div><!--/.nav-mobile-->

  <router-view></router-view>

</div><!--/.app-->
</template>

<script>
export default {
  //name: 'app',
  data () {
    return {
      site: 'Brian',
      navs: [
        {link: '', title: 'Home' },
        {link: 'users/:1', title: 'About' },
        {link: 'contact', title: 'Contact' }
      ],
      toggleNav: false
    }
  },
  methods: {

  }
}
</script>

<style lang="sass">
@import './assets/scss/app.scss';
</style>
