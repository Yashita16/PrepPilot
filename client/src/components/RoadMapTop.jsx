import React, { useState } from "react";
import {
  CheckCircle,
  Lock,
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  Brain,
  Server,
  Monitor,
  Briefcase,
  Mic,
} from "lucide-react";
import DashCard from './DashCard'

const RoadMapTop = () => {
  const roadmapData = [
  {
    id: 1,
    title: "Programming Fundamentals",
    description: "Build strong programming basics.",
    progress: 100,
    status: "Completed",
    color: "from-green-400 to-green-600",
    icon: <CheckCircle size={22} />,
    topics: [
      "C++ Basics",
      "Time & Space Complexity",
      "Arrays & Strings",
      "Functions",
      "Recursion",
    ],
  },
  {
    id: 2,
    title: "Data Structures",
    description: "Learn essential data structures.",
    progress: 75,
    status: "In Progress",
    color: "from-blue-400 to-blue-600",
    icon: <Code2 size={22} />,
    topics: [
      "Arrays",
      "Linked List",
      "Stack",
      "Queue",
      "Trees",
      "Graphs",
    ],
  },
  {
    id: 3,
    title: "Algorithms",
    description: "Master important algorithms.",
    progress: 40,
    status: "In Progress",
    color: "from-purple-400 to-purple-600",
    icon: <Brain size={22} />,
    topics: [
      "Sliding Window",
      "Dynamic Programming",
      "Graph",
      "Greedy",
      "Binary Search",
    ],
  },
  {
    id: 4,
    title: "Core CS Subjects",
    description: "Strengthen computer science basics.",
    progress: 0,
    status: "Locked",
    color: "from-orange-400 to-orange-600",
    icon: <Database size={22} />,
    topics: ["DBMS", "Operating System", "Computer Networks"],
  },
  {
    id: 5,
    title: "System Design",
    description: "Learn to design scalable systems.",
    progress: 0,
    status: "Locked",
    color: "from-pink-400 to-pink-600",
    icon: <Server size={22} />,
    topics: ["Scalability", "Caching", "API Design"],
  },
  {
    id: 6,
    title: "Mock Interviews",
    description: "Practice real interview scenarios.",
    progress: 0,
    status: "Locked",
    color: "from-cyan-400 to-cyan-600",
    icon: <Mic size={22} />,
    topics: ["Technical Interview", "HR Interview", "DSA Round"],
  },
  {
    id: 7,
    title: "Placement Preparation",
    description: "Final preparation for placements.",
    progress: 0,
    status: "Locked",
    color: "from-yellow-400 to-yellow-600",
    icon: <Briefcase size={22} />,
    topics: ["Resume Building", "Aptitude", "Company Prep"],
  },
];

const [open, setOpen] = useState(false);

  return (
    <div className='w-full bg-[#2A2455]/70 backdrop-blur-md rounded-2xl p-2 shadow-lg flex flex-col' >
      <div className='text-white font-bold text-2xl'>Your Study RoadMap</div>
      <p className='text-gray-500 text-sm mt-2'>Personalized path to crack your dream job</p>
      <DashCard></DashCard>

      <div className='mt-5'>
        {roadmapData.map((item)=>(
          <div key={item.id} className={`relative flex gap-5 `}>
            <div className='flex flex-col items-center'>
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                {item.icon}
                 </div>
                 {item.id!=roadmapData.length && (
                  <div className='w-[2px] flex-1 bg-gradient-to-b from-gray-600 to-gray-800 mt-2'> </div>
                 )}
              </div>

              <div className='flex-1 mb-6'>
                <div className='bg-[#111827]/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-5 shadow-xl hover:border-indigo-500 transition-all duration-300'>
                <div className='flex items-start justify-between'>
                  <div>
                    <p className='text-sm text-indigo-400 font-medium mb-1'>Phase {item.id}</p>
                    <h2 className='text-xl font-semibold text-white'>{item.title}</h2>
                    <p className='text-gray-400 text-sm mt-1'>
                      {item.description}
                    </p>
                  </div>

                  <button onClick={()=>setOpen(!open)} className='text-gray-400 hover:text-white transition' >
                     {open ? <ChevronUp /> : <ChevronDown />}

                  </button>
                  </div>

                   <div className="flex items-center justify-between mt-5">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                item.status === "Completed"
                  ? "bg-green-500/20 text-green-400"
                  : item.status === "In Progress"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {item.status === "Locked" && (
                <Lock size={12} className="inline mr-1" />
              )}
              {item.status}
            </span>

            <span className="text-sm text-gray-300">
              {item.progress}%
            </span>
          </div>


          <div className="w-full h-2 bg-gray-700 rounded-full mt-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>


          <div className="flex flex-wrap gap-2 mt-5">
            {item.topics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-lg bg-gray-800 text-gray-300 border border-gray-700"
              >
                {topic}
              </span>
            ))}
          </div>



           {open && (
            <div className="mt-5 border-t border-gray-700 pt-4 text-sm text-gray-400">
              <p>
                Complete this phase to unlock advanced interview preparation
                and personalized learning insights in PrepPilot.
              </p>
            </div>
          )}



                    

                  </div>
                </div>


            
           
            
          </div>
        ))}
      </div>
      <div className='flex flex-col'>

        </div>

      </div>

      
  
  )
}

export default RoadMapTop
