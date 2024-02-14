<template>
    <div>
      <footer class="footer">
            <div class="container-fluid">
                <div class="row align-items-center footer-row">
                    <div class="col-6">
                        <div class="footer-left">
                            <h1>Footer1</h1>
                        </div>
                        
                    </div>
                    <div class="col-6">
                        <h1>Footer2</h1>
                    </div>
                </div>
            </div>
      </footer>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
.footer {
    position:fixed;
    bottom: 0px;
    width:100%;
    color:var(--blue-baby);
    background-color: var(--blue-navy);
    
    padding:10px 0px;
}
.footer h1 {
    margin-bottom: 0px;
}
.footer-row {
    margin-left:250px;
    transition: all 0.3s ease;
}

.footer-row.toggle {
    margin-left:0px;
}

@media  screen and (min-width:768px) and (max-width:991px) {
    .footer-row {
    margin-left:0px;

}

.footer-row.toggle {
    margin-left:0px;
}
}

@media  screen and (min-width:320px) and (max-width:767px) {
.footer-row {
    margin-left:0px;

}

.footer-row.toggle {
    margin-left:0px;
}
}
</style>