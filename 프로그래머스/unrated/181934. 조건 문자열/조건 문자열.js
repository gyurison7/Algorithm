function solution(ineq, eq, n, m) {
    var answer = 0;
    if ((n > m && ineq === ">") || (n < m && ineq === "<") || (n === m && eq === "=")) {
       answer = 1;
    }
    return answer;
}



 