<template>
  <div>
    <section class="auth-sec ">
      <div class="container">
        <div class="row align-items-center justify-content-center ">
          <div class="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-4 col-xxl-4">
            <div class="main-row ">
            <div class="auth-image ">
              <img src="../../assets/images/auth/login.png" alt="login" class="img-fluid" />
              <div class="login-heading mb-1">
                <h1 class="mb-0 pb-2 text-center">Login</h1>
                <p>Enter login credention here!!</p>
              </div>
            </div>
            <form class="row form-row mb-2">
                <div class="col-12 col-sm-12 mb-3">
                  <div class="label-box mb-1">
                    <label> Login Id</label>
                  </div>
                  <div class="input-group">
                    <input type="text" class="form-control shadow-none" placeholder="Login Id" aria-label="email"
                      aria-describedby="basic-addon1" v-model="email" />
                  </div>
                  <span class="error_msg" v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}
                  </span>
                </div>
                <!--col-12 col-sm-12-->

                <div class="col-12 col-sm-12 mb-4">
                  <div class="label-box mb-1">
                    <label> Password</label>
                  </div>
                  <div class="input-group mb-1">
                    <input :type="hidden ? 'password' : 'text'" class="form-control shadow-none border-end-0"
                      placeholder="Enter password" aria-label="password" aria-describedby="basic-addon1"
                      v-model="password" />

                    <span class="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon :icon="hidden? 'eye-slash':'eye'"  @click="hidden = !hidden" style="cursor: pointer; font-size:17px; color:var(--blue-navy)" />
                    </span>
                  </div>
                  <span class="error_msg" v-if="v$.password.$error">
                    {{ v$.password.$errors[0].$message }}
                  </span>
                  <div class="forgot">
                    <router-link to="/forgotpassword" class="text-decoration-none">Forgot Password</router-link>
                  </div>
                </div>
                <!--col-12 col-sm-12-->

                <div class="col-12 col-sm-12">
                  <div class="button-box">
                    <button class="btn btn-primary btn-common" type="submit" v-show="!loader" @click.prevent="login">
                      Login
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
                  Don't have an account?
                  <router-link class="text-decoration-none" to="/register">
                    Register
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
import ApiClass from "../../api/api.js";

export default {
  name: "LoginView",

  data() {
    return {
      loader: false,
      hidden: true,
      email: "",
      password: "",
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  mounted() {
    this.$store.commit("SET_R_KEY", "");
    this.$store.commit("SET_VM", "");
    this.$store.commit("SET_USER_EMAIL", "");
    this.$store.commit("SET_USER_MOBILE", "");
    this.$store.commit("SET_USER_UNIQUE_ID", "");
    this.$store.commit("SET_LOGIN_TYPE", "");
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("Login Id is Required", required),
      },
      password: {
        required: helpers.withMessage("Password is Required", required),
      },
    };
  },
  methods: {
    async login() {
      const result = await this.v$.$validate();

      if (!result) {
        return;
      }

      if (this.v$.$invalid) {
        return;
      }

      this.loader = true;

      let body = {
        unique_id: this.email,
        password: this.password,
      };

      let response = await ApiClass.postRequest("user/login", false, body);

      if (response?.data?.status_code != 1) {
        this.loader = false;
        this.failed(response?.data?.message);
        return;
      }

      this.loader = false;
      this.success(response?.data?.message);

      if (response.data.data.v == true) {
        this.$store.commit("SET_R_KEY", response?.data?.data?.r_key);
        this.$store.commit("SET_VM", response?.data?.data?.vm);
        this.$store.commit("SET_USER_EMAIL", response.data?.data.email);
        this.$store.commit("SET_USER_MOBILE", response.data?.data.mobile);
        this.$store.commit("SET_USER_UNIQUE_ID", response.data?.data.unique_id);
        this.$store.commit("SET_LOGIN_TYPE", "email");
        this.$router.push("/otp");
      } else {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        this.$router.push("/dashboard");
        return;
      }
    },
  },
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
  color: var(--blue-navy);
}
</style>
