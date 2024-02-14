<template>
    <div>
        <div class="main">
                <Header />
                <Aside />
                <div class="main-content">
                <slot> </slot>  
                
                </div>
                <!-- <Footer /> -->
               
               
            </div>
        <div class="overlay" @click.prevent="overlaydashboard" >

        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'
import Aside from '../components/Aside.vue'
export default {
    name:'Dashboard',
    components:{
        Header,
        // Footer,
        Aside
    },
    methods:{
        overlaydashboard() {
            document.querySelector(".sidebar").classList.toggle('toggle');
            // document.querySelector(".footer-row").classList.toggle('toggle');
            // document.querySelector(".main-content").classList.toggle('toggle');
            document.querySelector(".overlay").classList.toggle('toggle');
            
        }
    }
}
</script>

<style scoped>

.main-content {
    margin-top:60px;
    margin-left:250px;
    transition: all 0.3s;
    padding:30px;
    height:100%;
}

.main-content.toggle {
    margin-left:0px;
}

.overlay {
    position:fixed;
    top:0px;
    left:0px;
    background-color: var(--black);
    opacity:0.5;
    width:100%;
    height:100%;
    z-index:3;
    display:none;
}
.overlay.toggle {
    display:none;
}
@media  screen and (min-width:768px) and (max-width:991px) {
.main-content {
    margin-left:0px;
} 
.main-content.toggle{
    margin-left:0px;
}

.overlay.toggle {
    display: block;
} 
}

@media  screen and (min-width:320px) and (max-width:767px) {
    .main-content {
        margin-left:0px;
} 
.main-content.toggle{
    margin-left:0px;
} 
.overlay.toggle {
    display: block;
} 
}
</style>