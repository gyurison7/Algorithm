function solution(array, commands) {
    var answer = [];
    return commands.map((v,i) =>
        array.slice(v[0]-1,v[1]).sort((a, b) => a - b)[v[2]-1]
    )
}