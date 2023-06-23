function solution(phone_number) {
    var answer = '';
    var length = phone_number.length - 4; // 뒤 4자리를 뺀 문자열 길이 구하기
    answer = '*'.repeat(length); // 위에서 구한 길이만큼 * 반복
    lastNum = phone_number.substr(length); // 위에서 구한 길이부터 문자열 자르기
    return answer + lastNum;; // 문자열 붙이기
}