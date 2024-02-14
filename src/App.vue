<template>
  <div>

    <Dashboard v-if="$route.meta.authOnly">
      <router-view />
    </Dashboard>

    <router-view v-else />
 
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

:root {
  --blue-navy: #05445E;
  --blue-green: #75E6DA;
  --blue-baby: #D4F1F4;
  --white: #ffffff;
  --black: #000000;
  --red:#b52f2f;
}
.dark-theme {
  --blue-baby: #05445E;
  --blue-green: #75E6DA;
  --blue-navy: #D4F1F4;
  --white: #ffffff;
  --black: #000000;
}
 
section.auth-sec {
  min-height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

section.auth-sec .main-row {
  border:2px solid var(--blue-navy);
  padding:20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}


.auth-image {
  text-align: center;
}

.auth-image img {
  max-width: 50%; 
}

.login-heading h1 {
  color: var(--blue-navy);
  font-size: 30px;
  font-weight: 600;

}

.login-heading p {
  font-size: 15px;
  font-weight: 500;
  color: var(--black);
}

.label-box label {
  font-size: 15px;
  font-weight: 700;
  color: var(--blue-navy);
}

.input-group .form-control {
  font-size: 14px;
  font-weight: 600;
  color: var(--blue-navy);
  padding:6px 15px;
}

.input-group .form-control::placeholder {
  color: var(--blue-navy);
  font-size: 14px;
  font-weight: 600;
  opacity: 0.8;
}

.input-group .form-control:focus {
  border-color: var(--bs-border-color);
  color:var(--blue-navy);
}

.input-group .input-group-text {
  background-color: var(--white);
}

.submit-button .btn-primary {
  width: 100%;
}
.spinner-border {
  --bs-spinner-width: 1rem !important;
  --bs-spinner-height: 1rem !important;
}

.auth-text p {
  font-size: 13px;
  font-weight: 500;
  color: var(--black);
  text-align: center;
}

.error_msg {
    color: var(--red);
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;

}




.button-box .btn-primary {
  background: var(--blue-navy) !important;
  border: none;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 5px; 
  align-items: center;
  gap: 12px;
  color: var(--white);
  width:100%;
  padding: 10px;
}

 /**================ OTP INPUT FIELD CSS START ================ **/

.otp-input div {
  justify-content: space-between;
  width: 100%;
}

input.otp-input {
  min-height: 20px;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid var(--grey-2);
  font-weight: 500;
  background-color: var(--white-bg);
  width: 40px;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 7%);
  padding: 10px;
  margin-left:3px;
}

input.otp-input:focus-visible {
  outline: none;
}

/**================ OTP INPUT FIELD CSS FINISH ================ **/


</style>