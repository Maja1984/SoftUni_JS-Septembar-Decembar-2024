function solve(M, N) {
    for (let i = M; i >= N; i--) {
        console.log(i);
    }
}

solve(6, 2);
solve(4, 1);

// ============================================================================ //

function solve2(M, N) {
    let i = M;
    while (i >= N) {
        console.log(i);
        i--;
    }
}

solve2(6, 2);
solve2(4, 1);