<template>
  <div id="app">
       <nav class="main-nav"> 
     <div class="logo" >    
     </div>
     <Burger></Burger>     
   </nav>
<Gmap/>
   <Sidebar>
     <ul class="sidebar-panel-nav">
       <li><a href="#upload"><v-icon></v-icon>UPLOAD DE ARQUIVOS</a></li>
       <li><a href="#mapas">MEUS MAPAS</a></li>
     </ul>
   </Sidebar>
  </div>
</template>

<script>
import Gmap from './components/Gmap.vue';
import Burger from './components/Menu/Burger.vue';
import Sidebar from './components/Menu/Sidebar.vue';

import { mdiAccount } from '@mdi/js'

  
export default {
  name: 'App',
  components: {
    Gmap,
     Burger,
   Sidebar,
},

  data: () => ({
      svgPath: mdiAccount
    })

};
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

html {
   height: 5%;
   overflow:hidden;
 }

 body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height:100%;
   background: rgb(101,31,87);
   background: linear-gradient(45deg, rgba(101,31,87,1) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%);
 }

 .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   font-family: 'Lato'
 }

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.2rem 0.2rem;
  margin-top: 10px;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
   margin-right: 30px;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 0.8rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>
