var input = [0, 11, 3, 4, 5, 0, 11, 45, 87, 12, 5, 5, 5, 10, 10, 10, 10, 10, 12, 0, 0, 0, 0, 0];

mostOccured = (input) => {
    var max = 0;
    var maxIndex = 0;
    var count = 0;
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input.length; j++) {
            if (input[i] == input[j]) {
                count++;
            }
        }
        if (count > max) {
            max = count;
            maxIndex = i;
        }
        count = 0;
    }
    return (`The most occured number is ${input[maxIndex]} and it occured ${max} times`);
}

console.log(mostOccured(input));