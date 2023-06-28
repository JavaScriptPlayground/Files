/**
 * This function takes a path string and returns if the path is a directory.
 * ```
 * pathIsDirectory('path/to/file.txt') // false
 * pathIsDirectory('./path/to/./file.txt') // false
 * pathIsDirectory('./path/to') // true
 * ```
 * @param {string} path The path that should be checked
 * @returns {boolean} If the path is a directory
 */
export function pathIsDirectory(path = '') {
    const regExMatchValidPath = /(\.[^./]+)$/;
    return !regExMatchValidPath.test(path);
}
