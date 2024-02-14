<template>
    <div>
        <header class="header ">
               
                  
                <div class="toggle-icon " >
                    <FontAwesomeIcon icon="bars" @click.prevent="sidebartoggle" style="color:var(--blue-baby); font-size:24px; " />
                </div>
          
          
                <div class="right-icon ">
                    <ul >
                    <!-- <li class="nav-item" >
                    <a class="nav-link "  href="#" ><FontAwesomeIcon icon="bell" style=" font-size:20px"/></a>
                    </li> -->
                    <li class="nav-item">
                    <a class="nav-link "  href="#" @click.prevent="theme"><FontAwesomeIcon icon="sun" style=" font-size:18px"/></a>
                    </li>
                    <!-- <li class="nav-item">
                    <a class="nav-link "  href="#"><FontAwesomeIcon icon="user" style=" font-size:20px"/></a>
                    </li> -->
                    <!-- <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link " href="#" >Dropdown</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link " href="#" >Disabled</a>
                    </li> -->
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
            // document.querySelector(".footer-row").classList.toggle('toggle');
            document.querySelector(".main-content").classList.toggle('toggle');
            document.querySelector(".overlay").classList.toggle('toggle');
            
        },
        theme() {
            document.body.classList.toggle('dark-theme')
        }
    }
}
</script>

<style scoped>
.header {
    position:fixed;
    top:0px;
    left:0px;
    z-index:2;
    background-color: var(--blue-navy);
    height:60px;
    width:100%;
    display: flex;
    justify-content: space-between;
    padding:0px 20px;
    align-items: center;
   
}

.toggle-icon {
    cursor: pointer;
}

.right-icon ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0px;
    margin: 0px;
    width:100%;
}

.right-icon li .nav-link{
    display: flex;
    width:30px;
    height: 30px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    border:2px solid var(--blue-baby);
    color:var(--blue-baby);
}
.right-icon li .nav-link.active ,
.right-icon li .nav-link:active ,
.right-icon li .nav-link:focus ,
.right-icon li .nav-link:hover
 {
    color:var(--blue-navy);
    background-color: var(--blue-baby);
}

</style>