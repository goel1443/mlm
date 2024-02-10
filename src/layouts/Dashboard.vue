<template>
    <div class="main">
                <Header />
                <Aside />
                <slot> </slot>  
                <Footer/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Aside from '../components/Aside.vue'
export default {
    name:'Dashboard',
    components:{
        Header,
        Footer,
        Aside
    }
}
</script>