<template>
  <div id="app">

    <nav class="nav">
      <div class="nav-left">
        <router-link to="/" class="nav-item logo">LOGO</router-link>
      </div><!--/.nav-left-->
      <div class="nav-right">
        <router-link to="/" class="nav-item is-tab is-hidden-mobile">Home</router-link>
        <router-link to="/users/:1" class="nav-item is-tab is-hidden-mobile">Users 1</router-link>
        <router-link to="/users/:2" class="nav-item is-tab is-hidden-mobile">Users 2</router-link>
      </div><!--/.nav-right-->
    </nav>

  <router-view></router-view>

</div><!--/.app-->
</template>

<script>
export default {
  //name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">

</style>
