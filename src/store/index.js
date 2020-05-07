import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    registration: {
      contact_name_second: null,
      contact_name_name: null,
      contact_name_middle: null,
      pass_number:null,
      pass_emitter:null,
      pass_date_menu: false,
      pass_date:null,
      regadress:null,
      contact_email:null,
      contact_phone:null
    },  
    step: 1,
    creditor_count: 1,
    errors: [
      [],
      [],
      [],
      [],
      [],
    ]
  
  },
  mutations: {
    UPDATE_REGISTRATION(state, regData) {
      state.registration[regData.param] = regData.value;
    },
    INIT_STATE(state, initData) {
      state.registration  = initData.registration;
      state.errors  = initData.errors;
    },
    PUSH_ERROR(state, err) {
      state.errors[err.step].push(err.name);
    },
    POP_ERROR(state, err) {
      console.log('POP_ERROR MUTATION: ', err);
      state.errors[err.step].splice(err.index, err.index+1);
    }
  },
  actions: {
    updateRegistration({commit}, regData) {
      commit('UPDATE_REGISTRATION', regData);
      let o = {
        registration: this.state.registration,
        errors: this.state.errors
      };
      localStorage.setItem('formData', JSON.stringify(o));
    },
    initState({commit}) {
      let initData = JSON.parse(localStorage.getItem('formData'));
      if (initData) {
        commit('INIT_STATE', initData);
      };      
    },
    pushError({commit}, err) {
      let errors = this.state.errors;
      let found = false;
      for (let k in errors[err.step]) {
        if (errors[err.step][k] == err.name) {
          found = true;
        };
      };
      if (!found) {
        commit('PUSH_ERROR', err);
      };
    },
    popError({commit}, err) {
      console.log('popError action err: ', err);
      let errors = this.state.errors;
      console.log('popError action errors from state: ', errors);
      let found = false;
      let index;
      for (let k in errors[err.step]) {
        if (errors[err.step][k] == err.name) {
          found = true;
          index = k;
          break;
        };
      };
      if (found) {
        let step = err.step;
        commit('POP_ERROR', {step, index});
      }
    }
  },
  getters: {
    getStep: state => {
      return state.step;
    },
    getRegistration: state => {
      console.log('getRegistration getter:', state.registration);
      return state.registration;
    },
    getFormErrors: state => {
      return state.errors;
    }
  },
  modules: {}
});
