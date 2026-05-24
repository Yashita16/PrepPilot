import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar
} from "recharts";

const data = [
  { day: "Mon", solved: 50, accuracy: 30 },
  { day: "Tue", solved: 60, accuracy: 35 },
  { day: "Wed", solved: 80, accuracy: 48 },
  { day: "Thu", solved: 50, accuracy: 33 },
  { day: "Fri", solved: 65, accuracy: 42 },
  { day: "Sat", solved: 70, accuracy: 50 },
  { day: "Sun", solved: 95, accuracy: 60 },
];

const accuracyData = [
  {
    value: 82,
    fill: "#6D28D9",
  },
];

const PerformanceOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-[#2A2455]/70 backdrop-blur-md rounded-2xl m-4">

      {/* Performance Overview Card */}
      <div className=" rounded-2xl shadow-sm p-5 border border-[#2a2a45]">

        <div className="flex justify-between items-center mb-5 ">
          <h2 className="font-semibold text-lg text-white">
            Performance Overview
          </h2>

          <select className="border rounded-lg px-3 py-1 text-sm text-white bg-[#1a1a2e]">
            <option>This Week</option>
            <option>This Month</option>
            <option value="">Last 5 days</option>
            <option value="">This Year</option>
          </select>
        </div>

        {/* Legends */}

        <div className="flex gap-5 text-sm mb-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span>Questions Solved</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Accuracy</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />

            <Line
              type="monotone"
              dataKey="solved"
              stroke="#6D28D9"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="#22C55E"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Accuracy Card */}

      <div className="border border-[#2a2a45] rounded-2xl shadow-sm p-5 ">

        <div className="flex justify-between items-center ">
          <h2 className="font-semibold text-lg text-white">
            Accuracy Trend
          </h2>

          <select className="border rounded-lg px-3 py-1 text-sm">
            <option>This Week</option>
            <option>This Month</option>
            <option value="">Last 5 days</option>
            <option value="">This Year</option>
          </select>
        </div>

        <div className="relative flex justify-center items-center mt-5">

          <RadialBarChart
            width={280}
            height={200}
            innerRadius="70%"
            outerRadius="100%"
            barSize={14}
            data={accuracyData}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              background
              dataKey="value"
            />
          </RadialBarChart>

          <div className="absolute text-center top-20">
            <h1 className="text-4xl font-bold text-white">82%</h1>
            <p className="text-gray-500">
              Accuracy
            </p>
          </div>

        </div>

        <div className="bg-[#2A2455]/70 backdrop-blur-md rounded-xl p-4 text-center mt-4 ">
          <p className="text-green-600 font-semibold bg-green-100 inline-block px-3 py-1 rounded-full ">
            ↑ 6% improvement
          </p>

          <p className="text-white text-sm">
            vs last week
          </p>
        </div>

      </div>

    </div>
  );
};

export default PerformanceOverview;