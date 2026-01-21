// Cognizant GenC - Core Java: Collections Framework Questions

export const javaCollectionsQuestions = [
    {
        id: 'ctsta-coll-001',
        question: 'Write a program to count frequency of elements using HashMap.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;

public class FrequencyCount {
    public static Map<Integer, Integer> countFrequency(int[] arr) {
        Map<Integer, Integer> freq = new HashMap<>();
        
        for (int num : arr) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        return freq;
    }
    
    // Find element with max frequency
    public static int maxFrequencyElement(int[] arr) {
        Map<Integer, Integer> freq = countFrequency(arr);
        
        return freq.entrySet().stream()
            .max(Map.Entry.comparingByValue())
            .map(Map.Entry::getKey)
            .orElse(-1);
    }
    
    // Count word frequency in string
    public static Map<String, Integer> wordFrequency(String text) {
        Map<String, Integer> freq = new HashMap<>();
        String[] words = text.toLowerCase().split("\\\\s+");
        
        for (String word : words) {
            freq.put(word, freq.getOrDefault(word, 0) + 1);
        }
        return freq;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 3, 3, 4};
        System.out.println(countFrequency(arr)); // {1=1, 2=2, 3=3, 4=1}
        System.out.println("Most frequent: " + maxFrequencyElement(arr)); // 3
    }
}
\`\`\``
    },
    {
        id: 'ctsta-coll-002',
        question: 'Write a program to sort a HashMap by values.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;
import java.util.stream.*;

public class SortMapByValue {
    // Method 1: Using Stream API
    public static <K, V extends Comparable<V>> Map<K, V> sortByValue(Map<K, V> map) {
        return map.entrySet().stream()
            .sorted(Map.Entry.comparingByValue())
            .collect(Collectors.toMap(
                Map.Entry::getKey,
                Map.Entry::getValue,
                (e1, e2) -> e1,
                LinkedHashMap::new
            ));
    }
    
    // Sort descending
    public static <K, V extends Comparable<V>> Map<K, V> sortByValueDesc(Map<K, V> map) {
        return map.entrySet().stream()
            .sorted(Map.Entry.<K, V>comparingByValue().reversed())
            .collect(Collectors.toMap(
                Map.Entry::getKey,
                Map.Entry::getValue,
                (e1, e2) -> e1,
                LinkedHashMap::new
            ));
    }
    
    // Method 2: Using List
    public static Map<String, Integer> sortByValueList(Map<String, Integer> map) {
        List<Map.Entry<String, Integer>> list = new ArrayList<>(map.entrySet());
        list.sort(Map.Entry.comparingByValue());
        
        Map<String, Integer> result = new LinkedHashMap<>();
        for (Map.Entry<String, Integer> entry : list) {
            result.put(entry.getKey(), entry.getValue());
        }
        return result;
    }
    
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("Alice", 85);
        map.put("Bob", 92);
        map.put("Charlie", 78);
        
        System.out.println(sortByValue(map)); // {Charlie=78, Alice=85, Bob=92}
    }
}
\`\`\``
    },
    {
        id: 'ctsta-coll-003',
        question: 'Write a program to group objects by a property using Collectors.groupingBy.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;
import java.util.stream.*;

class Employee {
    String name;
    String department;
    int salary;
    
    Employee(String name, String dept, int salary) {
        this.name = name;
        this.department = dept;
        this.salary = salary;
    }
}

public class GroupByExample {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", "IT", 50000),
            new Employee("Bob", "HR", 45000),
            new Employee("Charlie", "IT", 60000),
            new Employee("David", "HR", 55000)
        );
        
        // Group by department
        Map<String, List<Employee>> byDept = employees.stream()
            .collect(Collectors.groupingBy(e -> e.department));
        
        // Count by department
        Map<String, Long> countByDept = employees.stream()
            .collect(Collectors.groupingBy(e -> e.department, Collectors.counting()));
        
        // Sum salary by department
        Map<String, Integer> salaryByDept = employees.stream()
            .collect(Collectors.groupingBy(
                e -> e.department, 
                Collectors.summingInt(e -> e.salary)
            ));
        
        // Average salary by department
        Map<String, Double> avgByDept = employees.stream()
            .collect(Collectors.groupingBy(
                e -> e.department,
                Collectors.averagingInt(e -> e.salary)
            ));
        
        System.out.println("Count: " + countByDept);
        System.out.println("Sum: " + salaryByDept);
        System.out.println("Avg: " + avgByDept);
    }
}
\`\`\``
    },
    {
        id: 'ctsta-coll-004',
        question: 'Write a program to find duplicates in a list using Set.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;

public class FindDuplicatesSet {
    // Method 1: HashSet approach
    public static <T> Set<T> findDuplicates(List<T> list) {
        Set<T> seen = new HashSet<>();
        Set<T> duplicates = new HashSet<>();
        
        for (T item : list) {
            if (!seen.add(item)) {
                duplicates.add(item);
            }
        }
        return duplicates;
    }
    
    // Method 2: Stream approach
    public static <T> Set<T> findDuplicatesStream(List<T> list) {
        return list.stream()
            .filter(e -> Collections.frequency(list, e) > 1)
            .collect(Collectors.toSet());
    }
    
    // Check if list has duplicates
    public static <T> boolean hasDuplicates(List<T> list) {
        return list.size() != new HashSet<>(list).size();
    }
    
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 2, 4, 3, 5);
        System.out.println("Duplicates: " + findDuplicates(numbers)); // [2, 3]
        System.out.println("Has duplicates: " + hasDuplicates(numbers)); // true
    }
}
\`\`\``
    },
    {
        id: 'ctsta-coll-005',
        question: 'Write a program to implement Stack and Queue operations.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;

public class StackQueueDemo {
    public static void main(String[] args) {
        // STACK - LIFO (Last In First Out)
        Deque<Integer> stack = new ArrayDeque<>();
        
        stack.push(1);
        stack.push(2);
        stack.push(3);
        System.out.println("Stack: " + stack);        // [3, 2, 1]
        System.out.println("Pop: " + stack.pop());    // 3
        System.out.println("Peek: " + stack.peek());  // 2
        
        // QUEUE - FIFO (First In First Out)
        Queue<Integer> queue = new LinkedList<>();
        
        queue.offer(1);
        queue.offer(2);
        queue.offer(3);
        System.out.println("Queue: " + queue);         // [1, 2, 3]
        System.out.println("Poll: " + queue.poll());   // 1
        System.out.println("Peek: " + queue.peek());   // 2
        
        // PRIORITY QUEUE - Min Heap by default
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        pq.offer(3);
        pq.offer(1);
        pq.offer(2);
        System.out.println("PQ Poll: " + pq.poll());  // 1 (minimum)
        
        // Max Heap
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        maxHeap.addAll(Arrays.asList(3, 1, 2));
        System.out.println("Max Poll: " + maxHeap.poll());  // 3
    }
}
\`\`\``
    },
    {
        id: 'ctsta-coll-006',
        question: 'Write a program to sort objects using Comparator.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;

class Student {
    String name;
    int age;
    double marks;
    
    Student(String name, int age, double marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    
    @Override
    public String toString() {
        return name + "(" + age + ", " + marks + ")";
    }
}

public class ComparatorDemo {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("Alice", 20, 85.5),
            new Student("Bob", 22, 90.0),
            new Student("Charlie", 19, 85.5)
        );
        
        // Sort by age
        students.sort(Comparator.comparingInt(s -> s.age));
        System.out.println("By age: " + students);
        
        // Sort by marks (descending)
        students.sort(Comparator.comparingDouble((Student s) -> s.marks).reversed());
        System.out.println("By marks desc: " + students);
        
        // Sort by marks, then by name
        students.sort(Comparator
            .comparingDouble((Student s) -> s.marks)
            .thenComparing(s -> s.name));
        System.out.println("By marks, then name: " + students);
        
        // Using lambda
        students.sort((s1, s2) -> s1.name.compareTo(s2.name));
        System.out.println("By name: " + students);
    }
}
\`\`\``
    },
    {
        id: 'ctsta-coll-007',
        question: 'Write a program to convert between List, Set, and Array.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;
import java.util.stream.*;

public class CollectionConversions {
    public static void main(String[] args) {
        // Array to List
        Integer[] arr = {1, 2, 3, 4, 5};
        List<Integer> list = new ArrayList<>(Arrays.asList(arr));
        
        // List to Array
        Integer[] arrFromList = list.toArray(new Integer[0]);
        
        // List to Set (removes duplicates)
        List<Integer> withDupes = Arrays.asList(1, 2, 2, 3, 3, 3);
        Set<Integer> set = new HashSet<>(withDupes);
        
        // Set to List
        List<Integer> listFromSet = new ArrayList<>(set);
        
        // Array to Set
        Set<Integer> setFromArr = new HashSet<>(Arrays.asList(arr));
        
        // Using Streams
        int[] primitiveArr = {1, 2, 3, 4, 5};
        List<Integer> listFromPrimitive = Arrays.stream(primitiveArr)
            .boxed()
            .collect(Collectors.toList());
        
        int[] backToPrimitive = listFromPrimitive.stream()
            .mapToInt(Integer::intValue)
            .toArray();
        
        System.out.println("List: " + list);
        System.out.println("Set: " + set);
        System.out.println("Array: " + Arrays.toString(arrFromList));
    }
}
\`\`\``
    },
    {
        id: 'ctsta-coll-008',
        question: 'Write a program to find common elements in multiple lists.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;

public class CommonElements {
    // Find common in two lists
    public static <T> List<T> findCommon(List<T> list1, List<T> list2) {
        Set<T> set = new HashSet<>(list1);
        set.retainAll(list2);
        return new ArrayList<>(set);
    }
    
    // Find common in multiple lists
    public static <T> List<T> findCommonMultiple(List<List<T>> lists) {
        if (lists.isEmpty()) return new ArrayList<>();
        
        Set<T> common = new HashSet<>(lists.get(0));
        
        for (int i = 1; i < lists.size(); i++) {
            common.retainAll(lists.get(i));
        }
        return new ArrayList<>(common);
    }
    
    // Using streams
    public static List<Integer> findCommonStream(List<Integer> l1, List<Integer> l2) {
        return l1.stream()
            .filter(l2::contains)
            .distinct()
            .collect(Collectors.toList());
    }
    
    public static void main(String[] args) {
        List<Integer> list1 = Arrays.asList(1, 2, 3, 4, 5);
        List<Integer> list2 = Arrays.asList(4, 5, 6, 7, 8);
        List<Integer> list3 = Arrays.asList(5, 6, 7, 8, 9);
        
        System.out.println("Common: " + findCommon(list1, list2)); // [4, 5]
        System.out.println("Common all: " + findCommonMultiple(
            Arrays.asList(list1, list2, list3))); // [5]
    }
}
\`\`\``
    },
    {
        id: 'ctsta-coll-009',
        question: 'Write a program to implement LRU Cache using LinkedHashMap.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;

class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);  // true = access order
        this.capacity = capacity;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
}

public class LRUCacheDemo {
    public static void main(String[] args) {
        LRUCache<Integer, String> cache = new LRUCache<>(3);
        
        cache.put(1, "One");
        cache.put(2, "Two");
        cache.put(3, "Three");
        System.out.println(cache); // {1=One, 2=Two, 3=Three}
        
        cache.get(1);  // Access key 1
        System.out.println(cache); // {2=Two, 3=Three, 1=One}
        
        cache.put(4, "Four");  // Evicts least recently used (2)
        System.out.println(cache); // {3=Three, 1=One, 4=Four}
    }
}
\`\`\`

### Key Concept: LinkedHashMap with access-order maintains LRU order`
    },
    {
        id: 'ctsta-coll-010',
        question: 'Write a program to merge two Maps.',
        answer: `### Solution Code
\`\`\`java
import java.util.*;
import java.util.stream.*;

public class MergeMaps {
    // Method 1: putAll (second map overwrites first)
    public static <K, V> Map<K, V> mergeSimple(Map<K, V> map1, Map<K, V> map2) {
        Map<K, V> result = new HashMap<>(map1);
        result.putAll(map2);
        return result;
    }
    
    // Method 2: merge with conflict resolution
    public static Map<String, Integer> mergeWithSum(
            Map<String, Integer> map1, Map<String, Integer> map2) {
        Map<String, Integer> result = new HashMap<>(map1);
        
        map2.forEach((key, value) -> 
            result.merge(key, value, Integer::sum));
        
        return result;
    }
    
    // Method 3: Using streams
    public static <K, V> Map<K, V> mergeStream(Map<K, V> map1, Map<K, V> map2) {
        return Stream.concat(map1.entrySet().stream(), map2.entrySet().stream())
            .collect(Collectors.toMap(
                Map.Entry::getKey,
                Map.Entry::getValue,
                (v1, v2) -> v2  // Conflict resolution: keep second
            ));
    }
    
    public static void main(String[] args) {
        Map<String, Integer> map1 = new HashMap<>();
        map1.put("a", 1);
        map1.put("b", 2);
        
        Map<String, Integer> map2 = new HashMap<>();
        map2.put("b", 3);
        map2.put("c", 4);
        
        System.out.println("Simple: " + mergeSimple(map1, map2));    // {a=1, b=3, c=4}
        System.out.println("Sum: " + mergeWithSum(map1, map2));       // {a=1, b=5, c=4}
    }
}
\`\`\``
    }
];

export default javaCollectionsQuestions;
