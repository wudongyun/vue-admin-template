import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  platform: ['6', '7'],
  role: []
};

const getters = {
  getPlatform(state) {
    return state.platform;
  }
};

const mutations = {
  setPlatform(state, value) {
    if (value.length === 0) {
      state.platform = ['6', '7'];
    } else {
      state.platform = value;
    }
  },
  setRole(state, value) {
    state.role = value;
  }
};
const actions = {
  getRole({ commit, state }) {
    return new Promise(resolve => {
      if (state.role.length) {
        resolve(state.role);
      } else {
        getRole().then(res => {
          const role = res.data.map(item => {
            return { value: item.p_code, label: item.category };
          });
          commit('setRole', role);
          resolve(role);
        });
      }
    });
  }
};

//vuex实例输出
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
