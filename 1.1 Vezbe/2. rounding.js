function rounding(num, rounder) {
    if (rounder > 15) {
        rounder =  15;
    }

    let finalNum = parseFloat(num.toFixed(rounder));
    console.log(finalNum);
}

rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);