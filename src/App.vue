<template>
<div id="app" v-bind:class="{ navopen: toggleNav }">

<header class="header">
  <div class="container">
    <div class="row">
      <div class="col-xs-3 start-xs logo">
        <router-link to="/" class="nav-item logo sr">logo</router-link>
      </div><!--/.col-->
      <div class="col-xs-6 center-xs">
        <ul class="nav-primary">
          <li v-for="nav in navs">
            <router-link :to="`/${nav.link}`" class="nav-item sr">{{nav.title}}</router-link>
          </li>
        </ul><!--/.nav-primary-->
        <div class="nav-toggle" @click="toggleNav = !toggleNav" v-bind:class="{ active: toggleNav }">
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
      </div><!--/.nav-toggle-->
      </div><!--/.col-->
      <div class="col-xs-3 end-xs hidden-phone">
        <router-link to="" class="btn transparent sr">Get in Touch</router-link>
      </div><!--/.col-->
    </div><!--/.row-->
  </div><!--/.container-->
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

<footer class="section-wrap footer">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 end-sm">
        svg here
      </div><!--/.col-->
      <div class="col-xs-12 col-sm-6">
        <h3>Let's Connect</h3>
        fjdsklfjds
        fasdfdsaf
        fasdf
      </div><!--/.col-->
    </div><!--/.row-->
  </div><!--/./container-->
</footer>

</div><!--/.app-->
</template>

<script>
export default {
  //name: 'app',
  data () {
    return {
     //siteName: 'Brian',
      navs: [
        {link: '', title: 'Home' },
        {link: 'about', title: 'About' },
        {link: 'contact', title: 'Contact' }
      ],
      toggleNav: false
    }
  },
  methods: {
    tweenTest:function(){
      //TweenMax.from('#tween',1,{x:1000});
    }
  },
  mounted: function () {
    
  }

}

</script>

<style lang="sass">
@import './assets/scss/app.scss';
</style>
