<template>
<div>

<div class="page-about">

<section class="section-wrap section-header full-height vertical-center" style="background-image:url('https://images.unsplash.com/photo-1504541891213-1b1dfdadb739?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');">
  <div class="container">
    <div class="row text-center">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <h1 class="section-title">How we help</h1>
      </div><!--/.col-->
    </div><!--<!--/.row-->
  </div><!--/.container-->
</section>

<section class="section-wrap">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3 class="section-title">About page</h3>
      </div><!--/.col-->
    </div><!--/.row-->
  </div><!--/./container-->
</section>


</div><!--/.page-home-->

</div>
</template>

<script>
  export default {
    watch: {
      '$route' (to, from) {
        //console.log(this.$route.params.userId);
      }
    },
    created() {
      //console.log(this.$route.params.userId);
    },
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  }
</script>