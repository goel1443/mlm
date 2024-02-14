<template>
    <div>
        <div class="page-header-title">
            <h5>{{title}}</h5>
        </div>
        <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="https://speedhost.website/binary/app/">
                    <FontAwesomeIcon icon="home" style="color:var(--blue-navy)" />
                </a></li>
            <li class="breadcrumb-item"><a href="#!">{{titleItem}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Breadcrumb',
    props:{
        title:String,
        titleItem:String
    }
}
</script>
<style scoped>
</style>