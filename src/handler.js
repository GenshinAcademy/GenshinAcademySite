export function getKey(value) {
    if (value) return Object.keys(value).toString()
    else return ''
}

export function getValue(value) {
    if (value) return Object.values(value).toString()
    else return ''
}

export function clearObj(obj) {
    for (const prop of Object.getOwnPropertyNames(obj)) {
        delete obj[prop];
    }

    return obj
}