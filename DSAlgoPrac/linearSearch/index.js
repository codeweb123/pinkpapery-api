//Linear search - searcing each item one by one in an array.

//.indexOf (returns the first index of string)
//.includes  (T or F)

Animal = ['dog', 'cat', 'squirrel']

Animal.indexOf('cat')
Animal.includes('cat')

function linearSearch(arr, val) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) 
        return i
    }
}

linearSearch([34,51,1,2,3,4,100], 100)

//BIG O
//Best O(1)
//Worst O(n)

