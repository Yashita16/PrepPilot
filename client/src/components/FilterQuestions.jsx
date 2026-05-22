import React from 'react'
import Select from 'react-select'

const FilterQuestions = () => {

  const dsaTopics = [
    {
      topic: "Arrays",
      subTopics: [
        "Traversal",
        "Prefix Sum",
        "Kadane Algorithm",
        "Two Sum",
        "Subarray Problems",
        "Merge Intervals",
        "Dutch National Flag",
        "Majority Element",
        "Array Rotation"
      ]
    },

    {
      topic: "Strings",
      subTopics: [
        "Palindrome",
        "Anagram",
        "Pattern Matching",
        "String Compression",
        "Substring Problems",
        "Longest Common Prefix",
        "Rabin Karp",
        "KMP Algorithm"
      ]
    },

    {
      topic: "Linked List",
      subTopics: [
        "Reverse Linked List",
        "Cycle Detection",
        "Merge Linked List",
        "Middle Node",
        "Intersection"
      ]
    },

    {
      topic: "Stack",
      subTopics: [
        "Balanced Parentheses",
        "Next Greater Element",
        "Monotonic Stack",
        "Min Stack"
      ]
    },

    {
      topic: "Queue",
      subTopics: [
        "Circular Queue",
        "Deque",
        "Priority Queue"
      ]
    },

    {
      topic: "Binary Search",
      subTopics: [
        "Lower Bound",
        "Upper Bound",
        "Search in Rotated Array",
        "Binary Search on Answer"
      ]
    },

    {
      topic: "Trees",
      subTopics: [
        "Preorder",
        "Inorder",
        "Postorder",
        "Level Order",
        "Lowest Common Ancestor"
      ]
    },

    {
      topic: "Graph",
      subTopics: [
        "DFS",
        "BFS",
        "Dijkstra",
        "Topological Sort",
        "Minimum Spanning Tree"
      ]
    },

    {
      topic: "Dynamic Programming",
      subTopics: [
        "Memoization",
        "Tabulation",
        "Knapsack",
        "Longest Common Subsequence"
      ]
    },

    {
      topic: "SQL",
      subTopics: [
        "Joins",
        "GROUP BY",
        "HAVING",
        "Subqueries",
        "Window Functions",
        "Normalization"
      ]
    }
  ]


       const companies = [

  // FAANG
  { value: "google", label: "Google" },
  { value: "amazon", label: "Amazon" },
  { value: "microsoft", label: "Microsoft" },
  { value: "meta", label: "Meta" },
  { value: "apple", label: "Apple" },
  { value: "netflix", label: "Netflix" },

  // Product Companies
  { value: "adobe", label: "Adobe" },
  { value: "oracle", label: "Oracle" },
  { value: "salesforce", label: "Salesforce" },
  { value: "uber", label: "Uber" },
  { value: "airbnb", label: "Airbnb" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "paypal", label: "PayPal" },
  { value: "spotify", label: "Spotify" },
  { value: "atlassian", label: "Atlassian" },
  { value: "intel", label: "Intel" },
  { value: "nvidia", label: "NVIDIA" },
  { value: "samsung", label: "Samsung" },
  { value: "tesla", label: "Tesla" },

  // Indian Product Companies
  { value: "flipkart", label: "Flipkart" },
  { value: "swiggy", label: "Swiggy" },
  { value: "zomato", label: "Zomato" },
  { value: "razorpay", label: "Razorpay" },
  { value: "paytm", label: "Paytm" },
  { value: "ola", label: "Ola" },
  { value: "cred", label: "CRED" },
  { value: "phonepe", label: "PhonePe" },
  { value: "meesho", label: "Meesho" },

  // Service Companies
  { value: "tcs", label: "TCS" },
  { value: "infosys", label: "Infosys" },
  { value: "wipro", label: "Wipro" },
  { value: "cognizant", label: "Cognizant" },
  { value: "accenture", label: "Accenture" },
  { value: "capgemini", label: "Capgemini" },

  // Startup / Popular Tech
  { value: "openai", label: "OpenAI" },
  { value: "stripe", label: "Stripe" },
  { value: "discord", label: "Discord" },
  { value: "mongodb", label: "MongoDB" },
  { value: "notion", label: "Notion" },
  { value: "figma", label: "Figma" }

]


const questionTypes = [

  { value: "coding", label: "Coding Problem" },
  { value: "mcq", label: "MCQ" },
  { value: "theory", label: "Theory Question" },
  { value: "output", label: "Predict Output" },
  { value: "debugging", label: "Debugging" },
  { value: "code-completion", label: "Code Completion" },
  { value: "interview", label: "Interview Question" },
  { value: "scenario", label: "Scenario Based" },
  { value: "system-design", label: "System Design" },
  { value: "sql-query", label: "SQL Query Writing" },
  { value: "aptitude", label: "Aptitude" },
  { value: "puzzle", label: "Puzzle" },
  { value: "case-study", label: "Case Study" },
  { value: "behavioral", label: "Behavioral Question" }

]
const tags = [

  { value: "must-do", label: "Must Do" },
  { value: "frequently-asked", label: "Frequently Asked" },
  { value: "top-interview", label: "Top Interview" },
  { value: "important", label: "Important" },
  { value: "revision", label: "Revision" },
  { value: "blind75", label: "Blind 75" },
  { value: "neetcode150", label: "NeetCode 150" },
  { value: "striver-sde", label: "Striver SDE Sheet" },
  { value: "contest", label: "Contest Problem" },
  { value: "company-favorite", label: "Company Favorite" },
  { value: "tricky", label: "Tricky" },
  { value: "easy-win", label: "Easy Win" },
  { value: "high-frequency", label: "High Frequency" },
  { value: "core-concept", label: "Core Concept" },
  { value: "leetcode", label: "LeetCode" }

]

const sortBy = [

  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "easy-hard", label: "Easy → Hard" },
  { value: "hard-easy", label: "Hard → Easy" },
  { value: "popularity", label: "Popularity" },
  { value: "frequency", label: "Interview Frequency" },
  { value: "acceptance", label: "Acceptance Rate" },
  { value: "time", label: "Time Required" },
  { value: "solved", label: "Solved First" },
  { value: "unsolved", label: "Unsolved First" }

]

  const topicOptions = dsaTopics.flatMap(topic => [

    {
      value: topic.topic.toLowerCase(),
      label: `📁 ${topic.topic}`
    },

    ...topic.subTopics.map(sub => ({
      value: sub.toLowerCase().replace(/\s+/g, "-"),
      label: ` └ ${sub}`
    }))

  ])

  return (
    <div className='w-full min-h-[20vh] p-5 mt-6 bg-[#2A2455]/70 backdrop-blur-md rounded-2xl shadow-lg'>

      <h2 className='text-white text-xl font-semibold mb-4'>
        Filter Questions
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Questions"
          className='bg-[#443C7A] text-white rounded-lg p-3 outline-none'
        />

        {/* Difficulty */}
        <select className='bg-[#443C7A] text-white rounded-lg p-3 outline-none'>

          <option>Select Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>

        </select>

        {/* Topic Filter */}
        <Select
          options={topicOptions}
          isSearchable
          isMulti
          placeholder="Search DSA / SQL Topics"

          styles={{
            control: (base) => ({
              ...base,
              backgroundColor:"#443C7A",
              border:"none",
              minHeight:"48px"
            }),

            menu:(base)=>({
              ...base,
              backgroundColor:"#2A2455"
            }),

            option:(base,state)=>({
              ...base,
              backgroundColor:
                state.isFocused
                ? "#6D5DD3"
                : "#2A2455",
              color:"white"
            }),

            input:(base)=>({
              ...base,
              color:"white"
            }),

            singleValue:(base)=>({
              ...base,
              color:"white"
            }),

            multiValue:(base)=>({
              ...base,
              backgroundColor:"#6D5DD3"
            }),

            multiValueLabel:(base)=>({
              ...base,
              color:"white"
            })
          }}
        />


        <Select
  options={companies}
  isSearchable
  isMulti
  placeholder="Select Companies"

  styles={{
    control:(base)=>({
      ...base,
      backgroundColor:"#443C7A",
      border:"none",
      minHeight:"48px"
    }),

    menu:(base)=>({
      ...base,
      backgroundColor:"#2A2455"
    }),

    option:(base,state)=>({
      ...base,
      backgroundColor:
      state.isFocused
      ? "#6D5DD3"
      : "#2A2455",
      color:"white"
    }),

    input:(base)=>({
      ...base,
      color:"white"
    }),

    multiValue:(base)=>({
      ...base,
      backgroundColor:"#6D5DD3"
    }),

    multiValueLabel:(base)=>({
      ...base,
      color:"white"
    })
  }}
/>

<Select
  options={questionTypes}
  isSearchable
  isMulti
  placeholder="Question Type"
  styles={{
    control:(base)=>({
      ...base,
      backgroundColor:"#443C7A",
      border:"none",
      minHeight:"48px"
    }),
    menu:(base)=>({
      ...base,
      backgroundColor:"#2A2455"
    }),
    option:(base,state)=>({
      ...base,
      backgroundColor:
      state.isFocused
      ? "#6D5DD3"
      : "#2A2455",
      color:"white"
    }),
    input:(base)=>({
      ...base,
      color:"white"
    }),
    multiValue:(base)=>({
      ...base,
      backgroundColor:"#6D5DD3"
    }),
    multiValueLabel:(base)=>({
      ...base,
      color:"white"
    })
  }}
/>


{/* Tags Filter */}
<Select
  options={tags}
  isSearchable
  isMulti
  placeholder="Select Tags"
  styles={{
    control:(base)=>({
      ...base,
      backgroundColor:"#443C7A",
      border:"none",
      minHeight:"48px"
    }),
    menu:(base)=>({
      ...base,
      backgroundColor:"#2A2455"
    }),
    option:(base,state)=>({
      ...base,
      backgroundColor:
      state.isFocused
      ? "#6D5DD3"
      : "#2A2455",
      color:"white"
    }),
    input:(base)=>({
      ...base,
      color:"white"
    }),
    multiValue:(base)=>({
      ...base,
      backgroundColor:"#6D5DD3"
    }),
    multiValueLabel:(base)=>({
      ...base,
      color:"white"
    })
  }}
/>

{/* Sort By Filter */}
<Select
  options={sortBy}
  placeholder="Sort By"
  styles={{
    control:(base)=>({
      ...base,
      backgroundColor:"#443C7A",
      border:"none",
      minHeight:"48px"
    }),
    menu:(base)=>({
      ...base,
      backgroundColor:"#2A2455"
    }),
    option:(base,state)=>({
      ...base,
      backgroundColor:
      state.isFocused
      ? "#6D5DD3"
      : "#2A2455",
      color:"white"
    }),
    singleValue:(base)=>({
      ...base,
      color:"white"
    })
  }}
/>


<button className='bg-Secondary shadow-lg rounded cursor-pointer hover:font-bold text-white'>
  Apply Filter
</button>

      </div>

        <div className='grid grid-cols-2 gap-4 mt-4 cursor-pointer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>

  <div className='bg-[#443C7A] text-white rounded-lg p-3 flex justify-between items-center hover:scale-105 transition-all duration-300'>

    <div>
      All Questions
    </div>

    <div className='bg-[#6D5DD3] px-3 py-1 rounded-full'>
      125
    </div>

  </div>

   <div className='bg-[#443C7A] text-white rounded-lg p-3 flex justify-between items-center hover:scale-105 transition-all duration-300'>

    <div>
      Must Attend
    </div>

    <div className='bg-[#6D5DD3] px-3 py-1 rounded-full'>
      150
    </div>

  </div>

   <div className='bg-[#443C7A] text-white rounded-lg p-3 flex justify-between items-center hover:scale-105 transition-all duration-300'>

    <div>
      Book Marked
    </div>

    <div className='bg-[#6D5DD3] px-3 py-1 rounded-full'>
      25
    </div>

  </div>

   <div className='bg-[#443C7A] text-white rounded-lg p-3 flex justify-between items-center hover:scale-105 transition-all duration-300'>

    <div>
      Attempted
    </div>

    <div className='bg-[#6D5DD3] px-3 py-1 rounded-full'>
      125
    </div>

  </div>

   <div className='bg-[#443C7A] text-white rounded-lg p-3 flex justify-between items-center hover:scale-105 transition-all duration-300'>

    <div>
      Not Attempted
    </div>

    <div className='bg-[#6D5DD3] px-3 py-1 rounded-full'>
      825
    </div>

  </div>

</div>

      </div>

  
  )
}

export default FilterQuestions