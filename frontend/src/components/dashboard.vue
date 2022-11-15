<template>
  <main>
    <div>
      <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Welcome</h1>

      <h2 class="font-bold text-2xl text-black-700 tracking-widest text-center mt-10">Graph</h2>
      <DashGraph />

    </div>
  </main>
</template>

<script>
import DashGraph from './graph.vue'

export default {
  methods: {
    routePush(routeName) {
      this.$router.push({ name: routeName });
    },
  },
  components: {
    DashGraph
  }
};
</script>
