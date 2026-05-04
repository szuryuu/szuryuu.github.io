<script setup>
import { Github, MapPin } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col items-center text-center space-y-6">
    <div class="relative group">
      <div
        class="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 to-zinc-700 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"
      ></div>
      <img
        src="https://github.com/szuryuu.png"
        alt="szuryuu avatar"
        class="relative w-32 h-32 rounded-full object-cover border-2 border-zinc-800"
      />
    </div>

    <div>
      <h1 class="font-londrina text-5xl font-black tracking-wide text-zinc-100">
        szuryuu
      </h1>
      <p
        class="font-londrina text-xl font-light text-zinc-400 mt-2 flex items-center justify-center gap-2"
      >
        DevOps & Infrastructure
      </p>
      <div class="flex items-center justify-center gap-4 mt-4 text-zinc-500">
        <span class="flex items-center gap-1.5 text-sm font-medium">
          <MapPin :size="16" /> Sleman, ID
        </span>
        <a
          href="https://github.com/szuryuu"
          target="_blank"
          class="flex items-center gap-1.5 text-sm font-medium hover:text-zinc-200 transition-colors"
        >
          <Github :size="16" /> @szuryuu
        </a>
      </div>
    </div>
  </div>
</template>
