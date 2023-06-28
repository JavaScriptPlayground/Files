/**
 * This function takes a path an a separator and returns the normalized path.
 * ```
 * normalizePath('this///////is/a//very/messed//./up//.//long/../path//to///a//..../special/../file///.///');
 * // this/is/a/very/messed/up/long/../path/to/a/../../special/../file
 * ```
 * @param {string} path The path to normalize
 * @param {string} separator The separator for the path to use 
 * @returns {string} The normalized path
 */
export function normalizePath(path = '', separator = '/') {
    const regExMatchSeparatorPosionReplacement = /\/{2,}(?:\.\/+)?|(?<=\/(?:\.\.)+)\.\/|(?<=\/(?:\.\.)+)(?!\/)/g;
    return path.replace(
        regExMatchSeparatorPosionReplacement,
        separator
    ).replace(
        /^\/+|\/+$/,
        ''
    );
}
