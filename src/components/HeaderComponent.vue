<template>
    <header id="headerComponent">
        <router-link to="/" exact> Filmaria</router-link>
        <router-link tag="button" to="/salvos" exact class="meusFilmes"> Salvos</router-link>
        
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    #headerComponent{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 60px;
        background-color: brown;
    }
    #headerComponent a{
        text-decoration: none;
        font-size: 30px; 
        color:#FFFF;
        cursor: pointer;
    }
    button{ 
        cursor: pointer; 
        border: 0; 
        background: #ffff;
        padding: 5px 15px;
        outline: none;
        border-radius: 5px;
        font-weight: bold;
    }
</style>