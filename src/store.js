import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    turn: 'O',
    gameStarted: true,
    board: [
      null, null, null,
      null, null, null,
      null, null, null
    ],
    wins: {
      O: 0,
      X: 0
    },
    npcMode: null,
    loading: false
  },
  mutations: {
    switchPlayer(state) {
      if(state.turn === 'O') {
        state.turn = 'X';
      } else state.turn = 'O';
    },
    setField(state, index) {
      Vue.set(state.board, index, state.turn);
    },
    resetGame(state) {
      state.board = [null, null, null,
      null, null, null,
      null, null, null];
      state.turn = 'O';
      state.gameStarted = true;
    },
    switchGameStatus(state, status) {
      state.gameStarted = status;
    },
    updateWinsData(state) {
      state.wins[state.turn] ++;
    },
    setGameMode(state, type) {
      state.npcMode = type;
    },
    setLoad(state, bool) {
      state.loading = bool;
    }
  },
  actions: {
    changeField({ commit, dispatch }, index) {
      commit('setField', index);
      dispatch('checkWin');
      commit('switchPlayer');
    },
    checkWin({ dispatch, state }) {
      let it = state.board;
      if(it[0] !== null && it[0] === it[1] && it[0] === it[2] ||
      it[3] !== null && it[3] === it[4] && it[3] === it[5] ||
      it[6] !== null && it[6] === it[7] && it[6] === it[8] ||
      it[0] !== null && it[0] === it[4] && it[0] === it[8] ||
      it[2] !== null && it[2] === it[4] && it[2] === it[6] ||
      it[0] !== null && it[0] === it[3] && it[0] === it[6] ||
      it[1] !== null && it[1] === it[4] && it[1] === it[7] ||
      it[2] !== null && it[2] === it[5] && it[2] === it[8] ) {
        dispatch('win');
        return;
      }

      if(!it.includes(null)) dispatch('draw');
    },
    win({ commit, state }) {
      commit('updateWinsData');
      commit('switchGameStatus', false);
      Vue.prototype.$awn.confirm(state.turn + " have won. Your can reset game and play another one", () => {
        commit('resetGame');
      });
    },
    draw({ commit }) {
      commit('switchGameStatus', false);
      Vue.prototype.$awn.confirm("Looks like it is draw. Your can reset game and play another one", () => {
        commit('resetGame');
      });
    },
    fieldClick({ state, commit, dispatch }, index) {
      if(state.gameStarted === false || state.loading) {
        return;
      }
      if(state.board[index] === null) {
        var audio = new Audio(require('@/assets/sounds/click.mp3'));
        audio.play();
        dispatch('changeField', index);

        if(state.npcMode && state.gameStarted) { // NPC actions
          commit('setLoad', true);
          setTimeout(function() {
            dispatch('npcAction')
          }, 1200);
        }
      }
    },
    npcAction({ dispatch, state, commit }) {
      let freeFields = [];
      for(let i = 0; i < state.board.length; i ++) {
        if(state.board[i] === null) {
          freeFields.push(i);
        }
      }

      let newField = Math.floor(Math.random() * freeFields.length);

      dispatch('changeField', freeFields[newField]);
      commit('setLoad', false);
    },
    endGame({ commit }) {
      commit('resetGame');
      commit('setGameMode', null);
    }
  },
  getters: {
    gameMode(state) {
      let mode;
      if(state.npcMode) mode = "1 vs. NPC";
      else if(!state.npcMode) mode = "1 vs. 1";
      return mode;
    }
  }
})
