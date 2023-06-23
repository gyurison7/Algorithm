function solution(s){
    var answer = true;
    var pCount = 0;
    var yCount = 0;

    for(let i=0; i<s.length; i++) {
        if(s[i] === 'p' || s[i] === 'P') {
            pCount++;
        }
        if(s[i] === 'y' || s[i] === 'Y') {
            yCount++;
        }
    }
    return pCount === yCount;
}