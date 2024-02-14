import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],

  state: {
    MOBILE_OTP: '',
    EMAIL_OTP: '',
    R_KEY: '',
    VM:{},
    USER_EMAIL:'',
    USER_UNIQUE_ID:'',
    USER_MOBILE:'',
    LOGIN_TYPE:'',
    WITHDRAW_:{}
  },

  mutations: {
    SET_MOBILE_OTP(state, payload) {
      state.MOBILE_OTP = payload
    },
    SET_EMAIL_OTP(state, payload) {
      state.EMAIL_OTP = payload
    },
    
    SET_R_KEY(state,payload){
      state.R_KEY = payload
    },
    SET_VM(state,payload){
      state.VM = payload
    },
    SET_USER_EMAIL(state,payload){
      state.USER_EMAIL = payload
    },
    SET_USER_MOBILE(state,payload){
      state.USER_MOBILE = payload
    },
    SET_USER_UNIQUE_ID(state,payload){
      state.USER_UNIQUE_ID = payload
    },
    SET_LOGIN_TYPE(state,payload){
      state.LOGIN_TYPE = payload
    },
    CLEAR_STORE(state){
      state.MOBILE_OTP = ''; 
      state.EMAIL_OTP = ''; 
      state.R_KEY = ''; 
      state.VM = {}; 
      state.USER_EMAIL = ''; 
      state.USER_UNIQUE_ID = ''; 
      state.USER_MOBILE = ''; 
      state.LOGIN_TYPE = ''; 
    },
    SET_WITHDRAW(state, payload){
      state.WITHDRAW_ = payload; 
    }
  },
  getters: {
    getMobileOtp: (state) => {
      return state.MOBILE_OTP
    },
    getEmailOtp: (state) => {
      return state.EMAIL_OTP
    },
    getR_key: (state) => {
      return state.R_KEY
    },
    getVM: (state) => {
      return state.VM
    },
    getUserEmail: (state) => {
      return state.USER_EMAIL
    },
    getUserUniqueId: (state) => {
      return state.USER_UNIQUE_ID
    },
    getUserMobile: (state) => {
      return state.USER_MOBILE
    },
    getLoginType: (state) => {
      return state.LOGIN_TYPE
    },
    getWithdraw: (state) => {
      return state.WITHDRAW_
    }
   
  },

})
