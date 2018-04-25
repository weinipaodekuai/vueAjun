<template>
    <div>
        <h2>{{msg}}</h2>
        <hr>
        <h3>{{count}}</h3>
        <div>
            <!-- <button @click="$store.commit('add',10)">加</button> -->
            <!-- <button @click="$store.commit('reduce')">减</button> -->

            <button @click="add(10)">加</button>
            <button @click="reduce">减</button>
        </div>

        <p>
            <button @click="addAction">加</button>
            <button @click="reduceAction()">减</button>
        </p>
    </div>
</template>

<script>
import store from "@/vuex/store";

//赋值（使输出由原来 {{$store.state.count}} 变成 {{count}}）
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      msg: "halo vuex"
    };
  },

  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
  },

  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction","reduceAction"])
  },
  store
};
</script>

