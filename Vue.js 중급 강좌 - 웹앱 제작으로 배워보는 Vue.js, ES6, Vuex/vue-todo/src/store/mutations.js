const addOneItem = (state, todoItem) => {
  const obj = {
    completed: false, 
    item: todoItem
  };

  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
}

const removeOneItem = (state, itemObj) => {
  localStorage.removeItem(itemObj.todoItem.item);
  state.todoItems.splice(itemObj.index, 1);
}

const toggleOneItem = (state, itemObj) => {
  state.todoItems[itemObj.index].completed = !state.todoItems[itemObj.index].completed;
  // localStorage 수정 (삭제 후 삽입)
  localStorage.removeItem(itemObj.item);
  localStorage.setItem(itemObj.todoItem.item, JSON.stringify(itemObj.todoItem));
}

const clearAllItems = (state) => {
  state.todoItems = [];
  localStorage.clear();
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }