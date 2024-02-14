<template>
  <div>
    <section class="auth-sec">
        <div class="container">
          <div class="row align-items-center justify-content-center ">
          <div class="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-4 col-xxl-4">
                  <div class="main-row ">
                    <div class="auth-image">
                      <img src="../../assets/images/auth/register.png" alt="login" class="img-fluid" />
                      <div class="login-heading mb-1">
                        <h1 class="mb-0 pb-2 text-center">Create Account</h1>
                        <p>Enter your personal information!!</p>
                      </div>
                    </div>
                    <!--auth-image-->
                    <form class="row form-row mb-2">
                          <div class="col-sm-12 mb-3">
                          
                            <div class="label-box mb-1">
                              <label> Username</label>
                            </div>
                            <div class="input-group">
                              <input type="text" class="form-control shadow-none" placeholder="Enter your name"
                                aria-label="Username" aria-describedby="basic-addon1" v-model="name" />
                            </div>
                            <span class="error_msg" v-if="v$.name.$error">
                              {{ v$.name.$errors[0].$message }}
                            </span>
                          
                          </div>
                          <!-- email -->
                          <div class="col-sm-12 mb-3">
                          
                            <div class="label-box mb-1">
                              <label> Email</label>
                            </div>
                            <div class="input-group">
                              <input type="text" class="form-control shadow-none" placeholder="Enter your email"
                                aria-label="email" aria-describedby="basic-addon1" v-model="email" />
                            </div>
                            <span class="error_msg" v-if="v$.email.$error">
                              {{ v$.email.$errors[0].$message }}
                            </span>
                         
                          </div>
                          <div class="col-sm-12 mb-3" >
                          
                            <div class="label-box mb-1">
                              <label> Password</label>
                            </div>
                            <div class="input-group">
                              <input :type="hidden ? 'password' : 'text'" class="form-control shadow-none border-end-0"
                                placeholder="Enter password" aria-label="password" aria-describedby="basic-addon1"
                                v-model="password" />

                              <span class="input-group-text" id="basic-addon1">
                                  <FontAwesomeIcon :icon="hidden ? 'eye-slash':'eye'"  @click="hidden = !hidden" style="cursor: pointer; font-size:20px; color:var(--blue-navy)" />
   
                              </span>
                            </div>
                            <span class="error_msg" v-if="v$.password.$error">
                              {{ v$.password.$errors[0].$message }}
                            </span>
                        
                          </div>
                          <div class="col-sm-12 mb-3">
                    
                            <div class="label-box mb-1">
                              <label>Confirm Password</label>
                            </div>
                            <div class="input-group">
                              <input :type="hidden2 ? 'password' : 'text'" class="form-control shadow-none border-end-0"
                                placeholder="Enter confirm password" aria-label="password" aria-describedby="basic-addon1"
                                v-model="confirm_password" />

                              <span class="input-group-text" id="basic-addon1">
                                <FontAwesomeIcon :icon="hidden2 ? 'eye-slash':'eye'"  @click="hidden2 = !hidden2" style="cursor: pointer; font-size:20px; color:var(--blue-navy)" />
                            </span>
                            </div>
                            <span class="error_msg" v-if="v$.confirm_password.$error">
                              {{ v$.confirm_password.$errors[0].$message }}
                            </span>
                      
                          </div>
                          <div class="col-sm-12 mb-3">
                          
                            <div class="label-box mb-1">
                              <label>Phone Number</label>
                            </div>

                            <div class="input-group">
                              <input type="text" class="form-control shadow-none" placeholder="Phone Number"
                                aria-label="Phone Number" aria-describedby="basic-addon1" v-model="mobile" />

                            </div>
                            <span class="error_msg" v-if="v$.mobile.$error">
                              {{ v$.mobile.$errors[0].$message }}
                            </span>
                         
                          </div>
                          <div class="col-12 col-sm-12 ">

                          <div class="button-box ">
                            <button class="btn btn-primary" type="submit" v-show="!loading" @click.prevent="registerForm">
                              Register
                            </button>
                            <button class="btn btn-primary" v-show="loading">
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
                    </div>
                </div>
                  <!--col-12 col-sm-12 mb-2-->
            </div>
            <!--row-->
        </div>
        <!--container-->
    </section>
    <!--auth-sec-->
  </div>
</template>
  
<script>
import { required, email, helpers, minLength, maxLength, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import ApiClass from '../../api/api.js';

export default {
  name: "RegisterView",

  data() {
    return {
      loading: false,
      hidden: true,
      hidden2: true,
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirm_password: '',
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      name: {
        required: helpers.withMessage("First Name is Required", required),
        minLength: minLength(4),
        maxLength: maxLength(30),
      },
      email: {
        required: helpers.withMessage("Email is Required", required),
        email: helpers.withMessage("Invalid Email Address", email),
        maxLength: helpers.withMessage("Email should not exceed 150 letters", maxLength(150)),
      },
      mobile: {
        required: helpers.withMessage("Phone is Required", required),
        maxLength: helpers.withMessage("Phone should not exceed 15 digit", maxLength(15)),
      },
      password: {
        minLength: minLength(8),
        maxLength: maxLength(150),
        required: helpers.withMessage("Password is Required", required),
        valid: helpers.withMessage("Password Should Contain A Capital Letter, A Special Charcater And A Number", function (value) {
          const containsUppercase = /[A-Z]/.test(value)
          const containsLowercase = /[a-z]/.test(value)
          const containsSpecial = /[#?!@$%^&*-]/.test(value)
          return containsUppercase && containsLowercase && containsSpecial
        })
      },
      confirm_password: {
        sameAsPassword: helpers.withMessage(
          "Password and Confirm Password should match",
          sameAs(this.password)
        ),
      }
    };
  },
  methods: {
    resetForm() {
      this.name = "";
      this.email = "";
      this.mobile = "";
      this.password = "";
      this.confirm_password = "";
      this.loading = false;
      this.v$.$reset(); // reset validation
    },
    async registerForm() {

      this.loading = true;
      const result = await this.v$.$validate();

      if (!result) {
        this.loading = false;
        // notify user form is invalid
        return;
      }

      let form_data = {
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        password: this.password,
        confirm_password: this.confirm_password
      };



      // Submit Form In Backend
      let response = await ApiClass.postRequest("user/signup", false, form_data);

      if (response?.data) {
        this.loading = false;

        if (response.data.status_code == 0) {
          this.failed(response.data.message);
          return;
        }

        if (response.data.status_code == 1) {
          this.success(response.data.message);
          this.resetForm();
          return;
        }

      }

      this.loading = false;
    },
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
  