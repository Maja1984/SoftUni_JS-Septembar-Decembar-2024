function solve(group, type, day) {
    let final = 0;

    if (type === "Students") {
        if (day === "Friday") {
            final = group * 8.45;
        } else if (day === "Saturday") {
            final = group * 9.80;
        } else if (day === "Sunday") {
            final = group * 10.46;
        }

        // Apply discount for Students
        if (group >= 30) {
            final -= final * 0.15; // 15% discount
        }
    } else if (type === "Business") {
        // Base price calculation
        if (day === "Friday") {
            final = group * 10.90;
        } else if (day === "Saturday") {
            final = group * 15.60;
        } else if (day === "Sunday") {
            final = group * 16.00;
        }

        // Apply discount for Business
        if (group >= 100) {
            final -= 10 * (final / group); // 10 free stays
        }
    } else if (type === "Regular") {
        if (day === "Friday") {
            final = group * 15.00;
        } else if (day === "Saturday") {
            final = group * 20.00;
        } else if (day === "Sunday") {
            final = group * 22.50;
        }

        // Apply discount for Regular
        if (group >= 10 && group <= 20) {
            final -= final * 0.05; // 5% discount
        }
    }

    // Output the total price rounded to 2 decimal places
    console.log(`Total price: ${final.toFixed(2)}`);
}