function solution(arr1, arr2) {
    var ans = [[]];
    for(let i=0; i<arr1.length; i++) {
        ans[i] = [];
        for (let j=0; j<arr1[i].length; j++) {
            ans[i].push(arr1[i][j]+arr2[i][j]);
        }
    }
    return ans;
}