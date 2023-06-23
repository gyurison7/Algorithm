function solution(a, b) {
    const day = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    const month = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    let date = 0;
    for(let i=0; i<a; i++) {
        date += month[i];
    }
    date += b;
    answer = date%7;
    return day[answer];
}
