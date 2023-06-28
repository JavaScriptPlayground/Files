/**
 * This function takes a path string and returns if the path is a directory.
 * ```
 * 'path/to/file.txt' => false
 * './path/to/file.txt' => false
 * './path/to' => true
 * ```
 * @param path The path that should be checked
 * @returns {boolean} If the path is a directory
 */
export function pathIsDirectory(path = '') {
    const regExMatchValidPath = /(\.[^./]+)$/;
    return !regExMatchValidPath.test(path);
}
