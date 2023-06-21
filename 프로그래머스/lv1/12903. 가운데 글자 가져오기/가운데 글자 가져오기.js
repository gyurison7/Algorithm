function solution(s) {
    var answer = '';
    length = s.length;
    len = Math.floor(length/2);
    if(length %2 == 0){
        answer = s[len-1]+s[len]
    } else {
        answer = s[len]
    } 
    return answer;
}