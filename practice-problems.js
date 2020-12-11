/* 
function sum(array) {
    let sum = 0, ticks=1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        ticks++;
    }
    return {result: sum, ticks};
}
//console.log(
//sum([1,2,3]),
//sum([1,2,3,4,5,6,7,8,9,10]),
//sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]))


function getRandomItem(array) {
    let ticks = 0;
    // Get a random number and access that element in the array
    const item = array[Math.floor(Math.random() * array.length)];
    ticks++;
    return {
        result: item,
        ticks: ticks
    };
}

/* console.log(getRandomItem([1,2,3]),
getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
     27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 
     53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 
    76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100])) */

    function howManyLessThanNitems(arr, n) {
        let ticks = 0;
        /* If the 1st element in the array is greater than `n`, return 0,
           because no items in the array are less than `n`. */
        if (!arr.length || arr[0] >= n) {
            ticks++;
            return 0;
        }
    
        let lowIndex = 0, highIndex = arr.length;
    
        while (highIndex > lowIndex) {
            // Find midpoint
            let midIndex = Math.floor((highIndex + lowIndex) / 2);
            /* If `midIndex` element is greater than `n`, that means all elements
               to the right of `midIndex` are also greater than `n`, so
               we only need to focus on elements to the left of `midIndex`.
               We set `highIndex` to the current value of `midIndex` so next time
               through the loop, we'll only look at the left half */
            if (arr[midIndex] >= n) {
                highIndex = midIndex;
                ticks++;
            }
    
            /* If the element to the right of `midIndex` is less than `n`, then we
               know that we need to check the items to the right of `midIndex`, so
               we set `lowIndex` to the current value of `midIndex`, so that next
               time through the loop we only look at the right side */
            else if (arr[midIndex + 1] < n) {
                lowIndex = midIndex;
                ticks++;
            }
    
            /* Otherwise, if the element to the right of `midIndex` is greater
               than or equal to `n`, we know that the item at `midIndex` is the last
               item that's less than `n`, so we return `midIndex +  1` to get the total
               number of items that are less than `n` */
            else {
                ticks++;
                return {
                    result: midIndex + 1,
                    ticks: ticks
                }
            }
        }
    }
    //console.log(
    //howManyLessThanNitems([1,2,3], 2),
    //howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99 ))


    function findMin(array){
        let min = array[0], ticks = 1;
        for (let i = 1; i < array.length; i++) {
            ticks++;
            if (array[i] < min) {
                min = array[i];
            }
        }
        return {
            result: min,
            ticks: ticks
        };
    }
    
  /*   findMin([1,2,3]),
    findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
         26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
          50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
           74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
            98, 99, 100]))  */


/* 1. What is the Big O for this?
    1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people.
     You want to find a playmate for your dog, preferably of the same breed. So you want to know 
     if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, 
     who here has a golden retriever and would like to be a playdate for my golden. Someone yells
      - "I do, be happy to bring him over"
    ANSWER: Constant time O(1)
            
    2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
    You want to find a playmate for your dog who is of the same breed. So you want to know if anyone
     out of the 15 people have the same breed as your dog. You start with the first person and ask 
     him if he has a golden retriever. He says no, then you ask the next person, and the next, and 
     the next until you find someone who has a golden or there is no one else to ask.
    ANSWER: Linear time O(n)

2. Even or odd
What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
ANSWER: Constant time O(n) because regardless of how big the input value is the function only has to run one time.


3. Are you here?
What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

ANSWER: Polynomial time O(n^2) because the algorithm requires 2 levels of looping over an input.



4. Doubler
What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

ANSWER: Linear time O(n) because as the size of the array increases, the amount of loops needed to complete the algorithm increases proportionately.

5. Naive search
What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
ANSWER: Linear time O(n) because as the array size increases more items need to be checked


6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
ANSWER: Polynomial time O(n^2) because there are 2 levels of looping over the input



7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

ANSWER: Linear time O(n) because as the array size increases more items need to be checked

8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

ANSWER: Logarithmic time O(log(n)) because the problem is cut in claf each round through

9. Random element
What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

ANSWER: Constant time O(1) because the algorithm is getting one random value from the array regardless of the size

10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

ANSWER: This algorithm checks to see how many integers equal to or less than itsef it is not evenly divisible by.
It is Linear time O(n) because the number of times the loop runs is directly related to the size of the number.
 */
  const towerOfHanoi = (n, start, end, middle) =>{
     if(n == 1){
         console.log(`move ${n} from tower ${start} to tower ${end}`)
     }
     else{
         towerOfHanoi(n-1, start, middle, end )
         console.log(`move ${n} from tower ${start} to tower ${end}`)
         towerOfHanoi(n-1, middle, end, start )
     }
 }
 towerOfHanoi(4, 'A', 'C', 'B')
 


/* 12. Iterative version
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively. */
//1. Counting sheep 

/* Complexity:
Recursive: Linear time O(n)
Iterative: Linear time O(n) */

    const sheepCounter = (n) =>{

        for(let i=n;i>=0;i--){
            if(i==0){
                console.log( `All sheep jumped over the fence`)
            }
            else{
            console.log( `${i}: Another sheep jumps over the fence`)
            }
        }
    }
    //console.log(sheepCounter(3))


    //2.Power calculator

/* Complexity:
Recursive: Linear time O(n)
Iterative: Linear time O(n) */


    const powerCalculator = (x, n) =>{
        var result = 1;
        for(let i=0;i<n;i++){
            
            result *= x
        }
        return result
    }
    //console.log(powerCalculator(12, 2))

    //3. Reverse String

/* Complexity:
Recursive: Linear time O(n)
Iterative: Linear time O(n) */

    const reverseString = (string) =>{
        var output = '';
        var n = 1;
        for(let i=0;i<string.length;i++){
            output += string[string.length-n]
            n++
        }
        return output
    }
   // console.log(reverseString('stringy'))


   //4. nth triangular number

/* Complexity:
Recursive: Linear time O(n)
Iterative: Linear time O(n) */
   const nthTriangularNumber = (n) =>{
       var sum = 0;
       for(let i=0;i<=n;i++){
           sum += i
       }
       return sum
   }
   //console.log(nthTriangularNumber(7))

   //5. String Splitter

/* Complexity:
Recursive: Linear time O(n)
Iterative: Linear time O(n) */

   const stringSplitter = (string, separator) =>{
       var newstring='';
       for(let i=0;i<string.length;i++){
           newstring += string[i].replace(separator, ',')
       }
       return newstring
   }
   //console.log(stringSplitter('09/22/1234', '/'))

//6. Fibonacci

/* Complexity:
Recursive:Linear time O(n)
Iterative: Linear time O(n) */
   const fibonacci = (n) =>{
       var fibSequence =[];
       for(let i=0;i<n;i++){
           if(i == 0 || i ==1){
               fibSequence.push(1)
           }
           else{
               fibSequence.push(fibSequence[i-2]+fibSequence[i-1])
           }
       }
       return fibSequence.toString()
   }
   //console.log(fibonacci(7))


   //7. Factorial

/* Complexity:
Recursive: Linear time O(n)
Iterative: Linear time O(n) */

   const factorial = (n) =>{
       var product =1;
       for(i=1;i<=n;i++){
           product *= i
       }
       return product
   }
  // console.log(factorial(7))