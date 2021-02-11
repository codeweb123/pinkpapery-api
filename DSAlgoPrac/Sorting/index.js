//bubble sort

//As looping through each item in an array you swap if something is larger.
//And then start the loop again.

function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}


function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j +1]) {
                //SWAP!
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j +1] = temp
            }
        }
    }
    return arr;
}

bubbleSort([37,45,29,8])