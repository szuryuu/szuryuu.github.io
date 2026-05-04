<script setup>
const chartUrl = "https://ghchart.rshah.org/27272a/szuryuu";
</script>

<template>
  <div class="w-full max-w-4xl mx-auto mt-12">
    <h2
      class="font-londrina text-2xl font-normal text-zinc-300 mb-6 text-center lg:text-left"
    >
      Commit Activity
    </h2>
    <div
      class="bg-zinc-900 border border-zinc-800 p-4 rounded-xl overflow-x-auto"
    >
      <img
        :src="chartUrl"
        alt="szuryuu's GitHub Contributions"
        class="min-w-[700px] w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  </div>
</template>
