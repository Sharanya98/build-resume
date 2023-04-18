import { getField, updateField } from 'vuex-map-fields';


import { Skill } from '../../../models/Skills';

const mutations = {
  updateField,
  addskill(state,payload){
    state.rows.push(payload)
  }
};

const getters = {
  getField,

};

const state = () => ({
  rows: [new Skill()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};