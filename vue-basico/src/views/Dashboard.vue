<template>
  <div class="about">
    <h1>{{mensagem}}</h1>
  </div>
</template>

<script>
export default {
  name:'MenuDash', 
  data(){
    return{
      mensagem: 'Estou na tela Dashboard'
    }
  }
}
</script>

<style scoped>
h1{
    color: red;
  }

</style>

  



