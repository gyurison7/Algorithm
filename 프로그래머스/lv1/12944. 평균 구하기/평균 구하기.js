function solution(arr) {
    var answer = 0;
    var sum = 0;
    var length = arr.length;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    answer = sum/length;
    return answer;
}