<template>
  <div class="about">
    <h1>{{mensagem}}</h1>
  </div>
</template>

<script>
export default {
  name:'ControleDeClientes', 
  data(){
    return{
      mensagem: 'Estou na tela de Controle De Clientes'
    }
  }
}
</script>

<style scoped> /* scoped funciona para aplicar a condição apenas nessa h1*/
h1{
    color:red;
  }

</style>

  



