import Vue from 'vue'
import Vuex from 'vuex'

// vue 플러그인 사용
// vue를 사용하는 모든 영역에 (전역으로) 특정 기능을 추가하고 싶을 때
// global functionality를 사용하고 싶을 때 사용
// 특정 컴포넌트에서 접근이 가능

Vue.use(Vuex);

// localStrage 관련 동작
const storage = {
    fetch() {
        const arr = [];
        // 인스턴스가 생성 되자마자 호출되는 라이프사이클 훅
        // 생성되는 시점에 created의 logic이 호출됨
        if (localStorage.length > 0) {
            for (let i=0; i<localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}

// 다른 파일에서 접근 가능
export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        }
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        },
    }
});