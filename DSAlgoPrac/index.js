//JS built in method Arry.sort
//MDN doc - Unicode used to repr strings and converted

//Can tell JS how to sort

//Sort by Alpha order
['Jiyon', 'Trammell', 'Algo', 'DS'].sort()
//(4) ["Algo", "DS", "Jiyon", "Trammell"]


//Number
function numberCompare(num1, num2) {
    return num1 - num2
    //return num2 - num1 (desc order)
}

[6,4,3,7].sort(numberCompare) //ascending order

//Length of Strings

function compareByLen(str1, str2) {
    return str1.length - str2.length
}

['Jiyon', 'Trammell', 'Algo', 'DS'].sort(compareByLen)