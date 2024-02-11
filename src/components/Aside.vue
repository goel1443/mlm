<template>
    <div>
        <aside class="sidebar">
                    <ul id="sidebarmain1" class="main-list">
                        <li class="nav-item" >
                            <a href="#collapse1" class="nav-link " data-bs-toggle="collapse" >
                               <p class="mb-0"><FontAwesomeIcon  icon="home" class="me-1" /><span class="list-title"> home </span></p> <FontAwesomeIcon icon="square-plus" class="list-icon" />
                            </a>
                            <ul id="collapse1" class="collapse sub-list" data-bs-parent="#sidebarmain1">
                                <li class="nav-item">
                                    <router-link :to="{ name:'About'}" class="nav-link">home 1</router-link>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link">home 2</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item"  >
                            <a href="#collapse2" class="nav-link" data-bs-toggle="collapse" >
                              
                                <p class="mb-0"><FontAwesomeIcon  icon="image" class="me-1" /><span class="list-title"> profile </span></p> <FontAwesomeIcon icon="square-plus" class="list-icon" />
                      
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
                        <li class="nav-item" >
                            <a href="" class="nav-link">
                                
                                <p class="mb-0"><FontAwesomeIcon  icon="dashboard" class="me-1" /><span class="list-title"> dashboard </span></p> 
                      
                            </a>
                        </li>
                    </ul>


        </aside>
    </div>
</template>

<script>
export default {
    name:'Aside'
}
</script>
<style scoped>
.sidebar {
    background-color: var(--blue-navy);
    height:80px;
    position: fixed;
    top:80px;
    left:0%;
    width:250px;
    z-index:5;
    background-color: var(--blue-green);
    height:100%;
    transition:all 1s linear;
}
.sidebar ul {
    list-style: none;
    padding:0px 0px 0px 10px;
    margin:0px;
}
.sidebar ul.main-list li {
    padding:0px ;
    margin:0px;
}
.sidebar ul.main-list li a {
    display:block;
    font-size:18px;
    font-weight: 600;
    padding:10px 15px;
    margin-top:5px;
    text-transform: capitalize;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:var(--blue-navy);
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
    
}

.sidebar ul.sub-list li {
    padding:0px;
    margin-top:5px;
   
    
}
.sidebar ul.sub-list li a {
    display:block;
    font-size:16px;
    font-weight: 600;
    margin-top:10px;
    margin-left:40px;
    text-transform: capitalize;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    
}

.sidebar ul.sub-list li a:hover,
.sidebar ul.sub-list li a:focus,
.sidebar ul.sub-list li a:active,
.sidebar ul.sub-list li a.active
{
    background-color: var(--blue-navy);
    color:var(--blue-baby);
}


.sidebar.toggle{
    left:-100%;
    transition:all 1s linear;
}

</style>