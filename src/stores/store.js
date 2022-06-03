import { defineStore } from 'pinia';

const persistedState = {
  theme: sessionStorage.getItem('binlamps-theme'),
  wordSize: Number.parseInt(sessionStorage.getItem('binlamps-wordsize')),
  resultBase: sessionStorage.getItem('binlamps-resultbase'),
}

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    /** @type {'light' | 'dark'} */
    theme: persistedState.theme || 'light',
    /** @type { number } */
    wordSize: persistedState.wordSize || 8,
    /** @type {'dec' | 'bin' | 'hex'} */
    resultBase: persistedState.resultBase || 'dec'
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      sessionStorage.setItem('binlamps-theme', this.theme);
    },
    setWordSize(size) {
      this.wordSize = Number.parseInt(size);
      sessionStorage.setItem('binlamps-wordsize', this.wordSize);
    },
    setResultBase(format) {
      this.resultBase = format;
      sessionStorage.setItem('binlamps-resultbase', this.resultBase);
    }
  },
});
