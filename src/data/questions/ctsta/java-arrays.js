// Cognizant GenC - Core Java: Array Manipulation Questions

export const javaArraysQuestions = [
    {
        id: 'ctsta-arr-001',
        question: 'Write a program to find the second largest element in an array without sorting.',
        answer: `### Problem Statement
Find the second largest element in an array in O(n) time without using sorting.

### Solution Code
\`\`\`java
import java.util.*;

public class SecondLargest {
    public static int findSecondLargest(int[] arr) {
        if (arr.length < 2) throw new IllegalArgumentException("Need at least 2 elements");
        
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        
        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }
        return secondLargest;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        System.out.println("Second Largest: " + findSecondLargest(arr));
    }
}
\`\`\`

### Sample Test Cases
| Array | Second Largest |
|-------|----------------|
| [12, 35, 1, 10, 34, 1] | 34 |
| [5, 1, 4, 2, 8] | 5 |

### Complexity: O(n) time, O(1) space`
    },
    {
        id: 'ctsta-arr-002',
        question: 'Write a program to rotate an array by k positions to the right.',
        answer: `### Approach: Reversal Algorithm
1. Reverse entire array
2. Reverse first k elements
3. Reverse remaining n-k elements

### Solution Code
\`\`\`java
import java.util.*;

public class RotateArray {
    public static void rotateRight(int[] arr, int k) {
        int n = arr.length;
        k = k % n;
        reverse(arr, 0, n - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);
    }
    
    private static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++; end--;
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        rotateRight(arr, 2);
        System.out.println(Arrays.toString(arr)); // [4, 5, 1, 2, 3]
    }
}
\`\`\`

### Sample Test Cases
| Array | k | Result |
|-------|---|--------|
| [1, 2, 3, 4, 5] | 2 | [4, 5, 1, 2, 3] |

### Complexity: O(n) time, O(1) space`
    },
    {
        id: 'ctsta-arr-003',
        question: 'Write a program to move all zeros to the end of an array while maintaining order.',
        answer: `### Approach: Two Pointer
Use a write pointer to track where the next non-zero should go.

### Solution Code
\`\`\`java
import java.util.*;

public class MoveZeros {
    public static void moveZerosToEnd(int[] arr) {
        int writeIndex = 0;
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                arr[writeIndex++] = arr[i];
            }
        }
        
        while (writeIndex < arr.length) {
            arr[writeIndex++] = 0;
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 3, 12};
        moveZerosToEnd(arr);
        System.out.println(Arrays.toString(arr)); // [1, 3, 12, 0, 0]
    }
}
\`\`\`

### Complexity: O(n) time, O(1) space`
    },
    {
        id: 'ctsta-arr-004',
        question: 'Write a program to find the missing number in an array containing 1 to N.',
        answer: `### Approaches
1. **Sum formula**: Expected sum - Actual sum
2. **XOR**: XOR all elements with 1 to n

### Solution Code
\`\`\`java
public class MissingNumber {
    // Method 1: Sum Formula
    public static int findMissingSum(int[] arr, int n) {
        long expectedSum = (long) n * (n + 1) / 2;
        long actualSum = 0;
        for (int num : arr) actualSum += num;
        return (int) (expectedSum - actualSum);
    }
    
    // Method 2: XOR (avoids overflow)
    public static int findMissingXOR(int[] arr, int n) {
        int xor = 0;
        for (int num : arr) xor ^= num;
        for (int i = 1; i <= n; i++) xor ^= i;
        return xor;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5};
        System.out.println("Missing: " + findMissingSum(arr, 5)); // 3
    }
}
\`\`\`

### Complexity: O(n) time, O(1) space`
    },
    {
        id: 'ctsta-arr-005',
        question: 'Write a program to merge two sorted arrays into a single sorted array.',
        answer: `### Approach: Two Pointer
Compare elements from both arrays and pick the smaller one.

### Solution Code
\`\`\`java
import java.util.*;

public class MergeSortedArrays {
    public static int[] merge(int[] arr1, int[] arr2) {
        int[] result = new int[arr1.length + arr2.length];
        int i = 0, j = 0, k = 0;
        
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                result[k++] = arr1[i++];
            } else {
                result[k++] = arr2[j++];
            }
        }
        
        while (i < arr1.length) result[k++] = arr1[i++];
        while (j < arr2.length) result[k++] = arr2[j++];
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 3, 5};
        int[] arr2 = {2, 4, 6};
        System.out.println(Arrays.toString(merge(arr1, arr2))); // [1,2,3,4,5,6]
    }
}
\`\`\`

### Complexity: O(m+n) time, O(m+n) space`
    },
    {
        id: 'ctsta-arr-006',
        question: 'Write a program to find all duplicate elements in an array.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;

public class FindDuplicates {
    public static List<Integer> findDuplicates(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        Set<Integer> duplicates = new HashSet<>();
        
        for (int num : arr) {
            if (seen.contains(num)) {
                duplicates.add(num);
            } else {
                seen.add(num);
            }
        }
        return new ArrayList<>(duplicates);
    }
    
    public static void main(String[] args) {
        int[] arr = {4, 3, 2, 7, 8, 2, 3, 1};
        System.out.println("Duplicates: " + findDuplicates(arr)); // [2, 3]
    }
}
\`\`\`

### Complexity: O(n) time, O(n) space`
    },
    {
        id: 'ctsta-arr-007',
        question: 'Write a program to find the intersection and union of two arrays.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;

public class ArraySetOperations {
    public static int[] intersection(int[] arr1, int[] arr2) {
        Set<Integer> set1 = new HashSet<>();
        for (int num : arr1) set1.add(num);
        
        Set<Integer> result = new HashSet<>();
        for (int num : arr2) {
            if (set1.contains(num)) result.add(num);
        }
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
    
    public static int[] union(int[] arr1, int[] arr2) {
        Set<Integer> result = new HashSet<>();
        for (int num : arr1) result.add(num);
        for (int num : arr2) result.add(num);
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {4, 5, 6, 7, 8};
        System.out.println("Intersection: " + Arrays.toString(intersection(arr1, arr2)));
        System.out.println("Union: " + Arrays.toString(union(arr1, arr2)));
    }
}
\`\`\`

### Complexity: O(m+n) time, O(m+n) space`
    },
    {
        id: 'ctsta-arr-008',
        question: 'Write a program to find maximum sum contiguous subarray (Kadane\'s Algorithm).',
        answer: `### Kadane's Algorithm
Keep track of maximum sum ending at current position.

### Solution Code
\`\`\`java
public class MaxSubarraySum {
    public static int maxSubarraySum(int[] arr) {
        int maxSoFar = arr[0];
        int maxEndingHere = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }
    
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Max Sum: " + maxSubarraySum(arr)); // 6
    }
}
\`\`\`

### Complexity: O(n) time, O(1) space`
    },
    {
        id: 'ctsta-arr-009',
        question: 'Write a program to find pairs in an array that sum to a given target.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;

public class TwoSumPairs {
    public static int[] twoSum(int[] arr, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < arr.length; i++) {
            int complement = target - arr[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(arr[i], i);
        }
        return new int[]{-1, -1};
    }
    
    public static void main(String[] args) {
        int[] arr = {2, 7, 11, 15};
        System.out.println(Arrays.toString(twoSum(arr, 9))); // [0, 1]
    }
}
\`\`\`

### Complexity: O(n) time, O(n) space`
    },
    {
        id: 'ctsta-arr-010',
        question: 'Write a program to find the equilibrium index of an array.',
        answer: `### Definition
Equilibrium index: sum of left elements = sum of right elements

### Solution Code
\`\`\`java
public class EquilibriumIndex {
    public static int findEquilibrium(int[] arr) {
        int totalSum = 0;
        for (int num : arr) totalSum += num;
        
        int leftSum = 0;
        for (int i = 0; i < arr.length; i++) {
            int rightSum = totalSum - leftSum - arr[i];
            if (leftSum == rightSum) return i;
            leftSum += arr[i];
        }
        return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 2, 2};
        System.out.println("Equilibrium index: " + findEquilibrium(arr)); // 2
    }
}
\`\`\`

### Complexity: O(n) time, O(1) space`
    }
];

export default javaArraysQuestions;
