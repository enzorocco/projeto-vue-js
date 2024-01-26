<template>
  <div class="container">
  
  <div class="row">
    <div class="col-sm-12">
      <h2 class="titulo">Produtos </h2>
      <hr> 
    </div>
  </div>
     
  

  <div class="row sub-container">
      <div class="col-sm-2">
      <Button value="adicionar"></Button>
    </div>
</div>

<div class="row">
  <div class="col-sm-12">
    <table class="table">
      <thead>
        <tr>
          <th>código</th>
          <th>nome</th>
          <th>quantidade</th>
          <th>valor</th>
          <th>data de cadastro</th>
        </tr>
      </thead>
    </table>
  </div>
</div>

</div>

</template>

<script>
import produtoService from '../services/produto-service';
import Button from '../components/button/MyButton.vue';
import Produto from "../models/Produtos";

export default {
  name:'ControleDeProdutos', 
  components:{
    Button,
  },
  data(){
    return{
      produtos : []
    }
  },
  methods:{
    obterTodosOsProdutos(){
      produtoService.obterTodos()
      .then(response=>{
        this.produtos = response.data.map(p => new Produto(p));
        console.log(this.produtos);
        
      })
      .catch(error=>{
        console.log(error)
      })

    }
  },

  mounted(){
    alert("fui montado");
    //let produto  = new Produto();
    //produto.name = 'Tenis';

  },

  created(){

    this.obterTodosOsProdutos()
      produtoService.obterTodos()
      .then(Response=>{
        console.log(Response);
      })
      .catch(error =>{
        console.log(error)
      })
    
  }
}

</script>

<style scoped>
h1{
    color: red;
  }
</style>

  



