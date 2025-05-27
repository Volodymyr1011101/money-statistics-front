export function normalizeDate(date) {
    const year = date.getFullYear();
    const month = checkZero(date.getMonth() + 1);
    const day = checkZero(date.getDate());
    return `${year}-${month}-${day}`;
}

function checkZero(value) {
    if (value < 10) {
        return `0${value}`;
    }
    return value;
}


const date = new Date().getDate();