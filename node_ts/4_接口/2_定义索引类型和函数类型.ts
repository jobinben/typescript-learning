// 通过interface 来定义索引类型
interface IIndexLanguage{
    [index: number]: string
}

const frontendLanguage: IIndexLanguage = {
    0: 'HTML',
    1: 'CSS',
    2: 'JavaScript',
    3: 'Node'
}

interface IIndexName {
    [index: string]: number 
}

const languageYear: IIndexName = {
    'C': 1972,
    'Java': 1995,
    'JavaScript': 1996,
    'TypeScript': 2014
}

interface CaleFn {
    (n1: number, n2: number): number
}
function cale(n1: number, n2: number, fn: CaleFn) {
    return fn(n1, n2)
}

const add: CaleFn = (n1, n2) => {
    return n1 + n2
}

const res = cale(10, 20, add)
console.log(res)

export {}