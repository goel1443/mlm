<template>
  <div>
    <Dashboard>
      <router-view />
    </Dashboard>
  </div>
</template>
<script >
import Dashboard from './layouts/Dashboard.vue';
export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>
<style >
#app {
  background: var(--blue-baby);
  height:100vh;
  width:100%;
}
:root {
  --blue-navy: #05445E;
  --blue-light: #189AB4;
  --blue-green: #75E6DA;
  --blue-baby: #D4F1F4;
  --white: #ffffff;
  --black: #000000;
}

</style>