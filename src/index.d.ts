import type { config } from 'typescript-eslint';

export const defineConfig: typeof config;

export const js: Parameters<typeof config>;
export const prettier: Parameters<typeof config>;
export const vue: Parameters<typeof config>;
export const vue2: Parameters<typeof config>;

export type TsOptions = {
  vue?: boolean;
};
export const ts: (options?: TsOptions) => Parameters<typeof config>;
