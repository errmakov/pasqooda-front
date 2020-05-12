import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';
import * as creditor from "@/store/modules/creditor.js";
import * as debitor from "@/store/modules/debitor.js";
import * as penalty from "@/store/modules/penalty.js";
import * as tax from "@/store/modules/tax.js";
import * as movable from "@/store/modules/movable.js";
import * as realty from "@/store/modules/realty.js";

const vuexLocal = new VuexPersistence({
  key: "pasqooda",
  storage: localStorage
})

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
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
    updated: null,
    hasPenalties: null,
    hasMovables: null,
    hasRealty: null,
    hasDebitors: null,
    step: 1,
    errors: [
      [],
      [],
      [],
      [],
      [],
    ]
  
  },
  mutations: {
    PUSH_ERROR(state, err) {
      state.errors[err.step].push(err.name);
    },
    POP_ERROR(state, err) {
      state.errors[err.step].splice(err.index, err.index+1);
    },
    SET_STEP(state,step) {
      state.step = step;
    },
    UPDATE(state, time) {
      state.updated = time;
    }
  },
  actions: {
    updateState({commit}) {
      let upDate = new Date();
      let time = upDate.getTime();
      commit('UPDATE', time);
    },
    setStep({commit}, step) {
      commit('SET_STEP', step);
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
      
      let errors = this.state.errors;
      
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
    },
    
    popAllErrorsByID({commit}, err) {
      let errors = this.state.errors;
      let step = err.step;
      for (let k in errors[step]) {
        if (errors[err.step][k].match(new RegExp(err.id))) {
          commit('POP_ERROR', {step, index:k});
        };
      };
      
    }
  },
  modules: {
    creditor,
    debitor,
    penalty,
    tax,
    realty,
    movable
  }
});
