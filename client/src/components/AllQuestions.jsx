import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AllQuestions = () => {
const questions = [
  {
    id: 1,
    title: "Two Sum",
    tags: ["Array"],
    topic: "Arrays",
    difficulty: "Easy",
    acceptance: "78%",
    companies: ["G", "M", "A"],
    extraCompanies: 2,
    link: "https://leetcode.com/problems/two-sum/"
  },

  {
    id: 2,
    title: "Add Two Numbers",
    tags: ["Linked List"],
    topic: "Linked List",
    difficulty: "Medium",
    acceptance: "74%",
    companies: ["G", "A", "M"],
    extraCompanies: 1,
    link: "https://leetcode.com/problems/add-two-numbers/"
  },

  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    tags: ["String"],
    topic: "Strings",
    difficulty: "Medium",
    acceptance: "68%",
    companies: ["G", "A", "M"],
    extraCompanies: 3,
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },

  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    tags: ["Array"],
    topic: "Arrays",
    difficulty: "Hard",
    acceptance: "65%",
    companies: ["G", "A", "Apple"],
    extraCompanies: 2,
    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
  },

  {
    id: 5,
    title: "Reverse Linked List",
    tags: ["Linked List"],
    topic: "Linked List",
    difficulty: "Easy",
    acceptance: "82%",
    companies: ["G", "A", "M"],
    extraCompanies: 2,
    link: "https://leetcode.com/problems/reverse-linked-list/"
  },

  {
    id: 6,
    title: "Valid Parentheses",
    tags: ["Stack"],
    topic: "Stack",
    difficulty: "Easy",
    acceptance: "86%",
    companies: ["G", "Apple", "M"],
    extraCompanies: 1,
    link: "https://leetcode.com/problems/valid-parentheses/"
  },

  {
    id: 7,
    title: "Merge K Sorted Lists",
    tags: ["Heap"],
    topic: "Heap",
    difficulty: "Hard",
    acceptance: "63%",
    companies: ["A", "G", "M"],
    extraCompanies: 2,
    link: "https://leetcode.com/problems/merge-k-sorted-lists/"
  },

  {
    id: 8,
    title: "Climbing Stairs",
    tags: ["DP"],
    topic: "DP",
    difficulty: "Easy",
    acceptance: "84%",
    companies: ["G", "Meta"],
    extraCompanies: 1,
    link: "https://leetcode.com/problems/climbing-stairs/"
  }
  
];

 const navigate = useNavigate();
  const [starredIds, setStarredIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 25;

  const toggleStar = (id) => {
    setStarredIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-[#13132b] border border-[#2a2a45] rounded-2xl overflow-hidden mt-4">

      {/* Header */}
      <div className="px-5 py-4 border-b border-[#2a2a45]">
        <h2 className="text-white font-bold text-lg">
          All Questions
        </h2>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 px-5 py-3 text-xs font-semibold text-gray-500 uppercase border-b border-[#2a2a45]">

        <div className="col-span-5">Question</div>
        <div className="col-span-2">Topic</div>
        <div className="col-span-1">Difficulty</div>
        <div className="col-span-1">Acceptance</div>
        <div className="col-span-2">Companies</div>
        <div className="col-span-1 text-right">
          Actions
        </div>

      </div>

      {/* Question Rows */}

      {questions.map((q, idx) => (

        <div
          key={q.id}
          className={`grid grid-cols-12 items-center px-5 py-4 hover:bg-[#1a1a35] transition ${
            idx !== questions.length - 1
              ? "border-b border-[#2a2a45]"
              : ""
          }`}
        >

          {/* Question */}

          <div className="col-span-5 flex gap-3 items-center">

            <button
              onClick={() => toggleStar(q.id)}
            >
              <svg
                className={`w-5 h-5 ${
                  starredIds.includes(q.id)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-600"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  d="M11.049 2.927L13 8.5l6 .5-4.5 3.5L16 19l-5-3-5 3 1.5-6.5L3 9l6-.5z"
                />
              </svg>
            </button>

            <span className="text-gray-500">
              {q.id}.
            </span>

            <div>
              <h3 className="text-white font-medium">
                {q.title}
              </h3>

              <div className="flex gap-2 mt-1 flex-wrap">
                {q.tags.map((tag) => (
                  <TagBadge
                    key={tag}
                    label={tag}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Topic */}

          <div className="col-span-2 text-gray-400">
            {q.topic}
          </div>

          {/* Difficulty */}

          <div className="col-span-1">
            <DifficultyBadge
              level={q.difficulty}
            />
          </div>

          {/* Acceptance */}

          <div className="col-span-1 text-gray-400">
            {q.acceptance}
          </div>

          {/* Companies */}

          <div className="col-span-2 flex gap-2">

            {q.companies.map((company, index) => (
              <CompanyIcon
                key={index}
                name={company}
              />
            ))}

            {q.extraCompanies > 0 && (
              <span className="text-gray-500 text-xs">
                +{q.extraCompanies}
              </span>
            )}

          </div>

          {/* Action */}

          <div className="col-span-1 flex justify-end gap-2">

            <button 
              className="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-1.5 rounded-lg cursor-pointer "
              onClick={() => window.open(q.link, "_blank")}
            >
              Solve
            </button>

          </div>
        </div>
      ))}

      {/* Pagination */}

      <div className="flex justify-between items-center px-5 py-4 border-t border-[#2a2a45]">

        <div className="flex gap-2">

          {Array.from(
            { length: 5 },
            (_, i) => i + 1
          ).map((page) => (

            <button
              key={page}
              onClick={() =>
                setCurrentPage(page)
              }
              className={`w-8 h-8 rounded-lg ${
                currentPage === page
                  ? "bg-purple-600 text-white"
                  : "bg-[#1a1a2e] text-gray-400"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <p className="text-gray-500 text-sm">
          Page {currentPage} of {totalPages}
        </p>

      </div>

    </div>
  );
};

export default AllQuestions;



const TagBadge = ({ label }) => (
  <span className="bg-[#1d1d38] text-purple-300 px-2 py-1 rounded-md text-xs">
    {label}
  </span>
);

const DifficultyBadge = ({ level }) => {

  const styles = {
    Easy: "text-green-400",
    Medium: "text-yellow-400",
    Hard: "text-red-400",
  };

  return (
    <span className={`font-semibold ${styles[level]}`}>
      {level}
    </span>
  );
};

const CompanyIcon = ({ name }) => (
  <div className="w-7 h-7 rounded-full bg-[#1d1d38] text-white flex items-center justify-center text-xs">
    {name[0]}
  </div>
);