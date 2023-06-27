/**
 * This function takes in a path to a file and returns the file extension.
 * @param {string} path The path to the file
 * @returns {string} The file extension
 */
export function getFileExtension(path = '') {
    return path.replace(/^.*\.([^.]*)$/, (_, extension) => extension);
}
