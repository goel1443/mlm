<template>
  <div>
    <section class="auth-sec">
      <div class="container">
        <div class="row align-items-center justify-content-center ">
          <div class="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-4 col-xxl-4">
                  <div class="main-row ">
              <div class="auth-image">
                <img src="../../assets/images/auth/forgot.png" alt="login" class="img-fluid" />
                <div class="login-heading mb-1">
                  <h1 class="mb-0 pb-2 text-center">Forgot</h1>
                  <p>Don't worry, Just Enter Email for receive login Credentials!!</p>
                </div>
              </div>
              <form class="row form-row mb-2">
                <div class="col-12 col-sm-12 mb-3">
                  <div class="label-box mb-1">
                    <label>Email</label>
                  </div>
                  <div class="input-group">
                    <input type="text" class="form-control shadow-none" placeholder="Email Id" aria-label="email"
                      aria-describedby="basic-addon1" v-model="email" />
                  </div>
                  <span class="error_msg" v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}
                  </span>
                </div>
                <!--col-12 col-sm-12-->
                <div class="col-12 col-sm-12">
                  <div class="button-box">
                    <button class="btn btn-primary" type="submit" v-show="!loader" @click.prevent="forgot">
                      Forgot
                    </button>
                    <button class="btn btn-primary" v-show="loader">
                      <div class="spinner-border text-light" role="status"></div>
                    </button>
                  </div>
                  <!--submit-button-->
                </div>
              </form>
              <div class="auth-text">
                <p class="mb-0 regsiter-link">
                  Don't have an account? <router-link class="text-decoration-none" to="/login">
                    Login
                  </router-link>
                </p>
              </div>
            <!--auth-image-->
            </div>
          </div>
          <!--col-12 col-sm-12-->
        </div>
        <!--row-->
      </div>
      <!--container-->
    </section>
    <!--auth-sec-->
  </div>
</template>
  
<script>
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import ApiClass from '../../api/api.js';

export default {
  name: "ForgotView",

  data() {
    return {
      loader: false,
      email: '',
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("Email is Required", required)
      }
    };
  },
  methods: {
    async forgot() {
      let validate = await this.v$.$validate();

      if (!validate) return;

      this.loader = true

      let data = {
        "email": this.email
      }

      let res = await ApiClass.postRequest('forgot/password', false, data)

      if (res.data?.status_code == 1) {
        this.loader = false
        this.success(res.data.message)
        this.$router.push('/login')
        return
      } else {
        this.loader = false
        return this.failed(res.data.message)
      }
    }
  }
};
</script>
  
<style scoped>
.forgot {
  text-align: end;
}

.forgot a,
.regsiter-link a {
  font-size: 14px;
  font-weight: 500;
  color: var(--blue-navy)
}
</style>
  