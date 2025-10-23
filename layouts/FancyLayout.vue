<template>
  <section class="p-8">
    <header><slot name="header"><h1><slot /></h1></slot></header>
    <main><slot name="default"/></main>
    <footer class="mt-6 text-sm text-gray-500"><slot name="footer">Shared Theme Footer</slot></footer>
  </section>
</template>

<script setup>
</script>

<style scoped>
h1 { font-size: 2rem; }
section { background: #fff; border-radius: 8px; box-shadow: 0 6px 18px rgba(0,0,0,0.06); padding: 2rem; }
</style>
