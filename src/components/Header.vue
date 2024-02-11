<template>
    <div>
        <header class="header">
                <div class="logo">
                  <router-link :to="{ name:'About'}" > <img src="/logo.svg" class="img-fluid"/></router-link> 
                </div>
                <div class="toggle-icon" >
                    <FontAwesomeIcon icon="bars-staggered" @click.prevent="sidebartoggle" style="color:var(--blue-baby); font-size:18px; " />
                </div>
                <div class="right-icon">
                    <ul class="border">
                    <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link " href="#" >
                        Dropdown
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </div>
        </header>
  
        
    
        
    
</div>
  
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'Header',
    components: { FontAwesomeIcon },
    methods:{
        sidebartoggle() {
            document.querySelector(".sidebar").classList.toggle('toggle');
            
        }
    }
}
</script>

<style scoped>
.header {
    position:fixed;
    z-index:4;
    background-color: var(--blue-navy);
    height:80px;
    width:100%;
    display: flex;
    align-items: center;
}
.logo {
    width:250px;
    display: flex;
    align-items: center;
}
.toggle-icon {
    margin-left:15px;
    cursor: pointer;
}
.right-icon {
    margin-left:auto;
}
.right-icon ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0px;
    margin: 0px;
    
}
.right-icon li .nav-link{
    color:var(--blue-baby);
}
.right-icon li .nav-link.active ,
.right-icon li .nav-link:active ,
.right-icon li .nav-link:focus ,
.right-icon li .nav-link:hover
 {
    color:var(--blue-baby);
}

</style>