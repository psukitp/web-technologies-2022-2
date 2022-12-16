// 1 задание
const pickPropArray = (srcArr, prop) => {
    return srcArr.reduce((resArr, el) => {
        if (el[prop]) resArr.push(el[prop])
        return resArr
    }, []);
}

// 2 задание
const createCounter = () => {
    let count = 0;
    return () => ++count;
}

// 3 задание
const spinWords = (str) => {
    return str
        .replace(/\s+/g, ' ')
        .trim()
        .split('')
        .map(el=> (el.toLowerCase() != el.toUpperCase() || el === ' ') ? el : '')
        .join('')
        .split(' ')
        .map(el => el.length >= 5 ? el.split('').reverse().join('') : el)
        .join(' ')
}