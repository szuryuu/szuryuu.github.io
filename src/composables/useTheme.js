import { ref, watchEffect } from "vue";

const isDark = ref(
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : true,
);

const toggleTheme = () => {
  isDark.value = !isDark.value;
};

watchEffect(() => {
  if (typeof document !== "undefined") {
    if (isDark.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
});

export function useTheme() {
  return { isDark, toggleTheme };
}
