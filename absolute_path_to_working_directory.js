/**
 * This function takes a path from a file and returns the absolute directory path to this file.
 * @param {string} fileUrl Path to the current file (for example `import.meta.url`)
 * @returns {URL} The URL object with the absolute path
 */
export function absolutePathToWorkingDirectory(fileUrl) {
    return new URL('./', import.meta.url)
}
