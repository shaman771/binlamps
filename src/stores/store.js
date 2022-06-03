import { defineStore } from 'pinia';

const persistedState = {
  theme: sessionStorage.getItem(getStorageKey('theme')),
  wordSize: Number.parseInt(sessionStorage.getItem(getStorageKey('wordsize'))),
  resultBase: Number.parseInt(
    sessionStorage.getItem(getStorageKey('resultbase'))
  ),
  lighted: Number.parseInt(sessionStorage.getItem(getStorageKey('lighted'))),
};

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    /** @type {'light' | 'dark'} */
    theme: persistedState.theme || 'light',
    /** @type { number } */
    wordSize: persistedState.wordSize || 8,
    /** @type {10 | 2 | 16} */
    resultBase: persistedState.resultBase || 10,
    /** @type { number } */
    lighted: persistedState.lighted || 0,
  }),
  getters: {
    bitRange: (state) =>
      Array.from(Array(state.wordSize))
        .map((item, idx) => {
          const bitWeight = Math.pow(2, idx);
          return {
            id: `bit-${bitWeight}`,
            label: String(bitWeight),
            weight: bitWeight,
            isOn: !!(state.lighted & bitWeight),
          };
        })
        .reverse(),
    maxNumber: (state) => Math.pow(2, state.wordSize),
    lightedToBase: (state) => state.lighted.toString(state.resultBase),
  },
  actions: {
    setLighted(num) {
      this.lighted = Number.parseInt(num, this.resultBase);
      sessionStorage.setItem(getStorageKey('lighted'), this.lighted);
    },
    toggleLighted(bitWeight) {
      const isLightedNow = !!(this.lighted & bitWeight);
      const mask = this.maxNumber - 1;
      this.lighted = isLightedNow
        ? this.lighted & (mask ^ bitWeight)
        : this.lighted | bitWeight;
      sessionStorage.setItem(getStorageKey('lighted'), this.lighted);
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      sessionStorage.setItem(getStorageKey('theme'), this.theme);
    },
    setWordSize(size) {
      this.wordSize = Number.parseInt(size);
      sessionStorage.setItem(getStorageKey('wordsize'), this.wordSize);
    },
    setResultBase(format) {
      this.resultBase = format;
      sessionStorage.setItem(getStorageKey('resultbase'), this.resultBase);
    },
  },
});

function getStorageKey(slug) {
  return `${import.meta.env.VITE_APP_NAME}-${slug}`;
}
