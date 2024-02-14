<template>
    <div>
        <aside class="sidebar ">
                    <div class="logo ">
                    <router-link to="/dashbord" @click.prevent="hidesidebar()"> <img src="/dashboardlogo.svg" class="img-fluid"/></router-link> 
                    </div>
                    <div >
                    <ul id="sidebarmain1" class="main-list">
                        <li class="nav-item" >
                            <router-link to="/dashboard" class="nav-link">
                                
                                <p class="mb-0"><FontAwesomeIcon  icon="dashboard" class="me-1" /><span class="list-title"> dashboard </span></p> 
                      
                            </router-link>
                        </li>
                        <li class="nav-item"  >
                            <a href="#collapse2" class="nav-link" data-bs-toggle="collapse" >
                                <p class="mb-0"><FontAwesomeIcon  icon="image" class="me-1" /><span class="list-title"> profile </span></p> <FontAwesomeIcon icon="square-plus" class="list-icon" style="font-size:16px" />
                            </a>
                            <ul id="collapse2" class="collapse  sub-list" data-bs-parent="#sidebarmain1">
                                <li class="nav-item">
                                    <a href="" class="nav-link">profile 1</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link">profile 2</a>
                                </li>
                            </ul>
                        </li> 
                    </ul>
                    </div>
                    <div class="closesidebar">
                        <FontAwesomeIcon icon="circle-left" @click.prevent="togglesidebar" style="font-size:20px;  color:var(--blue-baby)"/>
                    </div>
        </aside>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'Aside',
    components: { FontAwesomeIcon },
    methods:{
        togglesidebar() {
            document.querySelector(".sidebar").classList.toggle('toggle');
            // document.querySelector(".footer-row").classList.toggle('toggle');
            document.querySelector(".main-content").classList.toggle('toggle');
            document.querySelector(".overlay").classList.toggle('toggle');
        },
        hidesidebar() {
            if(window.innerWidth < 992){
            document.querySelector(".sidebar").classList.toggle('toggle');
            // document.querySelector(".footer-row").classList.toggle('toggle');
            // document.querySelector(".main-content").classList.toggle('toggle');
            document.querySelector(".overlay").classList.toggle('toggle');
            }
        }
    }
}
</script>
<style scoped>

.sidebar {
    position: fixed;
    top:0px;
    left:0%;
    width:250px;
    z-index:4;
    background-color: var(--blue-navy);
    height:100%;
    transition:left  0.3s ease;
}
.sidebar .logo {
    width:250px;
    height:60px;
}
.sidebar .logo a {
    display: flex;
    align-items: center;
    padding-left:10px;
}
.sidebar .logo a img {
    width:150px;
    height:60px;
}
.sidebar ul {
    list-style: none;
    padding:0px;
    position: relative;
    
}
.closesidebar {
    position:absolute;
    content:'';
    top:20px;
    right:-10px;
    cursor: pointer;
}
.sidebar ul.main-list li {
    padding:0px;
    margin-top:0px;
    padding-left:10px;
}
.sidebar ul.main-list li a {
    display:inline-block;
    font-size:15px;
    font-weight: 700;
    padding:10px 15px;
    margin-top:10px;
    text-transform: capitalize;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:var(--blue-baby);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.sidebar ul.main-list li:nth-child(1) a {
    margin-top:0px;
}
.sidebar ul.main-list li a:hover,
.sidebar ul.main-list li a:focus,
.sidebar ul.main-list li a:active,
.sidebar ul.main-list li a.active
{
    background-color:var(--blue-baby);
    color:var(--blue-navy);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.sidebar ul.sub-list li {
    padding:0px;
    margin-top:10px;
}
.sidebar ul.sub-list li a {
    display:block;
    font-size:15px;
    font-weight: 700;
    margin-top:10px;
    margin-left:40px;
    text-transform: capitalize;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.sidebar ul.sub-list li a:hover,
.sidebar ul.sub-list li a:focus,
.sidebar ul.sub-list li a:active,
.sidebar ul.sub-list li a.active
{
    background-color:var(--blue-baby);
    color:var(--blue-navy);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}


.sidebar.toggle{
    left:-100%;
}

@media  screen and (min-width:768px) and (max-width:991px) {
.sidebar {
    left:-100%;
} 
.sidebar.toggle{
    left:0px;
} 
.closesidebar {
    display: none;
}
}

@media  screen and (min-width:320px) and (max-width:767px) {
    .sidebar {
    left:-100%;
} 
.sidebar.toggle{
    left:0px;
} 
.closesidebar {
    display: none;
}
}

</style>