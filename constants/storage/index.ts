export enum LocalStorageKey {
  DARK_THEME = 'dark-theme',
}

export type TLocalStorageKey = `v${number}-${string}-${LocalStorageKey}`;

export const LOCAL_STORAGE_VERSION = 'v1';

export const LOCAL_STORAGE_KEYS: Record<LocalStorageKey, TLocalStorageKey> = {
  [LocalStorageKey.DARK_THEME]: `${LOCAL_STORAGE_VERSION}-ipx-${LocalStorageKey.DARK_THEME}`,
};
