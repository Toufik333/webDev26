/**
 * CTCI Study App — Chapter Data
 * 10 chapters, each with key concepts and a 5-question quiz.
 */

const CHAPTERS = [
  // ─── Chapter 1: Arrays & Strings ──────────────────────────────
  {
    id: 1,
    title: "Arrays & Strings",
    icon: "📊",
    description: "Master contiguous memory, hashing tricks, and classic string manipulation patterns.",
    concepts: [
      {
        title: "Array Fundamentals",
        content: "Arrays store elements in contiguous memory, enabling O(1) random access by index. Insertions and deletions at arbitrary positions cost O(n) due to shifting. Dynamic arrays (ArrayList, JavaScript arrays) double their capacity when full, giving amortized O(1) appends.",
        bigO: { access: "O(1)", search: "O(n)", insert: "O(n)", delete: "O(n)", append: "O(1) amortized" },
        tips: [
          "Pre-sort the array when the problem allows — it unlocks two-pointer and binary search techniques.",
          "Watch for off-by-one errors on boundary indices.",
          "If you need O(1) lookups, consider swapping to a hash map."
        ]
      },
      {
        title: "Hash Tables & Sets",
        content: "Hash tables map keys to values using a hash function. Average-case O(1) for insert, delete, and lookup. Collisions degrade to O(n) worst-case but are rare with good hash functions. Use a Set when you only need membership checks without values.",
        bigO: { insert: "O(1) avg", delete: "O(1) avg", lookup: "O(1) avg", worstCase: "O(n)" },
        tips: [
          "Two-Sum pattern: store complements in a hash map for O(n) solution.",
          "Frequency counting: build a char → count map to solve anagram and permutation problems.",
          "Use hash sets to detect duplicates in O(n) time."
        ]
      },
      {
        title: "Two-Pointer Technique",
        content: "Place one pointer at the start and another at the end of a sorted array. Move them inward based on a comparison condition. This converts many O(n²) brute-force solutions to O(n).",
        tips: [
          "Classic applications: pair sum, container with most water, removing duplicates in-place.",
          "Sliding window is a variant — use it for subarray/substring problems with a running window of elements.",
          "Always clarify whether the input is sorted; if not, sort first in O(n log n)."
        ]
      },
      {
        title: "String Manipulation Patterns",
        content: "Strings in most languages are immutable — concatenation in a loop creates O(n²) work. Use a StringBuilder or array-join pattern instead. Common problems involve palindromes, anagrams, substrings, and encoding/decoding.",
        tips: [
          "Check if two strings are anagrams by comparing sorted versions or character frequency maps.",
          "For palindrome checks, use two pointers converging from both ends.",
          "URL encoding, run-length encoding, and string rotation are frequent interview topics."
        ]
      }
    ],
    quiz: [
      {
        question: "What is the time complexity of accessing an element by index in an array?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
        correct: 1,
        explanation: "Arrays store elements contiguously in memory, so any index can be computed as base_address + index × element_size, yielding constant-time O(1) access."
      },
      {
        question: "Which technique converts an O(n²) pair-finding problem on a sorted array into O(n)?",
        options: ["Binary search", "Two-pointer technique", "Divide and conquer", "Breadth-first search"],
        correct: 1,
        explanation: "The two-pointer technique places pointers at both ends and moves them inward, scanning all valid pairs in a single pass — O(n)."
      },
      {
        question: "What does this code output?\n\nlet s = '';\nfor (let i = 0; i < 4; i++) s += 'ab';\nconsole.log(s.length);",
        options: ["4", "6", "8", "2"],
        correct: 2,
        explanation: "'ab' has length 2. Concatenated 4 times → 'abababab' → length 8."
      },
      {
        question: "How do you check if two strings are anagrams in O(n) time?",
        options: [
          "Sort both and compare",
          "Compare character frequency maps",
          "Check if lengths differ",
          "Reverse one and compare"
        ],
        correct: 1,
        explanation: "Building a frequency map for each string takes O(n). Sorting would work but costs O(n log n). Length check alone is insufficient."
      },
      {
        question: "What is the amortized time complexity of appending to a dynamic array?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
        correct: 1,
        explanation: "Dynamic arrays double capacity when full. Most appends are O(1); occasional resizes are O(n), but averaged over n operations the cost is O(1) amortized."
      }
    ]
  },

  // ─── Chapter 2: Linked Lists ──────────────────────────────────
  {
    id: 2,
    title: "Linked Lists",
    icon: "🔗",
    description: "Navigate pointers, detect cycles, and master in-place list manipulation.",
    concepts: [
      {
        title: "Singly vs Doubly Linked Lists",
        content: "A singly linked list stores a value and a next pointer. A doubly linked list adds a prev pointer, enabling O(1) removal from any node if you have a reference. Linked lists trade O(1) random access for O(1) insertions/deletions at known positions.",
        bigO: { access: "O(n)", search: "O(n)", insertAtHead: "O(1)", deleteAtHead: "O(1)", insertAtTail: "O(1) with tail pointer" },
        tips: [
          "Always handle edge cases: empty list, single node, and operations on head/tail.",
          "Use a dummy/sentinel head node to simplify insertion and deletion logic.",
          "Draw the pointer diagram before coding — it prevents most bugs."
        ]
      },
      {
        title: "Runner (Fast & Slow Pointer) Technique",
        content: "Use two pointers moving at different speeds. The fast pointer moves 2 steps while the slow pointer moves 1 step. When fast reaches the end, slow is at the midpoint. If a cycle exists, they will eventually meet.",
        tips: [
          "Cycle detection: if fast and slow meet, there is a cycle (Floyd's algorithm).",
          "Finding the cycle start: after detection, move one pointer to head and advance both by 1 — they meet at the cycle entry.",
          "Finding the middle: when fast reaches the end, slow is at the middle node."
        ]
      },
      {
        title: "Common Linked List Operations",
        content: "Reversing a linked list in-place requires three pointers: prev, current, and next. Merging two sorted lists uses a comparison-based approach similar to merge sort's merge step. Partitioning a list around a value splits it into 'less than' and 'greater than or equal' sublists.",
        tips: [
          "Reverse iteratively: store next, point current.next to prev, advance prev and current.",
          "Recursion works for reversal too but uses O(n) stack space.",
          "For 'kth from end' problems, use two pointers separated by k nodes."
        ]
      }
    ],
    quiz: [
      {
        question: "What is the time complexity of accessing the kth element in a singly linked list?",
        options: ["O(1)", "O(k)", "O(n)", "O(log n)"],
        correct: 2,
        explanation: "You must traverse from the head node-by-node. In the worst case (k = n), this takes O(n)."
      },
      {
        question: "In Floyd's cycle detection, how do the pointers move?",
        options: [
          "Both move 1 step at a time",
          "Fast moves 2 steps, slow moves 1 step",
          "Fast moves 3 steps, slow moves 1 step",
          "They move in opposite directions"
        ],
        correct: 1,
        explanation: "The fast pointer advances 2 nodes per iteration while the slow pointer advances 1. If a cycle exists, they are guaranteed to meet inside the cycle."
      },
      {
        question: "How many pointers are needed to reverse a singly linked list iteratively?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "You need prev (initially null), current (starts at head), and next (temporary storage of current.next before reassigning)."
      },
      {
        question: "What advantage does a doubly linked list have over a singly linked list?",
        options: [
          "O(1) random access",
          "Uses less memory",
          "O(1) deletion of a given node without head traversal",
          "Faster sorting"
        ],
        correct: 2,
        explanation: "With both prev and next pointers, you can unlink a node in O(1) if you already have a reference to it, without needing to traverse from the head to find the predecessor."
      },
      {
        question: "What does a 'dummy head' node simplify in linked list code?",
        options: [
          "Sorting algorithms",
          "Edge cases for insertion/deletion at the head",
          "Memory allocation",
          "Cycle detection"
        ],
        correct: 1,
        explanation: "A dummy (sentinel) node before the real head eliminates special-case code for inserting/deleting at the head, since every real node now has a predecessor."
      }
    ]
  },

  // ─── Chapter 3: Stacks & Queues ───────────────────────────────
  {
    id: 3,
    title: "Stacks & Queues",
    icon: "📚",
    description: "LIFO and FIFO structures — from balanced brackets to BFS traversal.",
    concepts: [
      {
        title: "Stack (LIFO)",
        content: "A stack follows Last-In-First-Out order. Push and pop operations occur at the top and both run in O(1). Stacks naturally model function call chains (the call stack), undo systems, and expression evaluation.",
        bigO: { push: "O(1)", pop: "O(1)", peek: "O(1)", search: "O(n)" },
        tips: [
          "Use a stack for matching parentheses/brackets: push openers, pop on closers, check match.",
          "Monotonic stacks solve 'next greater element' and histogram problems efficiently.",
          "Implement a min-stack by keeping a parallel stack of running minimums."
        ]
      },
      {
        title: "Queue (FIFO)",
        content: "A queue follows First-In-First-Out order. Enqueue adds to the back, dequeue removes from the front — both O(1) with a linked list or circular buffer. Queues are essential for BFS traversal and level-order processing.",
        bigO: { enqueue: "O(1)", dequeue: "O(1)", peek: "O(1)", search: "O(n)" },
        tips: [
          "BFS uses a queue to explore nodes level by level in graphs and trees.",
          "A deque (double-ended queue) supports O(1) operations at both ends.",
          "Implement a queue using two stacks: one for enqueue, one for dequeue — amortized O(1) per operation."
        ]
      },
      {
        title: "Classic Problems",
        content: "Key interview problems include: implement a queue using stacks, sort a stack using only another stack, design a stack that returns the minimum element in O(1), and evaluate postfix (Reverse Polish Notation) expressions using a stack.",
        tips: [
          "Queue via two stacks: push to stack1; for dequeue, if stack2 is empty, pour stack1 into stack2, then pop stack2.",
          "Sort a stack: repeatedly pop from the input stack and insert into a sorted stack by temporarily moving elements.",
          "Priority queues (heaps) are a more powerful generalization of queues — know when to upgrade."
        ]
      }
    ],
    quiz: [
      {
        question: "Which data structure uses LIFO (Last-In-First-Out) ordering?",
        options: ["Queue", "Stack", "Linked List", "Hash Map"],
        correct: 1,
        explanation: "A stack follows LIFO — the most recently added element is the first to be removed."
      },
      {
        question: "What traversal algorithm relies on a queue?",
        options: ["Depth-First Search", "Breadth-First Search", "Binary Search", "Quicksort"],
        correct: 1,
        explanation: "BFS explores all neighbors at the current depth before moving deeper, which requires a FIFO queue to process nodes in the correct order."
      },
      {
        question: "How can you implement a queue using two stacks with amortized O(1) dequeue?",
        options: [
          "Push to stack1; for dequeue, pop from stack1",
          "Push to stack1; for dequeue, move all from stack1 to stack2 if stack2 is empty, then pop stack2",
          "Push to both stacks simultaneously",
          "Use one stack for odd elements and one for even"
        ],
        correct: 1,
        explanation: "Elements move from stack1 to stack2 only when stack2 is empty. Each element is moved at most once, so the amortized cost per dequeue is O(1)."
      },
      {
        question: "What does this stack-based code return?\n\nstack = []\nfor ch in '({[]})':\n  if ch in '({[':\n    stack.append(ch)\n  else:\n    stack.pop()\nprint(len(stack))",
        options: ["0", "3", "6", "1"],
        correct: 0,
        explanation: "The string '({[]})' is balanced. '(' '{' '[' get pushed (3 items), then ']' '}' ')' each pop once → stack is empty → length 0."
      },
      {
        question: "A min-stack supports getMin() in O(1). How is this typically implemented?",
        options: [
          "Sort the stack after each push",
          "Maintain a second stack that tracks the running minimum",
          "Store the minimum in a separate variable only",
          "Use a heap alongside the stack"
        ],
        correct: 1,
        explanation: "A parallel stack stores the current minimum at each level. When you push, also push min(new_value, current_min) onto the min stack. Pop both in sync."
      }
    ]
  },

  // ─── Chapter 4: Trees & Graphs ────────────────────────────────
  {
    id: 4,
    title: "Trees & Graphs",
    icon: "🌳",
    description: "Binary trees, BSTs, graph traversals, and shortest path algorithms.",
    concepts: [
      {
        title: "Binary Trees",
        content: "A binary tree has at most two children per node. Key traversals: in-order (left, root, right), pre-order (root, left, right), post-order (left, right, root), and level-order (BFS). A complete binary tree fills all levels except possibly the last, which fills left to right.",
        bigO: { traversal: "O(n)", height: "O(log n) balanced / O(n) skewed" },
        tips: [
          "In-order traversal of a BST gives sorted output.",
          "Pre-order is useful for serializing/deserializing a tree.",
          "Height-balanced trees (AVL, Red-Black) guarantee O(log n) operations."
        ]
      },
      {
        title: "Binary Search Trees (BST)",
        content: "A BST enforces: left child < parent < right child for every node. This enables O(log n) search, insert, and delete in a balanced tree. An unbalanced BST degrades to O(n) — essentially a linked list.",
        bigO: { search: "O(log n) avg", insert: "O(log n) avg", delete: "O(log n) avg", worstCase: "O(n)" },
        tips: [
          "Validate a BST by passing min/max bounds recursively, not just checking immediate children.",
          "The successor of a node is the leftmost node in its right subtree.",
          "Self-balancing variants (AVL, Red-Black) are rarely coded from scratch but you should understand rotations conceptually."
        ]
      },
      {
        title: "Heaps & Tries",
        content: "A min-heap is a complete binary tree where every parent ≤ its children. Insert and extract-min are O(log n). Heapify an array in O(n). Tries (prefix trees) store strings character-by-character, enabling O(L) prefix lookup where L is the string length.",
        tips: [
          "Use heaps for top-K problems, median finding (two heaps), and priority scheduling.",
          "Tries excel at autocomplete, spell-check, and IP routing.",
          "A heap can be implemented as an array: children of index i are at 2i+1 and 2i+2."
        ]
      },
      {
        title: "Graph Traversals & Algorithms",
        content: "Graphs consist of vertices and edges (directed or undirected). DFS uses a stack (or recursion) and explores as deep as possible before backtracking. BFS uses a queue and explores level by level. Dijkstra's algorithm finds shortest paths in weighted graphs with non-negative edges using a priority queue.",
        bigO: { DFS: "O(V + E)", BFS: "O(V + E)", Dijkstra: "O((V + E) log V)" },
        tips: [
          "Represent graphs as adjacency lists for sparse graphs, adjacency matrices for dense ones.",
          "Detect cycles: in undirected graphs, a back-edge in DFS means a cycle; in directed graphs, track visiting/visited states.",
          "Topological sort applies only to DAGs — use Kahn's algorithm (BFS) or DFS with finish-time ordering."
        ]
      }
    ],
    quiz: [
      {
        question: "What traversal of a BST produces elements in sorted order?",
        options: ["Pre-order", "Post-order", "In-order", "Level-order"],
        correct: 2,
        explanation: "In-order traversal visits left subtree, then root, then right subtree. In a BST this yields ascending sorted order."
      },
      {
        question: "What is the time complexity of BFS on a graph with V vertices and E edges?",
        options: ["O(V²)", "O(V + E)", "O(E log V)", "O(V log V)"],
        correct: 1,
        explanation: "BFS visits every vertex once and examines every edge once, giving O(V + E)."
      },
      {
        question: "How do you validate a binary search tree correctly?",
        options: [
          "Check each node's value > left child and < right child",
          "Pass min/max bounds recursively ensuring every node falls within its valid range",
          "Do a level-order traversal and check if it's sorted",
          "Compare the tree to its mirror"
        ],
        correct: 1,
        explanation: "Checking only immediate children fails for cases where a deeper node violates the BST property. Passing bounds (min, max) down the tree ensures every node is valid relative to all ancestors."
      },
      {
        question: "In a min-heap represented as an array, where are the children of the element at index i?",
        options: ["i-1 and i-2", "2i and 2i+1", "2i+1 and 2i+2", "i/2 and i/2+1"],
        correct: 2,
        explanation: "Using 0-based indexing, the left child is at 2i + 1 and the right child is at 2i + 2. The parent of index i is at floor((i - 1) / 2)."
      },
      {
        question: "Which algorithm finds the shortest path in a weighted graph with non-negative edge weights?",
        options: ["DFS", "BFS", "Dijkstra's algorithm", "Topological sort"],
        correct: 2,
        explanation: "Dijkstra's algorithm uses a priority queue to greedily expand the nearest unvisited vertex, guaranteeing shortest paths when all edge weights are non-negative."
      }
    ]
  },

  // ─── Chapter 5: Bit Manipulation ──────────────────────────────
  {
    id: 5,
    title: "Bit Manipulation",
    icon: "🔢",
    description: "Binary operations, bit tricks, and bitmask patterns for space-efficient solutions.",
    concepts: [
      {
        title: "Bitwise Operators",
        content: "The six core operators: AND (&), OR (|), XOR (^), NOT (~), left shift (<<), right shift (>>). AND masks bits, OR sets bits, XOR toggles bits and detects differences. Left shift doubles a number; right shift halves it (for unsigned).",
        tips: [
          "x & 1 checks if x is odd.",
          "x & (x - 1) clears the lowest set bit — used to count set bits.",
          "x ^ x = 0 and x ^ 0 = x — XOR is its own inverse."
        ]
      },
      {
        title: "Common Bit Tricks",
        content: "Check if a number is a power of 2: x > 0 && (x & (x - 1)) === 0. Swap two numbers without a temp variable using XOR: a ^= b; b ^= a; a ^= b. Count set bits (Hamming weight) by repeatedly clearing the lowest set bit.",
        tips: [
          "To get the ith bit: (num >> i) & 1.",
          "To set the ith bit: num | (1 << i).",
          "To clear the ith bit: num & ~(1 << i)."
        ]
      },
      {
        title: "Bitmask DP & Applications",
        content: "Bitmasks represent subsets of a small set (n ≤ 20) as integers. Each bit represents inclusion/exclusion of an element. This enables subset enumeration and dynamic programming over subsets in O(2ⁿ) space.",
        tips: [
          "Travelling Salesman Problem uses bitmask DP: dp[visited_mask][current_city].",
          "Enumerate all subsets of a mask m: for (let s = m; s > 0; s = (s - 1) & m).",
          "Bitmasks are great for permission systems, feature flags, and board game states."
        ]
      }
    ],
    quiz: [
      {
        question: "What does the expression `n & (n - 1)` do?",
        options: [
          "Sets the lowest bit",
          "Clears the lowest set bit",
          "Flips all bits",
          "Returns the highest set bit"
        ],
        correct: 1,
        explanation: "n - 1 flips the lowest set bit and all bits below it. ANDing with n clears exactly the lowest set bit."
      },
      {
        question: "How do you check if a number is a power of 2?",
        options: [
          "n % 2 === 0",
          "n > 0 && (n & (n - 1)) === 0",
          "n & 1 === 0",
          "(n >> 1) === n / 2"
        ],
        correct: 1,
        explanation: "A power of 2 has exactly one set bit. n & (n - 1) clears it, leaving 0. We also check n > 0 to exclude zero."
      },
      {
        question: "What is the result of 5 ^ 5?",
        options: ["5", "10", "0", "25"],
        correct: 2,
        explanation: "XOR of any number with itself is 0. 5 in binary is 101; 101 ^ 101 = 000 = 0."
      },
      {
        question: "To get the value of the 3rd bit (0-indexed) of a number n, you use:",
        options: ["n & 3", "(n >> 3) & 1", "n | (1 << 3)", "n ^ 3"],
        correct: 1,
        explanation: "Right-shift by 3 positions moves the 3rd bit to position 0, then AND with 1 isolates it."
      },
      {
        question: "What is 6 & 3 in binary?",
        options: ["7 (111)", "2 (010)", "5 (101)", "1 (001)"],
        correct: 1,
        explanation: "6 = 110, 3 = 011. AND: 110 & 011 = 010 = 2."
      }
    ]
  },

  // ─── Chapter 6: Math & Logic Puzzles ──────────────────────────
  {
    id: 6,
    title: "Math & Logic Puzzles",
    icon: "🧩",
    description: "Primes, combinatorics, probability, and brain-teaser strategies.",
    concepts: [
      {
        title: "Prime Numbers & Divisibility",
        content: "A prime has exactly two factors: 1 and itself. Check primality by testing divisors up to √n. The Sieve of Eratosthenes generates all primes up to n in O(n log log n). Every integer > 1 has a unique prime factorization.",
        tips: [
          "To check if n is prime, only test divisors from 2 to √n.",
          "The Sieve of Eratosthenes is the fastest way to find all primes up to n.",
          "GCD via Euclidean algorithm: gcd(a, b) = gcd(b, a % b) until b = 0."
        ]
      },
      {
        title: "Counting & Probability",
        content: "Permutations: n! / (n-r)! for ordered selections. Combinations: n! / (r!(n-r)!) for unordered selections. Probability = favorable outcomes / total outcomes. For independent events, multiply probabilities; for mutually exclusive events, add them.",
        tips: [
          "Use complementary counting: P(at least one) = 1 - P(none).",
          "Pascal's triangle gives combination values: C(n,k) = C(n-1,k-1) + C(n-1,k).",
          "Expected value = Σ (outcome × probability) — useful for average-case analysis."
        ]
      },
      {
        title: "Brain Teaser Strategies",
        content: "Many logic puzzles rely on systematic approaches: work backwards from the answer, identify invariants (properties that don't change), use pigeonhole principle (if n+1 items go into n boxes, at least one box has ≥ 2 items), or reduce the problem to a smaller version.",
        tips: [
          "The '2 egg problem' teaches binary search with constraints — minimize worst-case drops.",
          "For 'find the heavy ball' puzzles, think in terms of information theory — each weighing gives ~1.58 bits.",
          "Modular arithmetic helps with clock/calendar problems."
        ]
      }
    ],
    quiz: [
      {
        question: "What is the time complexity of checking if a number n is prime by trial division?",
        options: ["O(n)", "O(n²)", "O(√n)", "O(log n)"],
        correct: 2,
        explanation: "If n has a factor greater than √n, the corresponding cofactor must be less than √n. So we only need to check divisors up to √n."
      },
      {
        question: "How many ways can you choose 3 items from 5 (combinations)?",
        options: ["60", "10", "15", "20"],
        correct: 1,
        explanation: "C(5,3) = 5! / (3! × 2!) = 120 / (6 × 2) = 10."
      },
      {
        question: "What is gcd(48, 18) using the Euclidean algorithm?",
        options: ["2", "6", "3", "12"],
        correct: 1,
        explanation: "gcd(48, 18) → gcd(18, 48%18) = gcd(18, 12) → gcd(12, 6) → gcd(6, 0) = 6."
      },
      {
        question: "If you flip a fair coin 3 times, what is the probability of getting at least one head?",
        options: ["7/8", "3/8", "1/2", "1/8"],
        correct: 0,
        explanation: "P(at least one head) = 1 - P(no heads) = 1 - (1/2)³ = 1 - 1/8 = 7/8."
      },
      {
        question: "The pigeonhole principle states that if n+1 items are placed into n containers, then:",
        options: [
          "All containers are full",
          "At least one container holds ≥ 2 items",
          "Exactly one container is empty",
          "Items are evenly distributed"
        ],
        correct: 1,
        explanation: "With more items than containers, at least one container must hold more than one item. This is used to prove existence results in combinatorics and computer science."
      }
    ]
  },

  // ─── Chapter 7: Object-Oriented Design ────────────────────────
  {
    id: 7,
    title: "Object-Oriented Design",
    icon: "🏗️",
    description: "Design patterns, SOLID principles, and system modeling for OOP interviews.",
    concepts: [
      {
        title: "Core OOP Principles",
        content: "The four pillars: Encapsulation (hide internal state behind methods), Abstraction (expose only necessary interfaces), Inheritance (reuse code via parent classes), and Polymorphism (same interface, different implementations). Use access modifiers to enforce encapsulation.",
        tips: [
          "Favor composition over inheritance — it's more flexible and avoids tight coupling.",
          "Program to interfaces, not implementations.",
          "Follow the 'is-a' vs 'has-a' rule when choosing between inheritance and composition."
        ]
      },
      {
        title: "SOLID Principles",
        content: "S — Single Responsibility: one class, one reason to change. O — Open/Closed: open for extension, closed for modification. L — Liskov Substitution: subtypes must be usable in place of their parent. I — Interface Segregation: prefer many small interfaces. D — Dependency Inversion: depend on abstractions, not concretions.",
        tips: [
          "Violations of Single Responsibility often manifest as 'God classes' with too many methods.",
          "Open/Closed is achieved through polymorphism and strategy patterns.",
          "Dependency Inversion enables testability via dependency injection."
        ]
      },
      {
        title: "Common Design Patterns",
        content: "Singleton: one instance globally. Factory: create objects without specifying concrete classes. Observer: event-driven publish/subscribe. Strategy: encapsulate interchangeable algorithms. Decorator: add behavior to objects dynamically without altering their class.",
        tips: [
          "In interviews, you'll often design: a parking lot, deck of cards, chat server, or file system.",
          "Start with clarifying requirements, then identify the core objects and their relationships.",
          "Draw class diagrams before coding — show interviewer your thought process."
        ]
      }
    ],
    quiz: [
      {
        question: "Which OOP principle is about hiding internal state and requiring interaction through methods?",
        options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
        correct: 1,
        explanation: "Encapsulation bundles data with the methods that operate on it and restricts direct access to internal state, enforcing controlled interaction."
      },
      {
        question: "What does the 'S' in SOLID stand for?",
        options: [
          "Scalability Principle",
          "Single Responsibility Principle",
          "Substitution Principle",
          "Separation of Concerns"
        ],
        correct: 1,
        explanation: "Single Responsibility Principle: a class should have one, and only one, reason to change."
      },
      {
        question: "Which design pattern ensures only one instance of a class exists?",
        options: ["Factory", "Observer", "Singleton", "Strategy"],
        correct: 2,
        explanation: "Singleton restricts instantiation to one object, typically using a private constructor and a static getInstance() method."
      },
      {
        question: "'Favor composition over inheritance' means:",
        options: [
          "Never use inheritance",
          "Build complex behavior by combining objects rather than deep class hierarchies",
          "Always use abstract classes",
          "Avoid interfaces entirely"
        ],
        correct: 1,
        explanation: "Composition creates flexible designs by assembling objects with specific behaviors, avoiding the rigidity and fragility of deep inheritance hierarchies."
      },
      {
        question: "In the Observer pattern, what happens when the subject's state changes?",
        options: [
          "The subject is destroyed",
          "All registered observers are automatically notified",
          "The factory creates a new subject",
          "The singleton is reset"
        ],
        correct: 1,
        explanation: "The Observer pattern defines a one-to-many dependency. When the subject changes state, it notifies all registered observers so they can update accordingly."
      }
    ]
  },

  // ─── Chapter 8: Recursion & Dynamic Programming ───────────────
  {
    id: 8,
    title: "Recursion & Dynamic Programming",
    icon: "🔄",
    description: "Base cases, memoization, tabulation, and the art of breaking problems into subproblems.",
    concepts: [
      {
        title: "Recursion Fundamentals",
        content: "Every recursive solution needs a base case (when to stop) and a recursive case (how to reduce the problem). The call stack stores each function call's state. Deep recursion can cause stack overflow — consider converting to iteration or using tail recursion where supported.",
        tips: [
          "Always define the base case first when writing recursive functions.",
          "Trust the recursion: assume the recursive call returns the correct answer for smaller inputs.",
          "Draw the recursion tree to understand the time complexity and identify overlapping subproblems."
        ]
      },
      {
        title: "Memoization (Top-Down DP)",
        content: "Memoization caches the results of expensive function calls. If the same inputs occur again, return the cached result instead of recomputing. This transforms exponential-time recursive solutions into polynomial time by eliminating redundant computation.",
        tips: [
          "Fibonacci without memoization: O(2ⁿ). With memoization: O(n).",
          "Use a hash map or array to store computed results.",
          "Memoization works naturally with recursive code — just add a cache check at the top of the function."
        ]
      },
      {
        title: "Tabulation (Bottom-Up DP)",
        content: "Build solutions iteratively from the smallest subproblems up to the target. Fill a table (array) where dp[i] represents the solution to subproblem i. This avoids recursion overhead and is generally more space-efficient.",
        tips: [
          "Classic DP problems: Fibonacci, coin change, longest common subsequence, knapsack, edit distance.",
          "Identify the recurrence relation first, then decide on top-down vs bottom-up.",
          "Space optimization: if dp[i] depends only on dp[i-1] (and maybe dp[i-2]), you can use O(1) space."
        ]
      },
      {
        title: "Recognizing DP Problems",
        content: "DP applies when a problem has: (1) Optimal substructure — optimal solution contains optimal solutions to subproblems, and (2) Overlapping subproblems — the same subproblems are solved multiple times. If only (1) holds, use greedy or divide-and-conquer instead.",
        tips: [
          "Key signals: 'minimum cost', 'maximum profit', 'number of ways', 'is it possible'.",
          "Define the state clearly: what variables uniquely identify a subproblem?",
          "Define the transition: how does the answer to a subproblem relate to smaller subproblems?"
        ]
      }
    ],
    quiz: [
      {
        question: "What are the two essential components of every recursive function?",
        options: [
          "Loop and counter",
          "Base case and recursive case",
          "Stack and queue",
          "Input and output"
        ],
        correct: 1,
        explanation: "The base case defines when recursion stops; the recursive case reduces the problem toward the base case."
      },
      {
        question: "What is the time complexity of naive recursive Fibonacci?",
        options: ["O(n)", "O(n²)", "O(2ⁿ)", "O(n log n)"],
        correct: 2,
        explanation: "Without memoization, each call branches into two, creating a binary tree of calls. The number of nodes is roughly 2ⁿ."
      },
      {
        question: "Memoization transforms recursive Fibonacci from O(2ⁿ) to:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 2,
        explanation: "Each subproblem (fib(0) through fib(n)) is computed exactly once and cached, giving O(n) total work."
      },
      {
        question: "Which two properties must a problem have to be solvable by dynamic programming?",
        options: [
          "Sorted input and binary search",
          "Optimal substructure and overlapping subproblems",
          "Greedy choice and optimal substructure",
          "Divide and conquer and merge step"
        ],
        correct: 1,
        explanation: "Optimal substructure means the optimal solution builds on optimal sub-solutions. Overlapping subproblems means the same subproblems recur, making caching valuable."
      },
      {
        question: "Bottom-up DP differs from top-down memoization in that:",
        options: [
          "It uses recursion",
          "It iteratively fills a table from smallest subproblems upward",
          "It uses more memory",
          "It doesn't require a recurrence relation"
        ],
        correct: 1,
        explanation: "Bottom-up (tabulation) avoids recursion by solving subproblems in increasing order and storing results in a table."
      }
    ]
  },

  // ─── Chapter 9: Sorting & Searching ───────────────────────────
  {
    id: 9,
    title: "Sorting & Searching",
    icon: "🔍",
    description: "Comparison sorts, binary search variants, and choosing the right algorithm.",
    concepts: [
      {
        title: "Comparison-Based Sorting",
        content: "Comparison sorts have a theoretical lower bound of Ω(n log n). Merge sort guarantees O(n log n) but uses O(n) extra space. Quicksort averages O(n log n) with O(1) extra space but has O(n²) worst-case. Heapsort is O(n log n) in all cases with O(1) space.",
        bigO: {
          mergeSort: "O(n log n) time, O(n) space",
          quickSort: "O(n log n) avg, O(n²) worst, O(log n) space",
          heapSort: "O(n log n) time, O(1) space"
        },
        tips: [
          "Merge sort is stable (preserves relative order of equal elements); quicksort typically is not.",
          "Quicksort's worst case occurs with already-sorted input if pivot selection is poor — use random pivots.",
          "For nearly sorted data, insertion sort runs in O(n) — it's used as a subroutine in Timsort."
        ]
      },
      {
        title: "Non-Comparison Sorts",
        content: "Counting sort, radix sort, and bucket sort break the O(n log n) barrier by exploiting properties of the data. Counting sort runs in O(n + k) where k is the range of values. Radix sort processes digits one at a time, running in O(d × (n + k)) where d is the number of digits.",
        tips: [
          "Use counting sort when values fall in a small, known range.",
          "Radix sort works well for fixed-length integers or strings.",
          "Bucket sort distributes elements into buckets, sorts each, then concatenates — O(n) average for uniform distributions."
        ]
      },
      {
        title: "Binary Search & Variants",
        content: "Binary search finds a target in a sorted array in O(log n). Variants include: finding the first/last occurrence, searching in a rotated sorted array, and finding the insertion point (lower/upper bound). The key insight is halving the search space each iteration.",
        tips: [
          "Use lo <= hi with mid = lo + (hi - lo) / 2 to avoid integer overflow.",
          "For 'first occurrence', when found, continue searching left (hi = mid - 1).",
          "Binary search on the answer: when the answer itself is monotonic, binary search the value space."
        ]
      }
    ],
    quiz: [
      {
        question: "What is the theoretical lower bound for comparison-based sorting?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correct: 1,
        explanation: "Any comparison-based sort must make at least Ω(n log n) comparisons in the worst case, proven via decision tree analysis."
      },
      {
        question: "Which sorting algorithm is NOT stable by default?",
        options: ["Merge sort", "Insertion sort", "Quicksort", "Bubble sort"],
        correct: 2,
        explanation: "Quicksort can swap equal elements past each other during partitioning, breaking stability. Merge sort, insertion sort, and bubble sort are all stable."
      },
      {
        question: "In binary search, what is the correct way to compute mid to avoid integer overflow?",
        options: [
          "(lo + hi) / 2",
          "lo + (hi - lo) / 2",
          "(lo + hi) >> 2",
          "hi - lo / 2"
        ],
        correct: 1,
        explanation: "lo + (hi - lo) / 2 avoids overflow that could occur with (lo + hi) / 2 when lo and hi are both large."
      },
      {
        question: "What is the space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 2,
        explanation: "Merge sort requires O(n) auxiliary space for the temporary arrays used during merging."
      },
      {
        question: "When is counting sort preferable over comparison-based sorts?",
        options: [
          "When the data is already sorted",
          "When the range of values is small relative to n",
          "When memory is limited",
          "When elements are strings"
        ],
        correct: 1,
        explanation: "Counting sort runs in O(n + k) where k is the value range. When k is small relative to n, this beats O(n log n) comparison sorts."
      }
    ]
  },

  // ─── Chapter 10: System Design & Scalability ──────────────────
  {
    id: 10,
    title: "System Design & Scalability",
    icon: "🌐",
    description: "Distributed systems, caching, databases, and designing for millions of users.",
    concepts: [
      {
        title: "Scalability Fundamentals",
        content: "Vertical scaling (bigger machine) is simple but limited. Horizontal scaling (more machines) is more complex but virtually unlimited. Load balancers distribute requests across servers. Stateless services scale horizontally more easily than stateful ones.",
        tips: [
          "Always start by clarifying requirements: users, data volume, read/write ratio, latency constraints.",
          "Estimate scale: 1 million users × 10 requests/day = ~115 requests/second on average.",
          "Back-of-envelope calculations impress interviewers — practice them."
        ]
      },
      {
        title: "Caching & CDNs",
        content: "Caches store frequently accessed data in fast storage (RAM) to avoid expensive database queries. Cache strategies: write-through (write to cache and DB), write-back (write to cache, async to DB), cache-aside (app manages cache reads/writes). CDNs cache static content at edge locations worldwide.",
        tips: [
          "Cache invalidation is one of the hardest problems — use TTL (time-to-live) as a simple solution.",
          "Redis and Memcached are the most common in-memory caches.",
          "Cache hit rate above 90% means your caching strategy is working well."
        ]
      },
      {
        title: "Databases & Storage",
        content: "SQL databases (PostgreSQL, MySQL) offer ACID transactions and are great for structured, relational data. NoSQL databases (MongoDB, Cassandra, DynamoDB) trade consistency for scalability and flexibility. Sharding splits data across multiple database instances based on a shard key.",
        tips: [
          "Choose SQL when you need joins, transactions, and data integrity (e.g., financial systems).",
          "Choose NoSQL for high write throughput, flexible schemas, and horizontal scaling (e.g., social feeds, logs).",
          "Database indexing (B-trees) turns O(n) scans into O(log n) lookups — always discuss indexes."
        ]
      },
      {
        title: "Key System Design Patterns",
        content: "Message queues (Kafka, RabbitMQ) decouple producers and consumers. Microservices split a monolith into independently deployable services. API gateways handle authentication, rate limiting, and routing. Consistent hashing distributes data evenly across nodes with minimal redistribution when nodes join/leave.",
        tips: [
          "Common interview designs: URL shortener, Twitter feed, chat application, web crawler.",
          "Follow a structured approach: requirements → high-level design → deep dive → bottlenecks.",
          "Always discuss trade-offs: consistency vs availability (CAP theorem), latency vs throughput."
        ]
      }
    ],
    quiz: [
      {
        question: "What is the main difference between vertical and horizontal scaling?",
        options: [
          "Vertical adds more machines; horizontal adds more power to one machine",
          "Vertical adds more power to one machine; horizontal adds more machines",
          "They are the same thing",
          "Vertical is for databases; horizontal is for applications"
        ],
        correct: 1,
        explanation: "Vertical scaling (scale up) means upgrading a single machine's resources. Horizontal scaling (scale out) means adding more machines to handle the load."
      },
      {
        question: "What is cache invalidation?",
        options: [
          "Adding data to the cache",
          "Removing or updating stale data in the cache",
          "Encrypting cache data",
          "Compressing cache entries"
        ],
        correct: 1,
        explanation: "Cache invalidation ensures the cache doesn't serve outdated data. It's considered one of the two hardest problems in computer science (along with naming things and off-by-one errors)."
      },
      {
        question: "When would you choose a NoSQL database over SQL?",
        options: [
          "When you need ACID transactions",
          "When you need complex joins",
          "When you need high write throughput and horizontal scalability",
          "When data integrity is critical"
        ],
        correct: 2,
        explanation: "NoSQL databases excel at high write throughput, flexible schemas, and horizontal scaling. They sacrifice some consistency and join capabilities compared to SQL databases."
      },
      {
        question: "What does a load balancer do?",
        options: [
          "Stores data in memory",
          "Distributes incoming requests across multiple servers",
          "Compresses network traffic",
          "Encrypts data in transit"
        ],
        correct: 1,
        explanation: "A load balancer distributes incoming network traffic across multiple servers to ensure no single server is overwhelmed, improving reliability and performance."
      },
      {
        question: "The CAP theorem states that a distributed system can guarantee at most how many of Consistency, Availability, and Partition tolerance?",
        options: ["1", "2", "3", "It depends on the database"],
        correct: 1,
        explanation: "The CAP theorem proves that in the presence of a network partition, a distributed system must choose between consistency (all nodes see the same data) and availability (every request gets a response). You can have at most 2 of the 3."
      }
    ]
  }
];
