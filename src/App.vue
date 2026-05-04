<script setup>
import ProfileHeader from "./components/ProfileHeader.vue";
import ContributionGraph from "./components/ContributionGraph.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<template>
  <main
    class="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative transition-colors duration-300"
  >
    <ThemeToggle />
    <ProfileHeader />
    <ContributionGraph />
  </main>
</template>
