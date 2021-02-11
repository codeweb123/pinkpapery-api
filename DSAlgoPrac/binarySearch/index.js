// only used on sorted arrays. Split the arr /divide and conquer

//Math.floor() rounds to the largest #

//Big O - best O(1) and worst O(n)

function binarySearch(arr, elem) {

    let start = 0
    let end = arr.length -1
    let middle = Math.floor((start + end)/2)

while(arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
        end = middle -1
    } else {
        start = middle + 1
    }
    middle = Math.floor((start + end) /2)
    }
    return middle
    }

binarySearch([2,5,6], 5)
