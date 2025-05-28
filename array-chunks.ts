// Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size.

// Examples:
// Chunk size two:
//  chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]

// Chunk size two:
//  chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]

// Chunk size 3:
//  chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]

// Chunk size 4:
//  chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]

// Chunk size 10:
//  chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array: any, size: number): any[] => {
    const res = [];

    for (let i = 0; i < array.length; i++) {
        const subArray = array.slice(i, i + size);

        res.push(subArray);
        i = i + size - 1;
    }

    return res;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5], 3));
