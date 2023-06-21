function solution(absolutes, signs) {
    var number;
    var sum = 0;
    for(i=0; i<absolutes.length; i++) {
        if(signs[i] == false) {
            number = absolutes[i] * -1;
        } else {
            number = absolutes[i];
        }
        sum += number
    }
    return sum;
}