const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//! results comparison
//?     append results      ||  insert results
//*ELA  3.8239 ms           ||  738.1145 ms
//*LA   401.9 μs            ||  6.9522 ms
//*MA   106.2 μs            ||  144.3 μs
//*SA   75.9 μs             ||  49.2 μs
//*TA   116.9 μs            ||  43.6 μs

// todo|| The pattern that emerges is that the append time scales in a uniform manner. Each time it's scaled the timeframe increases at a steady rate and continues to move fast even at large rates. The insert results start out faster and quickly show evidence that when scaling it will be a much slower runtime. Between the Medium and Large arrays there's a large shift in growth for the amount of time necessary to run the operation which only scales much harsher with time depending on the size of the information being passed into it.

//todo|| Given the information that we're seeing here in terms of scale-ability, the append operation scales better hands down over the insert method because it has much less that it has to do before it can complete on a large scale. This is referring to how append will place a new piece of information at the end and then continue the function. Whereas insert has to put something new at the front and then it has to re-number every number in the array before it can insert the next one.




