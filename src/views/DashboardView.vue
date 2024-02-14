<template>
    <div >
                <section class="home">
                            <div class="container-fluid">
                                <div class="row align-items-center">
                                    <div class="col-md-12">
                                     <Breadcrumb title="Dashboard" titleItem="User"/>
                                    </div>
                                </div>
                            </div>
                </section>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Breadcrumb from '../components/Breadcrumb.vue';



export default {
    name: 'DashboardView',
    components: { FontAwesomeIcon, Breadcrumb }
}
</script>
<style scoped>

.home {
    border:1px solid red;
}
</style>