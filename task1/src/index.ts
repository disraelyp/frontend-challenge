export default function specialReverseArray(arr: (string | number)[], selector = isAlphanumeric) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (!selector(arr[left])) {
            left++;
        } else if (!selector(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }

    }

    return arr;
}

export const isAlphanumeric = (data: (string | number)) => typeof data === 'string' && /[a-zA-Z0-9]/.test(data) || typeof data === 'number';
