function solution(price, money, count) {
    var answer = -1;
    var sum = 0;
    for(let i=1; i<=count; i++) {
        sum += price*i; // 총 금액 구하기
    }
    if(sum > money) { // 총 금액이 money보다 크면
        answer = sum - money; // 총 금액에서 money 빼기
    } else {
        answer = 0;
    }
    return answer;
}

// function solution(price, money, count) {
//     for(let i=1; i<=count; i++) {
//         money -= price*i;
//     }
//     return money > 0 ? 0 : Math.abs(money);
// }