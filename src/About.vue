<template>
<div>

  <div class="wrapper container-fluid">
    <div class="flex-wrap">
      <div class="column">
        <h1 class="page-title">About</h1>
        <p>fjdsakjfskdljfd</p>
      </div>
    </div>
  </div>

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