<template>
  <div>
    这是Vue 首页
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      console.log(this.$route);
    },
  };
</script>
