import React from 'react'

const TodayTask = () => {

  const tasks = [
    "Solve Binary Search Question",
    "Complete Mock Interview",
    "Practice React Hooks",
    "Solve Dynamic Programming Question",
    "Revise DSA Notes"
  ]

  const skills = [
  {
    name: "DSA",
    progress: Math.floor(Math.random() * 100) + 1
  },
  {
    name: "DBMS",
    progress: Math.floor(Math.random() * 100) + 1
  },
  {
    name: "OS",
    progress: Math.floor(Math.random() * 100) + 1
  },
  {
    name: "Communication",
    progress: Math.floor(Math.random() * 100) + 1
  }
]
  return (
    <div className='w-full mt-5 flex flex-row gap-5'>

      <div className='bg-[#2A2455]/70 backdrop-blur-md rounded-2xl
      p-5 shadow-lg hover:shadow-2xl transition-all duration-300
      w-[30vw] h-[35vh]'>

        <h2 className='text-white text-xl font-bold mb-4'>
          Today's Tasks
        </h2>

        {/* Task List */}
        <div className='flex flex-col gap-3 overflow-y-auto h-[25vh] pr-2'>

          {tasks.map((task,index)=>(
            <div
              key={index}
              className='border border-gray-600 rounded-xl
              p-3 flex justify-between items-center
              hover:bg-[#3B3570] transition-all duration-300'
            >

              <p className='text-white font-medium text-sm'>
                {task}
              </p>

              <input
                type='checkbox'
                className='w-5 h-5 cursor-pointer'
              />

            </div>
          ))}

        </div>

      </div>

      <div className='bg-[#2A2455]/70 backdrop-blur-md rounded-2xl
      p-5 shadow-lg hover:shadow-2xl transition-all duration-300
      w-[50vw] h-[35vh]'>

        <h2 className='text-white text-xl font-bold mb-4'>
          Skills Progress
        </h2>

        {/* Task List */}
        <div className='flex flex-col gap-3 overflow-y-auto h-[25vh] pr-2'>

          {skills.map((skill,index)=>(
            <div
              key={index}
              className='border border-gray-600 rounded-xl
              p-3 flex justify-between items-center
              hover:bg-[#3B3570] transition-all duration-300'
            >

              <p className='text-white font-medium text-sm'>
                {skill.name}
              </p>

              <div className='w-24 h-2 bg-gray-600 rounded-full overflow-hidden'>
                <div
                  className='h-full bg-blue-500'
                  style={{ width: `${skill.progress}%` }}
                />
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default TodayTask