export default function stringConvert(str) {
    const resultArr = str.split("\n");
    return resultArr.filter(n => n);
}



export default function truncateDescription(desc, maxLength) {
    if (desc.length <= maxLength) {
        return desc;
    }
    return desc.slice(0, maxLength) + '...';
}