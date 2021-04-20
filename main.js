let pushZerosToEnd = (arr, n) => {
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0)
            arr[count++] = arr[i];
    }

    while (count < n)
        arr[count++] = 0;
}

let convertToFictionalInteger = (arr, n) => {
    let fictionalIntArr = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            if (i === n - 1)
                fictionalIntArr[i] = arr[i] + 1;
            else
                fictionalIntArr[i] = arr[i];
        }
    }

    fictionalIntArr[fictionalIntArr.length - 1] += 1;

    return fictionalIntArr;
}

let multiplyOddAndFindGreaterSum = (arr, n) => {
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0)
            arr[i] = arr[i] * -1;
    }

    console.log('array multiplied by -1 in even positions', arr);

    return largestArraySum(arr, n);
}

let largestArraySum = (arr, n) => {
    let arraySum = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0)
            arraySum += arr[i];
    }

    return arraySum;
}

// Push all zeros to end of array
let arr = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0];
let n = arr.length;
console.log('array before pushing all zeros to end of array', arr);

pushZerosToEnd(arr, n);
console.log('array after pushing all zeros to end of array', arr);

// Make fictitious integer
const fictionalIntArr = convertToFictionalInteger(arr, n);
console.log('fictional integer array with last item plus one', fictionalIntArr);

// Multiple even positions by -1 and find the greater sum in the array
console.log('find greater sum in array', multiplyOddAndFindGreaterSum(fictionalIntArr, fictionalIntArr.length));
