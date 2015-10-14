function findMissing(arr) {
    var referenceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < referenceArray.length; j++) {
            if (arr[i] === referenceArray[j]) {
                referenceArray[j] = 0;
            }
        }
    }
    for (var i = 0; i < referenceArray.length; i++) {
        if (referenceArray[i] !== 0) {
            return referenceArray[i];
        }
    }
}