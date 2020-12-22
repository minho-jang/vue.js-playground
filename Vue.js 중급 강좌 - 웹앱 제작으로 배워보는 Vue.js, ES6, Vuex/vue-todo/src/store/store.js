import Vue from  'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          const obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
          arr.push(obj);
        }
      }
    }

    return arr;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {
        completed: false, 
        item: todoItem
      };

      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, itemObj) {
      console.log(itemObj);
      localStorage.removeItem(itemObj.todoItem.item);
      state.todoItems.splice(itemObj.index, 1);
    },
    toggleOneItem(state, itemObj) {
      state.todoItems[itemObj.index].completed = !state.todoItems[itemObj.index].completed;
      // localStorage 수정 (삭제 후 삽입)
      localStorage.removeItem(itemObj.item);
      localStorage.setItem(itemObj.todoItem.item, JSON.stringify(itemObj.todoItem));
    },
    clearAllItems(state) {
      state.todoItems = [];
      localStorage.clear();
    }
  }
});