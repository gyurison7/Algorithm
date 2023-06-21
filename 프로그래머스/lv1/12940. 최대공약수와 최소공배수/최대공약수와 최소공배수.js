function solution(n, m) {
    var answer = [];
    var max = 0;
    var min = 0;
    for(let i=0; i<=m; i++) {
        if(n%i === 0 && m%i === 0) {
            max = i;
        }
    }
    min = n*m / max;
    answer.push(max, min);
    return answer;
}