export function stringConvert(str) {
    const resultArr = str.split("\n");
    return resultArr.filter(n => n);
}



export function truncateDescription(desc, maxLength) {
    if (desc.length <= maxLength) {
        return desc;
    }
    return desc.slice(0, maxLength) + '...';
}



export function formatArray(arr) {
    let result = arr.join(",");
    result = result.replaceAll(",", "\n");
    return result;
}