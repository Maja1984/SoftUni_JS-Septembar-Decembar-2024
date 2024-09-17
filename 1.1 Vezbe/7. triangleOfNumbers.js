function solve(n) {
    let row = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            row += i + ' '
        }
        console.log(row)
        row = ''
    }
}

solve(3);
solve(5);
solve(6);