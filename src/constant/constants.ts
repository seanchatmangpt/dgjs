// config.ts or constants.ts

// Node.js style access or frontend with configured env var injection
const getEnv = (key: string, defaultValue: string): string => {
  // For Node.js
  if (typeof process !== "undefined" && process.env[key]) {
    return process.env[key] as string;
  }

  // For frontend environments, adjust depending on your setup (e.g., using window.env for some bundlers)
  const globalEnv = typeof window !== "undefined" ? window : {};
  const envVar = (globalEnv as any).__env
    ? (globalEnv as any).__env[key]
    : null;

  return envVar || defaultValue;
};

export const DEFAULT_TOPIC = getEnv("DEFAULT_TOPIC", "general"); // Use 'REACT_APP_DEFAULT_TOPIC' for CRA
