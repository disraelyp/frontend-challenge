
/**
 * Reverse an array in place, but only if the element apply to the selector
 * Big O: O(n)
 * @param arr array to reverse
 * @returns array reversed
 */
export default function specialReverseArray(arr: (string | number)[], selector = isAlphanumeric) {
    let left = 0; // O(1)
    let right = arr.length - 1; // O(1)

    /**
     * While the left pointer is less than the right pointer
     */
    while (left < right) { // O(n)

        /**
         * If the left element is not alphanumeric, move to the right
         * If the right element is not alphanumeric, move to the left
         * If both are alphanumeric, swap them and move both pointers
         */
        if (!selector(arr[left])) {
            left++; // O(1)
        } else if (!selector(arr[right])) {
            right--; // O(1)
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]]; // O(1)
            left++; // O(1)
            right--; // O(1)
        }

    }

    return arr;
}

/**
 * Check if a data is alphanumeric
 * @param data data to check
 * @returns true if alphanumeric, false otherwise
 */
export const isAlphanumeric = (data: (string | number)) => typeof data === 'string' && /[a-zA-Z0-9]/.test(data) || typeof data === 'number';
