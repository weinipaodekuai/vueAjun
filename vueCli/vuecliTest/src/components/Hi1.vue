<template>
  <div>
            <h2>{{msg}}-{{$route.params.username}}-{{$route.params.id}}</h2>

  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'I am Hi11111111.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
