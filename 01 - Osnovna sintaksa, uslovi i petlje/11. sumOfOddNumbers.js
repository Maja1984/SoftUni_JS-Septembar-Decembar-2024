function solve(n) {
    // Initialize the first odd number
    let oddNumber = 1;
    // Initialize the sum to 0
    let totalSum = 0;
    
    // Loop to generate and print n odd numbers
    for (let i = 0; i < n; i++) {
        console.log(oddNumber); // Print the current odd number
        totalSum += oddNumber; // Add the current odd number to sum
        oddNumber += 2; // Move to the next odd number
    }
    
    // Print the sum of the odd numbers
    console.log(`Sum: ${totalSum}`);
}

solve(5);
solve(3);