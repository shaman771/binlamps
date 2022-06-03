import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    /** @type {'light' | 'dark'} */
    theme: 'light',
    /** @type { number } */
    wordSize: 8,
    /** @type {'dec' | 'bin' | 'hex'} */
    digitFormat: 'dec'
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark');
    },
    setWordSize(size) {
      this.wordSize = Number.parseInt(size);
    },
    setDigitFormat(format) {
      this.digitFormat = format;
    }
  },
});
