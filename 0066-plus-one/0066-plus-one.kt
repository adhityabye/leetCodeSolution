class Solution {
    fun plusOne(digits: IntArray): IntArray {
        var carry = 1 // Start with a carry of 1 (as we want to add 1 to the large integer)

            // Traverse the digits from right to left
            for (i in digits.indices.reversed()) {
                // Add the carry to the current digit
                digits[i] += carry

                // Check if there's a carry for the next iteration
                carry = digits[i] / 10 // Carry will be 0 or 1 (as the digit can only be 0-9)

                // Update the current digit to the remainder after the carry
                digits[i] %= 10
            }

            // If there's still a carry after the loop, add it to the beginning
            if (carry > 0) {
                val result = IntArray(digits.size + 1)
                result[0] = carry
                digits.copyInto(result, 1)
                return result
            }

            return digits

    }
}