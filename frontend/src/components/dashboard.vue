<template>
  <main>
    <div>
      <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Welcome</h1>

      <hr class="mt-5 mb-5" />
      <h2 class="font-bold text-2xl text-black-700 tracking-widest text-center mt-10">Graph</h2>
      <hr class="mt-5 mb-5" />
      <DashGraph />

      <hr class="mt-5 mb-5" />
      <h2 class="font-bold text-2xl text-black-700 tracking-widest text-center mt-10">Table</h2>
      <DashTable />

    </div>
  </main>
</template>

<script>
import DashGraph from './graph.vue'
import DashTable from './table.vue'

export default {
  methods: {
    routePush(routeName) {
      this.$router.push({ name: routeName });
    },
  },
  components: {
    DashGraph,
    DashTable,
  }
};
</script>
