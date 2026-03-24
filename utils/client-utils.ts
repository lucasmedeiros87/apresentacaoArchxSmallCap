/**
 * Safely checks if code is running in a browser environment
 */
export function isBrowser(): boolean {
  return typeof window !== "undefined"
}

/**
 * Safely gets window dimensions with fallback values for SSR
 */
export function getWindowDimensions() {
  if (!isBrowser()) {
    return { width: 1200, height: 800 } // Default fallback values
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

/**
 * Creates a safe wrapper for browser-only code
 * @param callback Function to execute in browser environment
 */
export function runOnlyInBrowser(callback: () => void): void {
  if (isBrowser()) {
    callback()
  }
}
