// Cognizant GenC - Core Java: String Manipulation Questions

export const javaStringsQuestions = [
    {
        id: 'ctsta-str-001',
        question: 'Write a program to reverse a string such that special characters remain in their original positions.',
        answer: `### Problem Statement
Given a string containing letters and special characters, reverse only the alphabetic characters while keeping special characters in their original positions.

**Example:** \`"a,b$c"\` → \`"c,b$a"\`

### Approach: Two-Pointer Technique
1. Use two pointers: one at start, one at end
2. Skip if pointer points to a non-alphabetic character
3. Swap alphabetic characters and move both pointers

### Solution Code
\`\`\`java
import java.util.Scanner;

public class ReverseWithSpecialChars {
    
    public static String reverse(String str) {
        char[] arr = str.toCharArray();
        int left = 0, right = arr.length - 1;
        
        while (left < right) {
            // Skip non-alphabetic from left
            if (!Character.isLetter(arr[left])) {
                left++;
            }
            // Skip non-alphabetic from right
            else if (!Character.isLetter(arr[right])) {
                right--;
            }
            // Both are letters, swap them
            else {
                char temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
        
        return new String(arr);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        System.out.println(reverse(input));
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| Input | Output | Explanation |
|-------|--------|-------------|
| \`a,b$c\` | \`c,b$a\` | Letters reversed, \`,\` and \`$\` stay in place |
| \`Ab,c,de!$\` | \`ed,c,bA!$\` | Case preserved during reversal |
| \`a!!!b.c.d,e'f,gyi\` | \`i!!!y.g.f,e'd,cba\` | Multiple special chars handled |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n) - single pass |
| Space | O(n) - char array |

### Why This Matters
This is a frequently asked Cognizant coding question. It tests understanding of two-pointer technique and character classification in Java.`
    },
    {
        id: 'ctsta-str-002',
        question: 'Write a program to remove duplicate characters from a string while maintaining the original order.',
        answer: `### Problem Statement
Given a string, remove all duplicate characters and return a string with only the first occurrence of each character.

**Example:** \`"programming"\` → \`"progamin"\`

### Approach: LinkedHashSet
Use LinkedHashSet to maintain insertion order while automatically removing duplicates.

### Solution Code
\`\`\`java
import java.util.*;

public class RemoveDuplicateChars {
    
    // Method 1: Using LinkedHashSet (Recommended)
    public static String removeDuplicates(String str) {
        Set<Character> seen = new LinkedHashSet<>();
        
        for (char c : str.toCharArray()) {
            seen.add(c);  // Duplicates automatically ignored
        }
        
        StringBuilder result = new StringBuilder();
        for (char c : seen) {
            result.append(c);
        }
        
        return result.toString();
    }
    
    // Method 2: Using boolean array (for lowercase only)
    public static String removeDuplicatesArray(String str) {
        boolean[] seen = new boolean[256];  // ASCII characters
        StringBuilder result = new StringBuilder();
        
        for (char c : str.toCharArray()) {
            if (!seen[c]) {
                seen[c] = true;
                result.append(c);
            }
        }
        
        return result.toString();
    }
    
    // Method 3: Using Stream API (Java 8+)
    public static String removeDuplicatesStream(String str) {
        return str.chars()
                .distinct()
                .collect(StringBuilder::new, 
                         StringBuilder::appendCodePoint, 
                         StringBuilder::append)
                .toString();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        System.out.println(removeDuplicates(input));
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| Input | Output |
|-------|--------|
| \`programming\` | \`progamin\` |
| \`aabbccdd\` | \`abcd\` |
| \`abcabc\` | \`abc\` |
| \`hello world\` | \`helo wrd\` |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(k) where k = unique characters |`
    },
    {
        id: 'ctsta-str-003',
        question: 'Write a program to check if a string is a pangram (contains all 26 alphabets).',
        answer: `### Problem Statement
A pangram is a sentence containing every letter of the alphabet at least once.

**Example:** "The quick brown fox jumps over the lazy dog" is a pangram.

### Approach
Use a Set or boolean array to track which letters are present. Check if all 26 letters are found.

### Solution Code
\`\`\`java
import java.util.*;

public class PangramChecker {
    
    // Method 1: Using Set
    public static boolean isPangram(String str) {
        Set<Character> letters = new HashSet<>();
        
        for (char c : str.toLowerCase().toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                letters.add(c);
            }
        }
        
        return letters.size() == 26;
    }
    
    // Method 2: Using boolean array
    public static boolean isPangramArray(String str) {
        boolean[] present = new boolean[26];
        int count = 0;
        
        for (char c : str.toLowerCase().toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                if (!present[index]) {
                    present[index] = true;
                    count++;
                }
            }
        }
        
        return count == 26;
    }
    
    // Find missing letters
    public static String findMissingLetters(String str) {
        boolean[] present = new boolean[26];
        
        for (char c : str.toLowerCase().toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                present[c - 'a'] = true;
            }
        }
        
        StringBuilder missing = new StringBuilder();
        for (int i = 0; i < 26; i++) {
            if (!present[i]) {
                missing.append((char) ('a' + i));
            }
        }
        
        return missing.toString();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        
        if (isPangram(input)) {
            System.out.println("Pangram");
        } else {
            System.out.println("Not a Pangram");
            System.out.println("Missing: " + findMissingLetters(input));
        }
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| Input | Output |
|-------|--------|
| \`The quick brown fox jumps over the lazy dog\` | Pangram |
| \`Hello World\` | Not a Pangram (missing many letters) |
| \`Pack my box with five dozen liquor jugs\` | Pangram |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) - fixed 26 letters |`
    },
    {
        id: 'ctsta-str-004',
        question: 'Write a program to find the longest palindromic substring in a string.',
        answer: `### Problem Statement
Given a string, find the longest substring that reads the same forward and backward.

**Example:** \`"babad"\` → \`"bab"\` or \`"aba"\`

### Approach: Expand Around Center
For each character (and each pair of characters), expand outward while characters match.

### Solution Code
\`\`\`java
import java.util.*;

public class LongestPalindromeSubstring {
    
    private static int start = 0;
    private static int maxLen = 0;
    
    public static String longestPalindrome(String s) {
        if (s == null || s.length() < 2) {
            return s;
        }
        
        start = 0;
        maxLen = 0;
        
        for (int i = 0; i < s.length(); i++) {
            // Check for odd length palindromes (single center)
            expandAroundCenter(s, i, i);
            
            // Check for even length palindromes (two centers)
            expandAroundCenter(s, i, i + 1);
        }
        
        return s.substring(start, start + maxLen);
    }
    
    private static void expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() 
               && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        
        // Length of palindrome found
        int len = right - left - 1;
        
        if (len > maxLen) {
            maxLen = len;
            start = left + 1;
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        System.out.println(longestPalindrome(input));
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| Input | Output | Explanation |
|-------|--------|-------------|
| \`babad\` | \`bab\` or \`aba\` | Both are valid |
| \`cbbd\` | \`bb\` | Even length palindrome |
| \`racecar\` | \`racecar\` | Entire string is palindrome |
| \`a\` | \`a\` | Single char is palindrome |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n²) - expand around each center |
| Space | O(1) |

### Alternative: Dynamic Programming
DP approach uses O(n²) space but is useful for understanding the concept.`
    },
    {
        id: 'ctsta-str-005',
        question: 'Write a program to count vowels and consonants in a string.',
        answer: `### Problem Statement
Given a string, count the number of vowels (a, e, i, o, u) and consonants separately.

### Solution Code
\`\`\`java
import java.util.*;

public class VowelConsonantCounter {
    
    public static void countVowelsConsonants(String str) {
        int vowels = 0, consonants = 0;
        String vowelSet = "aeiouAEIOU";
        
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                if (vowelSet.indexOf(c) != -1) {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }
        
        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);
    }
    
    // Using Set for O(1) lookup
    public static int[] countUsingSet(String str) {
        Set<Character> vowelSet = new HashSet<>(
            Arrays.asList('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')
        );
        
        int vowels = 0, consonants = 0;
        
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                if (vowelSet.contains(c)) {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }
        
        return new int[]{vowels, consonants};
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        countVowelsConsonants(input);
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| Input | Vowels | Consonants |
|-------|--------|------------|
| \`Hello World\` | 3 | 7 |
| \`Cognizant\` | 3 | 6 |
| \`aeiou\` | 5 | 0 |
| \`rhythm\` | 0 | 6 |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |`
    },
    {
        id: 'ctsta-str-006',
        question: 'Write a program to compress a string using character counts. (Run-Length Encoding)',
        answer: `### Problem Statement
Compress a string by replacing consecutive repeated characters with the character followed by its count. Only compress if the result is shorter.

**Example:** \`"aabcccccaaa"\` → \`"a2b1c5a3"\`

### Solution Code
\`\`\`java
import java.util.*;

public class StringCompression {
    
    public static String compress(String str) {
        if (str == null || str.isEmpty()) {
            return str;
        }
        
        StringBuilder compressed = new StringBuilder();
        int count = 1;
        
        for (int i = 0; i < str.length(); i++) {
            // If next char is same, increment count
            if (i + 1 < str.length() && str.charAt(i) == str.charAt(i + 1)) {
                count++;
            } else {
                // Append character and its count
                compressed.append(str.charAt(i));
                compressed.append(count);
                count = 1;  // Reset count
            }
        }
        
        // Return compressed only if shorter
        return compressed.length() < str.length() 
               ? compressed.toString() 
               : str;
    }
    
    // Decompress the string
    public static String decompress(String str) {
        StringBuilder result = new StringBuilder();
        
        for (int i = 0; i < str.length(); i += 2) {
            char c = str.charAt(i);
            int count = Character.getNumericValue(str.charAt(i + 1));
            
            for (int j = 0; j < count; j++) {
                result.append(c);
            }
        }
        
        return result.toString();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        System.out.println(compress(input));
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| Input | Output | Explanation |
|-------|--------|-------------|
| \`aabcccccaaa\` | \`a2b1c5a3\` | Compressed successfully |
| \`abcde\` | \`abcde\` | No compression (would be longer) |
| \`aaaaaaaaaa\` | \`a10\` | Good compression ratio |
| \`aabbcc\` | \`aabbcc\` | Same length, return original |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(n) for result |`
    },
    {
        id: 'ctsta-str-007',
        question: 'Write a program to find the frequency of each character in a string.',
        answer: `### Problem Statement
Count how many times each character appears in a given string.

**Example:** \`"hello"\` → \`{h=1, e=1, l=2, o=1}\`

### Solution Code
\`\`\`java
import java.util.*;

public class CharacterFrequency {
    
    // Method 1: Using HashMap
    public static Map<Character, Integer> getFrequency(String str) {
        Map<Character, Integer> freq = new LinkedHashMap<>();  // Preserves order
        
        for (char c : str.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        return freq;
    }
    
    // Method 2: Using array (for lowercase letters only)
    public static void printFrequencyArray(String str) {
        int[] freq = new int[26];
        
        for (char c : str.toLowerCase().toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                freq[c - 'a']++;
            }
        }
        
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                System.out.println((char)('a' + i) + ": " + freq[i]);
            }
        }
    }
    
    // Method 3: Using Streams (Java 8+)
    public static Map<Character, Long> getFrequencyStream(String str) {
        return str.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(
                    c -> c, 
                    LinkedHashMap::new, 
                    Collectors.counting()
                ));
    }
    
    // Find character with max frequency
    public static char maxFrequencyChar(String str) {
        Map<Character, Integer> freq = getFrequency(str);
        
        return freq.entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse('\\0');
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        
        Map<Character, Integer> freq = getFrequency(input);
        freq.forEach((k, v) -> System.out.println(k + ": " + v));
        
        System.out.println("Most frequent: " + maxFrequencyChar(input));
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| Input | Output |
|-------|--------|
| \`hello\` | h:1, e:1, l:2, o:1 |
| \`aabbbcccc\` | a:2, b:3, c:4 |
| \`Cognizant\` | C:1, o:1, g:1, n:2, i:1, z:1, a:1, t:1 |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(k) where k = unique characters |`
    },
    {
        id: 'ctsta-str-008',
        question: 'Write a program to find the first non-repeating character in a string.',
        answer: `### Problem Statement
Given a string, find the first character that appears exactly once.

**Example:** \`"leetcode"\` → \`'l'\` (first unique character)

### Solution Code
\`\`\`java
import java.util.*;

public class FirstNonRepeating {
    
    // Method 1: Two-pass with count array
    public static char firstNonRepeating(String str) {
        int[] count = new int[256];  // ASCII characters
        
        // First pass: count occurrences
        for (char c : str.toCharArray()) {
            count[c]++;
        }
        
        // Second pass: find first with count 1
        for (char c : str.toCharArray()) {
            if (count[c] == 1) {
                return c;
            }
        }
        
        return '\\0';  // No non-repeating character
    }
    
    // Method 2: Using LinkedHashMap (maintains insertion order)
    public static char firstNonRepeatingMap(String str) {
        Map<Character, Integer> freq = new LinkedHashMap<>();
        
        for (char c : str.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }
        
        return '\\0';
    }
    
    // Find index of first non-repeating character
    public static int firstNonRepeatingIndex(String str) {
        int[] count = new int[256];
        
        for (char c : str.toCharArray()) {
            count[c]++;
        }
        
        for (int i = 0; i < str.length(); i++) {
            if (count[str.charAt(i)] == 1) {
                return i;
            }
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        
        char result = firstNonRepeating(input);
        if (result != '\\0') {
            System.out.println("First non-repeating: " + result);
            System.out.println("Index: " + firstNonRepeatingIndex(input));
        } else {
            System.out.println("No non-repeating character found");
        }
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| Input | Output | Index |
|-------|--------|-------|
| \`leetcode\` | l | 0 |
| \`loveleetcode\` | v | 2 |
| \`aabb\` | \\0 (none) | -1 |
| \`Cognizant\` | C | 0 |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n) - two passes |
| Space | O(1) - fixed size array |`
    },
    {
        id: 'ctsta-str-009',
        question: 'Write a program to check if two strings are anagrams of each other.',
        answer: `### Problem Statement
Two strings are anagrams if they contain the same characters in a different order.

**Example:** \`"listen"\` and \`"silent"\` are anagrams.

### Solution Code
\`\`\`java
import java.util.*;

public class AnagramChecker {
    
    // Method 1: Sorting approach
    public static boolean isAnagramSort(String s1, String s2) {
        if (s1.length() != s2.length()) {
            return false;
        }
        
        char[] arr1 = s1.toLowerCase().toCharArray();
        char[] arr2 = s2.toLowerCase().toCharArray();
        
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        return Arrays.equals(arr1, arr2);
    }
    
    // Method 2: Character count array (Optimal)
    public static boolean isAnagramCount(String s1, String s2) {
        if (s1.length() != s2.length()) {
            return false;
        }
        
        int[] count = new int[26];
        
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
        
        for (int i = 0; i < s1.length(); i++) {
            count[s1.charAt(i) - 'a']++;
            count[s2.charAt(i) - 'a']--;
        }
        
        for (int c : count) {
            if (c != 0) {
                return false;
            }
        }
        
        return true;
    }
    
    // Method 3: HashMap (handles all characters including spaces)
    public static boolean isAnagramMap(String s1, String s2) {
        if (s1.length() != s2.length()) {
            return false;
        }
        
        Map<Character, Integer> map = new HashMap<>();
        
        for (char c : s1.toLowerCase().toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        
        for (char c : s2.toLowerCase().toCharArray()) {
            int count = map.getOrDefault(c, 0);
            if (count == 0) {
                return false;
            }
            map.put(c, count - 1);
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.nextLine();
        String s2 = sc.nextLine();
        
        if (isAnagramCount(s1, s2)) {
            System.out.println("Anagrams");
        } else {
            System.out.println("Not Anagrams");
        }
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| String 1 | String 2 | Result |
|----------|----------|--------|
| listen | silent | Anagrams |
| triangle | integral | Anagrams |
| hello | world | Not Anagrams |
| Dormitory | Dirty room | Anagrams (ignoring spaces) |

### Complexity Analysis
| Method | Time | Space |
|--------|------|-------|
| Sorting | O(n log n) | O(n) |
| Count Array | O(n) | O(1) |
| HashMap | O(n) | O(n) |`
    },
    {
        id: 'ctsta-str-010',
        question: 'Write a program to reverse words in a string while preserving the word order.',
        answer: `### Problem Statement
Given a sentence, reverse each word individually while keeping the words in the same order.

**Example:** \`"Hello World"\` → \`"olleH dlroW"\`

### Solution Code
\`\`\`java
import java.util.*;

public class ReverseWords {
    
    // Reverse each word in the sentence
    public static String reverseEachWord(String str) {
        String[] words = str.split(" ");
        StringBuilder result = new StringBuilder();
        
        for (int i = 0; i < words.length; i++) {
            // Reverse individual word
            result.append(new StringBuilder(words[i]).reverse());
            
            if (i < words.length - 1) {
                result.append(" ");
            }
        }
        
        return result.toString();
    }
    
    // Reverse the order of words (different problem)
    // "Hello World" -> "World Hello"
    public static String reverseWordOrder(String str) {
        String[] words = str.trim().split("\\\\s+");
        StringBuilder result = new StringBuilder();
        
        for (int i = words.length - 1; i >= 0; i--) {
            result.append(words[i]);
            if (i > 0) {
                result.append(" ");
            }
        }
        
        return result.toString();
    }
    
    // Using Streams (Java 8+)
    public static String reverseEachWordStream(String str) {
        return Arrays.stream(str.split(" "))
                .map(word -> new StringBuilder(word).reverse().toString())
                .collect(Collectors.joining(" "));
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        
        System.out.println("Each word reversed: " + reverseEachWord(input));
        System.out.println("Word order reversed: " + reverseWordOrder(input));
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| Input | Each Word Reversed | Order Reversed |
|-------|-------------------|----------------|
| \`Hello World\` | \`olleH dlroW\` | \`World Hello\` |
| \`Java is fun\` | \`avaJ si nuf\` | \`fun is Java\` |
| \`Cognizant GenC\` | \`tnazinoC CneG\` | \`GenC Cognizant\` |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(n) |`
    },
    {
        id: 'ctsta-str-011',
        question: 'Write a program to check if a string is a valid shuffle of two strings.',
        answer: `### Problem Statement
Given three strings, check if the third string is a valid interleaving/shuffle of the first two strings.

**Example:** \`"xy"\`, \`"12"\`, \`"x1y2"\` → Valid shuffle

### Solution Code
\`\`\`java
import java.util.*;

public class ValidShuffle {
    
    public static boolean isValidShuffle(String s1, String s2, String result) {
        // Length check
        if (s1.length() + s2.length() != result.length()) {
            return false;
        }
        
        int i = 0, j = 0, k = 0;
        
        while (k < result.length()) {
            // Match with s1
            if (i < s1.length() && s1.charAt(i) == result.charAt(k)) {
                i++;
            }
            // Match with s2
            else if (j < s2.length() && s2.charAt(j) == result.charAt(k)) {
                j++;
            }
            // No match found
            else {
                return false;
            }
            k++;
        }
        
        // All characters should be consumed
        return i == s1.length() && j == s2.length();
    }
    
    // More robust: Check if result contains all chars from s1 and s2
    public static boolean isValidShuffleFreq(String s1, String s2, String result) {
        if (s1.length() + s2.length() != result.length()) {
            return false;
        }
        
        int[] count = new int[256];
        
        // Add counts from s1 and s2
        for (char c : s1.toCharArray()) count[c]++;
        for (char c : s2.toCharArray()) count[c]++;
        
        // Subtract counts from result
        for (char c : result.toCharArray()) {
            count[c]--;
            if (count[c] < 0) return false;
        }
        
        // All counts should be zero
        for (int c : count) {
            if (c != 0) return false;
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.nextLine();
        String s2 = sc.nextLine();
        String result = sc.nextLine();
        
        if (isValidShuffle(s1, s2, result)) {
            System.out.println("Valid Shuffle");
        } else {
            System.out.println("Not a Valid Shuffle");
        }
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| s1 | s2 | Result | Valid? |
|----|----|---------|----|
| xy | 12 | x1y2 | Yes |
| abc | def | adbecf | Yes |
| abc | def | abcdefg | No (extra char) |
| abc | def | abdecf | No (wrong order) |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n) |
| Space | O(1) |`
    },
    {
        id: 'ctsta-str-012',
        question: 'Write a program to find all permutations of a string.',
        answer: `### Problem Statement
Generate all possible arrangements of characters in a string.

**Example:** \`"abc"\` → \`["abc", "acb", "bac", "bca", "cab", "cba"]\`

### Solution Code
\`\`\`java
import java.util.*;

public class StringPermutations {
    
    // Using backtracking
    public static List<String> permute(String str) {
        List<String> result = new ArrayList<>();
        boolean[] used = new boolean[str.length()];
        backtrack(str.toCharArray(), used, new StringBuilder(), result);
        return result;
    }
    
    private static void backtrack(char[] chars, boolean[] used, 
                                   StringBuilder current, List<String> result) {
        if (current.length() == chars.length) {
            result.add(current.toString());
            return;
        }
        
        for (int i = 0; i < chars.length; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            current.append(chars[i]);
            
            backtrack(chars, used, current, result);
            
            // Backtrack
            current.deleteCharAt(current.length() - 1);
            used[i] = false;
        }
    }
    
    // Alternative: Swap-based approach
    public static void permuteSwap(char[] arr, int left, int right, List<String> result) {
        if (left == right) {
            result.add(new String(arr));
            return;
        }
        
        for (int i = left; i <= right; i++) {
            swap(arr, left, i);
            permuteSwap(arr, left + 1, right, result);
            swap(arr, left, i);  // Backtrack
        }
    }
    
    private static void swap(char[] arr, int i, int j) {
        char temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    // Handle duplicates
    public static List<String> permuteUnique(String str) {
        List<String> result = new ArrayList<>();
        char[] chars = str.toCharArray();
        Arrays.sort(chars);  // Sort to handle duplicates
        boolean[] used = new boolean[chars.length];
        backtrackUnique(chars, used, new StringBuilder(), result);
        return result;
    }
    
    private static void backtrackUnique(char[] chars, boolean[] used,
                                        StringBuilder current, List<String> result) {
        if (current.length() == chars.length) {
            result.add(current.toString());
            return;
        }
        
        for (int i = 0; i < chars.length; i++) {
            if (used[i]) continue;
            
            // Skip duplicates
            if (i > 0 && chars[i] == chars[i-1] && !used[i-1]) continue;
            
            used[i] = true;
            current.append(chars[i]);
            backtrackUnique(chars, used, current, result);
            current.deleteCharAt(current.length() - 1);
            used[i] = false;
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        
        List<String> perms = permute(input);
        System.out.println("Total permutations: " + perms.size());
        perms.forEach(System.out::println);
        sc.close();
    }
}
\`\`\`

### Sample Test Cases
| Input | Output Count |
|-------|--------------|
| abc | 6 (3!) |
| ab | 2 (2!) |
| aab | 3 (with duplicates handled) |

### Complexity Analysis
| Metric | Value |
|--------|-------|
| Time | O(n × n!) |
| Space | O(n) for recursion stack |`
    }
];

export default javaStringsQuestions;
