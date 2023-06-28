export function normalizePath(pathArray = '', separator = '/') {
    const regExMatchSeparatorPosionReplacement = /\/{2,}(?:\.\/+)?|\/\.\/|(?<=\/(?:\.\.)+)\.\/|(?<=\/(?:\.\.)+)(?!\/)/g;
    return separator + pathArray.replace(
        regExMatchSeparatorPosionReplacement,
        separator
    ).replace(
        /^\/+|\/+$/,
        ''
    ) + separator;
}
