function calcAverageHumanAge(ages) {
    var humanAges = [];
    for (var i = 0; i < ages.length; i++) {
        if (ages[i] <= 2) {
            humanAges.push(ages[i] * 2);
        } else {
            humanAges.push(16 + ages[i] * 4);
        }
    }

    humanAges = humanAges.filter(function (age) {
        return age >= 18;
    });

    var sum = 0;
    for (var i = 0; i < humanAges.length; i++) {
        sum += humanAges[i];
    }

    var average = sum / humanAges.length;
    return average;
}

// Test data 1
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// Test data 2
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
