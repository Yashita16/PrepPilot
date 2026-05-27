import React, { useEffect, useState } from "react";
import {
  Bell,
  Trophy,
  Flame,
  Star,
  Medal,
  Crown,
  Filter,
  ChevronDown,
} from "lucide-react";

const StatCard = () => {
  // =========================
  // STATES
  // =========================
  const [selectedTab, setSelectedTab] = useState("Global");
  const [timeFilter, setTimeFilter] = useState("This Week");

  const [stats, setStats] = useState({
    rank: 24,
    xp: 4250,
    solved: 320,
    streak: 12,
  });

  const [leaderboard, setLeaderboard] = useState([]);

  // =========================
  // FETCH DATA
  // =========================
  useEffect(() => {
    // API call simulation
    const fetchLeaderboard = async () => {
      const data = [
        {
          id: 1,
          rank: 4,
          name: "Arjun Verma",
          xp: 4780,
          solved: 410,
          streak: 15,
          badge: "Pro",
          avatar: "https://i.pravatar.cc/150?img=11",
        },
        {
          id: 2,
          rank: 5,
          name: "Meera Iyer",
          xp: 4520,
          solved: 365,
          streak: 10,
          badge: "Expert",
          avatar: "https://i.pravatar.cc/150?img=12",
        },
        {
          id: 3,
          rank: 6,
          name: "Siddharth Jain",
          xp: 4150,
          solved: 310,
          streak: 8,
          badge: "Intermediate",
          avatar: "https://i.pravatar.cc/150?img=13",
        },
        {
          id: 4,
          rank: 7,
          name: "Pooja Gupta",
          xp: 3890,
          solved: 280,
          streak: 7,
          badge: "Intermediate",
          avatar: "https://i.pravatar.cc/150?img=14",
        },
      ];

      setLeaderboard(data);
    };

    fetchLeaderboard();
  }, []);

  // =========================
  // TOP 3 USERS
  // =========================
  const topThree = [
    {
      id: 1,
      name: "Ananya Singh",
      xp: 6320,
      rank: 2,
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      xp: 6850,
      rank: 1,
      avatar: "https://i.pravatar.cc/150?img=21",
    },
    {
      id: 3,
      name: "Karthik Reddy",
      xp: 5230,
      rank: 3,
      avatar: "https://i.pravatar.cc/150?img=22",
    },
  ];

  // =========================
  // SORT LEADERBOARD
  // =========================
  const sortedLeaderboard = [...leaderboard].sort(
    (a, b) => b.xp - a.xp
  );

  // =========================
  // FUNCTION: FILTER CHANGE
  // =========================
  const handleFilterChange = (filter) => {
    setTimeFilter(filter);

    // You can connect API here
    console.log("Filter Changed:", filter);
  };

  // =========================
  // FUNCTION: TAB CHANGE
  // =========================
  const handleTabChange = (tab) => {
    setSelectedTab(tab);

    // API Call according to tab
    console.log("Tab Changed:", tab);
  };

  // =========================
  // FUNCTION: REWARD CLICK
  // =========================
  const handleRewards = () => {
    alert("Rewards Page Opened");
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white p-5">
      <div className="max-w-7xl mx-auto">

        {/* ========================= */}
        {/* NAVBAR */}
        {/* ========================= */}

        <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">
          <input
            type="text"
            placeholder="Search topics, questions, skills..."
            className="bg-[#111827] border border-[#1f2937] rounded-full px-5 py-3 w-full lg:w-[400px] outline-none"
          />

          <div className="flex items-center gap-4">
            <button className="w-11 h-11 rounded-full bg-[#111827] border border-[#1f2937] flex items-center justify-center">
              <Bell size={18} />
            </button>

            <div className="flex items-center gap-3 bg-[#111827] border border-[#1f2937] px-4 py-2 rounded-full">
              <img
                src="https://i.pravatar.cc/100?img=5"
                className="w-10 h-10 rounded-full"
              />

              <h2 className="font-medium">Hi, Yashita 👋</h2>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="flex items-center justify-between mb-7">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              Leaderboard 🏆
            </h1>

            <p className="text-gray-400 text-sm mt-2">
              Compete and climb your ranking.
            </p>
          </div>

          <select
            value={timeFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="bg-[#111827] border border-[#1f2937] px-4 py-3 rounded-xl outline-none"
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>All Time</option>
          </select>
        </div>

        {/* ========================= */}
        {/* STATS */}
        {/* ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <div className="bg-[#111827] p-5 rounded-2xl border border-[#1f2937]">
            <Trophy className="text-yellow-400 mb-3" />
            <p className="text-gray-400 text-sm">My Rank</p>
            <h1 className="text-3xl font-bold mt-2">{stats.rank}</h1>
          </div>

          <div className="bg-[#111827] p-5 rounded-2xl border border-[#1f2937]">
            <Star className="text-indigo-400 mb-3" />
            <p className="text-gray-400 text-sm">Total XP</p>
            <h1 className="text-3xl font-bold mt-2">{stats.xp}</h1>
          </div>

          <div className="bg-[#111827] p-5 rounded-2xl border border-[#1f2937]">
            <Medal className="text-purple-400 mb-3" />
            <p className="text-gray-400 text-sm">Questions Solved</p>
            <h1 className="text-3xl font-bold mt-2">{stats.solved}</h1>
          </div>

          <div className="bg-[#111827] p-5 rounded-2xl border border-[#1f2937]">
            <Flame className="text-orange-400 mb-3" />
            <p className="text-gray-400 text-sm">Current Streak</p>
            <h1 className="text-3xl font-bold mt-2">
              {stats.streak} Days
            </h1>
          </div>
        </div>

        {/* ========================= */}
        {/* TOP 3 */}
        {/* ========================= */}

        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-5 items-end">

            {topThree.map((user) => (
              <div
                key={user.id}
                className={`rounded-2xl p-5 text-center border border-[#2b3650]
                ${user.rank === 1 ? "bg-[#1a2342] scale-105" : "bg-[#0f172a]"}`}
              >

                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center
                    ${
                      user.rank === 1
                        ? "bg-yellow-400 text-black"
                        : user.rank === 2
                        ? "bg-gray-300 text-black"
                        : "bg-orange-400 text-black"
                    }`}
                  >
                    {user.rank === 1 ? <Crown /> : user.rank}
                  </div>
                </div>

                <img
                  src={user.avatar}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-500"
                />

                <h2 className="text-xl font-semibold mt-4">
                  {user.name}
                </h2>

                <p className="text-indigo-400 mt-2">
                  {user.xp} XP
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* TABLE */}
        {/* ========================= */}

        <div className="bg-[#111827] rounded-3xl border border-[#1f2937] overflow-hidden">

          {/* Tabs */}
          <div className="flex items-center justify-between p-5 border-b border-[#1f2937]">

            <div className="flex gap-6">

              {["Global", "Friends", "College"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`pb-1 transition
                  ${
                    selectedTab === tab
                      ? "text-indigo-400 border-b-2 border-indigo-400"
                      : "text-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button className="bg-[#0f172a] px-4 py-2 rounded-xl flex items-center gap-2 border border-[#1f2937]">
              <Filter size={16} />
              Filter
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-[#0f172a] text-gray-400 text-sm">
                <tr>
                  <th className="text-left px-6 py-4">Rank</th>
                  <th className="text-left px-6 py-4">User</th>
                  <th className="text-left px-6 py-4">XP</th>
                  <th className="text-left px-6 py-4">Solved</th>
                  <th className="text-left px-6 py-4">Streak</th>
                </tr>
              </thead>

              <tbody>

                {sortedLeaderboard.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-[#1f2937] hover:bg-[#0f172a] transition"
                  >
                    <td className="px-6 py-5 font-semibold">
                      #{user.rank}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">

                        <img
                          src={user.avatar}
                          className="w-10 h-10 rounded-full"
                        />

                        <div>
                          <h2 className="font-medium">
                            {user.name}
                          </h2>

                          <span className="text-xs text-green-400">
                            {user.badge}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-indigo-400">
                      {user.xp} XP
                    </td>

                    <td className="px-6 py-5">
                      {user.solved}
                    </td>

                    <td className="px-6 py-5 text-orange-400">
                      🔥 {user.streak}
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>

        {/* ========================= */}
        {/* BOTTOM SECTION */}
        {/* ========================= */}

        <div className="grid lg:grid-cols-3 gap-5 mt-8">

          {/* Progress */}
          <div className="bg-[#111827] rounded-3xl border border-[#1f2937] p-5">

            <h2 className="text-xl font-semibold mb-6">
              Your Progress
            </h2>

            <div className="flex items-end gap-3 h-40">
              {[20, 40, 35, 60, 75, 85, 100].map((h, i) => (
                <div
                  key={i}
                  className="bg-indigo-500 rounded-t-xl w-full"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Top Performer */}
          <div className="bg-[#111827] rounded-3xl border border-[#1f2937] p-5">

            <h2 className="text-xl font-semibold mb-6">
              Top Performers
            </h2>

            <div className="space-y-5">

              {topThree.map((user, index) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">

                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                      {index + 1}
                    </div>

                    <div>
                      <h2>{user.name}</h2>
                      <p className="text-sm text-gray-400">
                        {user.xp} XP
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rewards */}
          <div className="bg-gradient-to-br from-[#24124d] to-[#111827] rounded-3xl border border-[#1f2937] p-5 flex flex-col items-center justify-center">

            <div className="text-6xl mb-4">
              🎁
            </div>

            <h2 className="text-2xl font-bold">
              Rewards
            </h2>

            <p className="text-gray-300 text-center mt-3">
              Unlock rewards by maintaining streaks.
            </p>

            <button
              onClick={handleRewards}
              className="mt-5 bg-indigo-500 hover:bg-indigo-600 transition px-5 py-3 rounded-xl"
            >
              View Rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;