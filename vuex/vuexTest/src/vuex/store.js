import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    count:1,
}

const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}

//与Mutations功能基本一样，区别是，actions是异步的改变state状态，而Mutations是同步
const actions={
    // context：上下文对象，这里你可以理解称store本身
    addAction(context){
        context.commit('add',4)
    },
    reduceAction(context){
        context.commit('reduce')
    }

}

//计算过滤操作
const getters={
    count:function(state){
        return state.count+=100;
    }
}

//module模块组
// const moduleA={
//     state,mutations,getters,actions
// }
// export default new Vuex.Store({
//     modules:{a:module}
// })


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})


