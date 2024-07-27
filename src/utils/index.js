export const ignoreEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
}

export const stopPropagation = (e) => {
    e.stopPropagation();
}