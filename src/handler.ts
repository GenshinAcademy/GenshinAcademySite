export function getKey(value: any) {
    if (value) return Object.keys(value).toString();
    else return '';
}

export function getValue(value: any) {
    if (value) return Object.values(value).toString();
    else return '';
}

export function clearObj(obj: any) {
    for (const prop of Object.getOwnPropertyNames(obj)) {
        delete obj[prop];
    }

    return obj;
}