import React from "react";

const subjectData = [
  {
    subject: "Data Structures & Algorithms",
    accuracy: 85,
    solved: "62/80",
  },
  {
    subject: "Database Management System",
    accuracy: 70,
    solved: "28/40",
  },
  {
    subject: "Operating Systems",
    accuracy: 75,
    solved: "30/40",
  },
  {
    subject: "Computer Networks",
    accuracy: 60,
    solved: "18/30",
  },
  {
    subject: "System Design",
    accuracy: 65,
    solved: "13/20",
  },
  {
    subject: "Aptitude",
    accuracy: 80,
    solved: "40/50",
  },
];

const SubjectWisePerformance = () => {
  return (
    <div className="bg-[#1f1d4d] rounded-3xl p-8 border border-[#35326d] shadow-lg m-4">

      {/* Heading */}

      <h2 className="text-white text-2xl font-bold mb-8">
        Subject-wise Performance
      </h2>

      {/* Column labels */}

      <div className="grid grid-cols-[2fr_3fr_1fr_1fr] mb-6 text-gray-400 font-medium">
        <div></div>
        <div></div>
        <div>Accuracy</div>
        <div>Questions Solved</div>
      </div>

      {subjectData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[2fr_3fr_1fr_1fr] items-center gap-5 mb-8"
        >
          {/* Subject */}

          <p className="text-gray-200">
            {item.subject}
          </p>

          {/* Dynamic Progress */}

          <div className="w-full h-3 rounded-full bg-[#34306d] overflow-hidden">

            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${item.accuracy}%`,
                background:
                  "linear-gradient(to right,#7C3AED,#A855F7)"
              }}
            />
          </div>

          {/* Accuracy */}

          <p className="text-white font-semibold">
            {item.accuracy}%
          </p>

          {/* Solved */}

          <p className="text-gray-300">
            {item.solved}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SubjectWisePerformance;