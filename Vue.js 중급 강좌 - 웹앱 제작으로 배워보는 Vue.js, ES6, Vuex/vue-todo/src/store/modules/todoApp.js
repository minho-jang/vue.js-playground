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

const state = {
  todoItems: storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
};

const mutations = {
  addOneItem(state, todoItem) {
    const obj = {
      completed: false, 
      item: todoItem
    };
  
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, itemObj) {
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

export default {
  state,
  getters,
  mutations
}