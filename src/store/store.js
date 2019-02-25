import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'


// vue 플러그인 사용
// vue를 사용하는 모든 영역에 (전역으로) 특정 기능을 추가하고 싶을 때
// global functionality를 사용하고 싶을 때 사용
// 특정 컴포넌트에서 접근이 가능

Vue.use(Vuex);

// 다른 파일에서 접근 가능
export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});