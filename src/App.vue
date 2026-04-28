<template>
  <div class="layout">
    <aside class="sidebar">
      <h2>教学系统</h2>
      <router-link to="/" class="menu-item">首页</router-link>
      <router-link to="/course" class="menu-item">课程管理</router-link>
    </aside>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>
