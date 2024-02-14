<template>
  <div>
    <section class="auth-sec">
      <div class="container">
        <div class="row align-items-center justify-content-center ">
          <div class="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-4 col-xxl-4">
                  <div class="main-row ">
                <div class="auth-image">
                  <img src="../../assets/images/auth/otp.png" alt="login" class="img-fluid" />
                  <div class="login-heading mb-2">
                    <h1 class="mb-0 pb-2">OTP Verification</h1>

                    <p class="mb-0">Enter the verification code we just sent on your email address.</p>
                  </div>
                </div>
            
              <form class="row form-row mb-2" @submit.prevent="verify_otp">
                <div class="col-12 col-sm-12 mb-3">
                  <div class="label-box mb-1">
                    <label> OTP </label>
                  </div>
                  <v-otp-input ref="otpInput" input-classes="otp-input" separator="" :num-inputs="6"
                    :should-auto-focus="true" input-type="letter-numeric"
                    :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']" @on-complete="(ootp) => otp = ootp"
                    onkeypress="return (event.charCode !=8 && event.charCode !=46 &&((event.charCode >= 48 && event.charCode <= 57) ))" />
                  <button v-if="code == 'get_code' && !span_loader" type="button" class="input-group-text bg-transparent"
                    id="basic-addon1" @click="get_otp()" style="margin-top:3px;border: 0 !important">Get Code</button>
                  <!-- Resend Code -->
                  <button v-if="code == 'resend_code' && !span_loader" class="input-group-text bg-transparent"
                    id="basic-addon1" @click="get_otp()" style="margin-top:3px;border: 0 !important">Resend Code</button>
                  <span v-if="settimer" style="margin-top:3px;border: 0 !important"
                    class="input-group-text bg-transparent" id="basic-addon1">
                    {{ timer }}
                  </span>
                </div>
                <!--col-12 col-sm-12-->
                <div class="col-12 col-sm-12">
                  <div class="button-box">
                    <button type="submit" class="btn btn-primary" v-show="!loader">
                      Verify
                    </button>
                    <button type="button" class="btn btn-primary" v-show="loader">
                      <div class="spinner-border text-light" role="status"></div>
                    </button>
                  </div>
                  <!--submit-button-->
                </div>
              </form>

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
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import ApiClass from "../../api/api";


export default {
  name: "OTPVerification",

  data() {
    return {
      loader: false,
      otp: "",
      code: "get_code",
      ivl: "",
      span_loader: false,
      vm: {},
      login_type: "",
      timer: "",
      settimer: false,
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      otp: {
        required: helpers.withMessage("Email OTP required", required),
      }
    }
  },
  mounted() {

    console.log({
      logn_type: this.$store.getters.getLoginType,
      vm: this.$store.getters.getVM,
      eotp: this.$store.getters.getEmailOtp,
      c: Date.now()
    });

    this.login_type = this.$store.getters.getLoginType;

    if (this.login_type == "" || this.$store.getters.getR_key == "") {
      this.$router.push("/");
    }

    this.vm = this.$store.getters.getVM;

    if (this.$store.getters.getEmailOtp) {
      let dd = new Date(this.$store.getters.getEmailOtp).getTime();

      if (dd < Date.now()) {
        this.code = "resend_code";
      }

      if (dd > Date.now()) {
        this.code = "code_sent";
        this.emailTimer(this.$store.getters.getEmailOtp);
      }

      this.settimer = true;
    }



  },
  methods: {
    async get_otp() {
      this.span_loader = true;

      let data = {
        side: "login",
        type: "email",
        r_key: this.$store.getters.getR_key,
      };

      let res = await ApiClass.postRequest(
        "otp/get",
        false,
        data
      );
      if (res.data.status_code == 1) {
        this.span_loader = false;
        this.emailTimer(res.data?.data?.expired_at);
        this.success(res.data.message);
      } else {
        this.span_loader = false;
        this.failed(res.data.message);
        if (res.data.r_key == "expired") {
          this.$router.push("/");
        }
        return;
      }
    },
    emailTimer(val) {
      this.code = "code_sent";
      this.$store.commit("SET_EMAIL_OTP", val);
      val = new Date(val).getTime();
      this.settimer = true;
      this.ivl = setInterval(() => {
        var timeGap = val - new Date().getTime();
        var min = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((timeGap % (1000 * 60)) / 1000);
        this.timer = "Resend OTP in ( " + min + "m" + ":" + sec + "s )";
        console.log(min, sec)
        if (timeGap < 0) {
          this.clear();
          this.code = "resend_code";
          this.otp = "";
          this.settimer = false;
          // this.span_loader =false
        }
      }, 1000);
    },
    clear() {
      clearInterval(this.ivl);
    },
    async verify_otp() {

      let validate = await this.v$.$validate();
      if (!validate) return;

      if (this.ivl != "") {
        clearInterval(this.ivl);
        this.code = "resend_code";
      }

      let data = {
        r_key: this.$store.getters.getR_key,
        pagetype: 'login',
        otps: {
          email: this.otp,
        },
      };

      this.loader = true;

      let res = await ApiClass.postRequest(
        "otp/verify",
        false,
        data
      );

      if (res.data.status_code == 1) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        this.resetForm();
        this.loader = false;
        this.success(res.data.message);
        this.$store.commit("CLEAR_STORE", "");
        this.$router.push("/dashboard");
        return;
      }

      if (res.data.status_code == 0) {
        this.resetForm();
        this.loader = false;
        this.failed(res.data.message);
        this.settimer = true;
        if (res.data.r_key == "expired") {
          this.$router.push("/login");
        }
        return;
      }

    },
    resetForm() {
      this.otp = "";
      this.v$.$reset();
    },

  },


};
</script>

<style scoped>
.forgot {
  text-align: end;
}

.forgot a {
  font-size: 14px;
  font-weight: 500;
}
</style>
