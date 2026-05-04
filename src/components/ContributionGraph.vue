<script setup>
import { computed } from "vue";
import { useTheme } from "../composables/useTheme";

const { isDark } = useTheme();

const chartUrl = computed(() => {
  const color = isDark.value ? "39d353" : "40c463";
  return `https://ghchart.rshah.org/${color}/szuryuu`;
});
</script>

<template>
  <div class="w-full max-w-4xl mx-auto mt-12">
    <h2
      class="font-londrina text-2xl font-normal text-zinc-700 dark:text-zinc-300 mb-6 text-center lg:text-left"
    >
      Commit Activity
    </h2>
    <div
      class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl overflow-x-auto shadow-sm dark:shadow-none transition-colors duration-300"
    >
      <img
        :src="chartUrl"
        alt="szuryuu's GitHub Contributions"
        class="min-w-[700px] w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  </div>
</template>
