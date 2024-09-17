function solve(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let stepCount = 0;

    // Determine the number of steps
    let width = base;
    let length = base;

    while (width > 0 && length > 0) {
        stepCount++;
        width -= 2;
        length -= 2;
    }

    // Reset width and length for calculations
    width = base;
    length = base;

    // Calculate resources for each step
    for (let i = 0; i < stepCount; i++) {
        let currentWidth = width - 2 * i;
        let currentLength = length - 2 * i;

        // Stone required (volume of the inner part of the step)
        let innerWidth = currentWidth - 2;
        let innerLength = currentLength - 2;
        if (innerWidth > 0 && innerLength > 0) {
            let stoneForStep = innerWidth * innerLength * increment;
            totalStone += stoneForStep;
        }

        // Decorative material required (volume of the outer layer of the step)
        let outerArea = currentWidth * currentLength;
        let innerArea = innerWidth > 0 && innerLength > 0 ? innerWidth * innerLength : 0;
        let outerMaterialVolume = (outerArea - innerArea) * increment;

        if (i === stepCount - 1) {
            // Top-most step made of gold
            totalGold += currentWidth * currentLength * increment;
        } else {
            if ((i + 1) % 5 === 0) {
                // Every fifth step from the bottom is made of lapis lazuli
                totalLapis += outerMaterialVolume;
            } else {
                // Other steps are made of marble
                totalMarble += outerMaterialVolume;
            }
        }
    }

    // Round up the total stone and gold, and round down the height of the pyramid
    totalStone = Math.ceil(totalStone);
    totalGold = Math.ceil(totalGold);
    let finalHeight = Math.floor(stepCount * increment);

    // Output the results
    console.log(`Stone required: ${totalStone}`);
    console.log(`Marble required: ${Math.floor(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.floor(totalLapis)}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${finalHeight}`);
}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23, 0.5);


/*
To solve the problem of calculating the resources required for building King Djoser's pyramid, we'll need to follow these steps:

1. Determine the number of steps in the pyramid.
2. Calculate the resources required for each step:
 - Stone: Volume of the inner part of each step.
 - Marble/Lapis Lazuli: Volume of the outer layer of each step.
 - Gold: Top-most step which is made entirely of gold.
3. Compute the final height of the pyramid.
4. Round the results accordingly.

Explanation:
1. Calculate the Number of Steps:
 - We start with the base width and length and reduce them by 2 each iteration until they are no longer positive. The count of iterations gives us the number of steps.

2. Calculate Resources:
 - Stone: For each step, compute the area of the inner part (excluding the outer layer) and multiply by the height increment.
 - Marble/Lapis Lazuli: Compute the volume of the outer layer by subtracting the inner area from the outer area and multiplying by the increment. Alternate every fifth step between marble and lapis lazuli.
 - Gold: The top-most step is made entirely of gold.

3. Round and Output Results:
 - Round the total stone and gold amounts using Math.ceil to ensure we account for partial blocks.
 - Round down the final height of the pyramid using Math.floor to get the complete number of steps.
 
This approach ensures that you calculate the exact amount of materials required and the final height of the pyramid accurately.
*/