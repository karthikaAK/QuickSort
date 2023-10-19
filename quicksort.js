function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const pivot = arr[arr.length - 1];
        var left = [];
        var right = [];
        var equal = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left[left.length] = arr[i];
            } else if (arr[i] > pivot) {
                right[right.length] = arr[i];
            } else {
                equal[equal.length] = arr[i];
            }
        }
        return quickSort(left).concat(equal,quickSort(right));
    }
}

let sortedArray = [10,9,3,3,6,4];
let sort = quickSort(sortedArray);
console.log(sort);
