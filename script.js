// // 1.
// function highPass(arr, cutoff) {
//     var filteredArr=[];
//     for(let i=0; i<arr.length; i++)
//     if (arr[i] > cutoff)
//     filteredArr.push(arr[i])
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]
// // 2.
// function evensOfOdds(arr) {
//     var totalOdds = 0;
//     var totalEvens = 0;
//     // your code here
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2==0) 
//             totalEvens= totalEvens+arr[i] 
//             //shorthand"totalEvens+=arr[i]
            
//             else{
//                 totalOdds= totalOdds+arr[i]
//             }
                
//     } 
//     if(totalEvens>totalOdds==true) 
//     console.log("evens are larger")
// }
// var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
// 3.
// function betterThanAverage(arr) {
//     var sum = 0;
//     // calculate the average
//     for (i=0; i<arr.length; i++) {
//         sum = sum + arr[i];
        
//     }
//         sum= sum / arr.length;
//     var count = 0
//     // count how many values are greated than the average
//     for (i=0; i<arr.length; i++) {
//         if(sum<arr[i])
//         count++
//     }
//     console.log(count)
// }
    
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4
// 4.
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for(i=2; i<n; i++)
    fibArr.push(fibArr[i-2] + fibArr[i-1])
    // temp = (fibArr.legnth[i]-1) + (fibArr.length[i])
    // fibArr.push(temp)
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]