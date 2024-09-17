function solve(goldMined) {
    const goldPricePerGram = 67.51; // in lv.
    const bitcoinPrice = 11949.16; // in lv.
    let totalMoney = 0;
    let bitcoinsPurchased = 0;
    let firstBitcoinDay = -1;

    // Iterate over the gold mined array
    for (let day = 0; day < goldMined.length; day++) {
        let gold = goldMined[day];
        
        // Apply theft reduction every third day
        if ((day + 1) % 3 === 0) {
            gold *= 0.7; // 30% stolen
        }
        
        // Convert gold to money
        totalMoney += gold * goldPricePerGram;
        
        // Check if we can buy bitcoins
        while (totalMoney >= bitcoinPrice) {
            if (firstBitcoinDay === -1) {
                firstBitcoinDay = day + 1; // days are 1-indexed
            }
            bitcoinsPurchased++;
            totalMoney -= bitcoinPrice;
        }
    }

    // Round remaining money to two decimal places
    totalMoney = Math.round(totalMoney * 100) / 100;

    // Output the results
    console.log(`Bought bitcoins: ${bitcoinsPurchased}`);
    if (bitcoinsPurchased > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

// Example usage:
solve([100, 200, 300]); // Example 1
solve([50, 100]); // Example 2
solve([3124.15, 504.212, 2511.124]); // Example 3


/*
To solve the problem of calculating the total amount of bitcoins purchased with mined gold, we'll need to follow these steps:

1. Process each day's mined gold:
 - Apply a 30% reduction every third day.
 - Convert the mined gold to money based on the given gold price.
 - Accumulate the total money.

2. Check if you can purchase a bitcoin:
 - Each bitcoin has a fixed price.
 - Determine how many bitcoins can be purchased with the accumulated money.
 - Track the day you first buy a bitcoin.

3. Output the results:
 - The total number of bitcoins purchased.
 - The day on which you bought your first bitcoin.
 - The remaining money after all possible bitcoin purchases.

Explanation:
1. Iterate Over Days:
 - For each day, check if it's a theft day (every third day). If it is, reduce the gold mined by 30%.
 - Convert the remaining gold to money and add it to the total money.

2. Check Bitcoin Purchase:
 - Use a while loop to check if the total money is enough to buy at least one bitcoin. If it is, purchase as many bitcoins as possible and keep track of the first day a bitcoin was purchased.

3. Output Results:
 - Print the total number of bitcoins bought.
 - Print the day on which the first bitcoin was purchased if any were bought.
 - Print the remaining money, rounded to two decimal places.

This approach ensures efficient calculation and proper handling of each day's mined gold and theft effects. It also maintains clarity in output format and rounding for accurate results.
*/