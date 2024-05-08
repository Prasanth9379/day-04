//DO THE BELOW PROGRAM IN ANONYMOUS FUNCTION  & IIFE

// 1.Print odd number in array
var arr=[1,2,3,4,5,6,7];
var prob=function(array){
for(var i = 0 ; i< arr.length ; i++){
if(arr[i]%2!=0){
console.log(arr[i])
}
}
}
prob()

//2Convert all the strings to title caps in a string array

var res=function() {
    const arr = ["apple", "banana", "cherry"];
    const titleCaps = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log("Title Caps Array:", titleCaps);
    }
    res()


//3.Sum of all number in array
var num=[1,2,3,4,5,6];
var sum=0;
var prob=function(array){
for(var i=0;i<num.length;i++){
sum=sum+num[i];
}
console.log(sum);
}
prob()

//4.Return all the prime number in a array
(
    function(numArray){
    numArray=numArray.filter((number)=>{
    for (var i = 2; i <= Math.sqrt(number); i++){
    if (number % i === 0) return false;
    }
    return true;
    });
    console.log(numArray);
    })([1,2,3,4,5,6])


//5.Return all the palindromes in an array
var def=function() {
    const words = ["level", "hello", "radar", "world"];
    const isPalindrome = str => str === str.split('').reverse().join('');
    const palindromes = words.filter(isPalindrome);
    console.log("Palindromes:", palindromes);
    }
    def()

//6.Return median of two sorted arrays of the same size
var code=function() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArray.length;
    const median = (mergedArray[Math.floor((length - 1) / 2)] + mergedArray[Math.ceil((length - 1) / 2)]) / 2;
    console.log("Median:", median);
    }
    code()


//7.Remove duplicates from an array
let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
var sum=function(arr){
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(sum(arr));

//8.Rotate an array by k times
var sum=function() {
    const arrayToRotate = [1, 2, 3, 4, 5];
    const k = 2;
    const rotatedArray = arrayToRotate.slice(k).concat(arrayToRotate.slice(0, k));
    console.log("Rotated Array:", rotatedArray);
    }
    sum()





    
//Programs in arrow function:



//1.Print odd numbers in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = arr.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

//2.Convert all the strings to title caps in a string array
const arr = ["apple", "banana", "cherry"];
const titleCaps = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log("Title Caps Array:", titleCaps);

//3.Sum of all numbers in an array
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

//4.Return all the prime numbers in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var isPrime = num => {
for (let i = 2; i < num; i++)
if (num % i === 0) return false;
return num > 1;
};
const primeNumbers = numbers.filter(isPrime);
console.log("Prime Numbers:", primeNumbers);

//5.Return all the palindromes in an array
var words = ["level","hello","radar","world"];
var isPalindrome = str => str === str.split('').reverse().join('');
var palindromes = words.filter(isPalindrome);
console.log("Palindromes:", palindromes);