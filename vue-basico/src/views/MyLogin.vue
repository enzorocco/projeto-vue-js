<template>
    <div class="box-login">
        <div class="logo">
        <h1>Login</h1>
        </div>

        <Input 
        label="Email:"
        placeHolder="exemplo@gmail.com"
        ></Input>

        <Input 
        label="Senha:"
        placeHolder="123456"
        type="password"
        ></Input>

        <Button
        value="entrar" :callback="login"
         ></Button>

    </div>
</template>

<script>
import Input from "@/components/input/Input.vue";
import Button from "@/components/button/MyButton.vue";
export default{
    name:'MyLogin',
    components:{
        Input,
        Button

    },
    methods:{
        login(){
            this.$router.push({name:'Dashboard'})
        }
    }
}
</script>

<style scoped> 
    .box-login{
        width: 300px;
        height: px;
        margin: auto;
        border: 2px solid #ddd;
        margin-top: 80px;
        padding: 15px;
    }

    .logo{
        text-align: center;
        color: var(--cor-primaria);
        font-size: 22px;

    }
</style>
