function solution(t, p) {
    var answer = 0;
    var num = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        num = t.substr(i,p.length);
        if(num <= p) {
           answer++;
        }
    }
    return answer;
}