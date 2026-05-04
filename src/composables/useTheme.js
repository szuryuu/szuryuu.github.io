import { ref, watchEffect } from "vue";

const getInitialTheme = () => {
  if (typeof window === "undefined") return true;

  const storedTheme = localStorage.getItem("theme-preference");
  if (storedTheme) {
    return storedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const isDark = ref(getInitialTheme());

const toggleTheme = () => {
  isDark.value = !isDark.value;
};

watchEffect(() => {
  if (typeof window !== "undefined") {
    if (isDark.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme-preference", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme-preference", "light");
    }
  }
});

export function useTheme() {
  return { isDark, toggleTheme };
}
