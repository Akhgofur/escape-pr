let mapArray = (arr, func = (i) => i) => {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let res = func(arr[i])
        result.push(res)
    }
    return result
}
let arr  = []
let sm = arr.map(item => item)
let sm2 = mapArray(arr, (item) => item)