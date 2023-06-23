function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter((v) => v%divisor === 0).sort((a,b) => a-b);
    return answer.length !== 0 ? answer : [-1];
}

// function solution(arr, divisor) {
//     var answer = [];
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] % divisor == 0) {
//             answer.push(arr[i]);
//         }
//     }
//     if(answer.length == 0) {
//             answer.push(-1);
//         } else {
//             answer = answer.sort((a,b) => a - b);
//         }
//     return answer;
// }