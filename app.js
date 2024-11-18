function insertionSort(arr) {
    // Loop through the array starting from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let current = arr[i];
        
        // Set j to the previous element's index (i - 1)
        let j = i - 1;
        
        // Move elements of the sorted part of the array that are greater than the current element
        // one position ahead to make space for the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];  // Shift the element to the right
            j--;  // Move left in the array
        }
        
        // Insert the current element at the correct position
        arr[j + 1] = current;
    }

    return arr;  // Return the sorted array
}

// Example usage:
let arr = [5, 2, 9, 1, 5, 6];
console.log("Original array:", arr);
let sortedArray = insertionSort(arr);
console.log("Sorted array:", sortedArray);
