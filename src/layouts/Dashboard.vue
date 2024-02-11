<template>
    <div>
                <Header />
                <Aside />
                <div class="content">
                <slot> </slot>  
                </div>
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

<style scoped>
.content {
    margin-top:80px;
    margin-left:250px;
}


</style>