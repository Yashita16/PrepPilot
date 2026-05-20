import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";

const LoginPage = () => {
  const { userLogin, setIsUserLogin , navigate } = useAppContext();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#111827] p-6">

      {/* Logo */}
      <div className="w-full flex items-center">
        <img
          src={assets.logo}
          alt="Logo"
          className="h-16 object-contain"
        />
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto mt-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="space-y-6">

          <div className="inline-flex items-center px-4 py-2 border border-Secondary rounded-full text-white text-sm">
            AI-Powered Interview Preparation
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight">
            Practice Smarter.
            <br />
            Crack Interview{" "}
            <span className="text-Secondary">
              Faster.
            </span>
          </h1>

          <p className="text-gray-400 max-w-lg">
            All-in-one platform with AI mock interviews,
            personalized roadmaps, resume analysis,
            and company-wise questions to help you land
            your dream job.
          </p>

          {/* Features */}

          {[
            {
              img: assets.login1,
              title: "AI Mock Interviews",
              desc: "Real-time AI interviews with voice and text.",
            },
            {
              img: assets.login2,
              title: "Company-wise Question Bank",
              desc: "Curated questions from top companies.",
            },
            {
              img: assets.login3,
              title: "Resume Analyzer",
              desc: "AI-powered resume review and suggestions.",
            },
            {
              img: assets.login4,
              title: "Personalized Roadmap",
              desc: "Your custom roadmap to success.",
            },
            {
              img: assets.login5,
              title: "Progress Tracker",
              desc: "Track progress with advanced analytics.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-center"
            >
              <img
                src={item.img}
                alt=""
                className="w-12 h-12 object-contain"
              />

              <div>
                <h2 className="text-white font-medium">
                  {item.title}
                </h2>

                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Login Card */}

        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto">

          <h1 className="text-center text-white text-3xl font-bold">

            {userLogin ? "Welcome Back!" : "Create Account"}

          </h1>

          <p className="text-center text-gray-400 mt-2 mb-6">
            {userLogin
              ? "Login to continue your journey."
              : "Create an account to start your journey."}
          </p>

          <form className="space-y-4">

            {!userLogin && (
              <div className="flex flex-col">
                <label className="text-white mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-Secondary"
                />
              </div>
            )}

            <div className="flex flex-col">
              <label className="text-white mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-Secondary"
              />
            </div>

            {!userLogin && (
              <div className="flex flex-col">
                <label className="text-white mb-2">
                  College
                </label>

                <input
                  type="text"
                  placeholder="Enter college name"
                  className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-Secondary"
                />
              </div>
            )}

            <div className="flex flex-col">
              <label className="text-white mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-Secondary"
              />
            </div>

            {userLogin && (
              <div className="flex justify-end">
                <p className="text-Secondary text-sm cursor-pointer">
                  Forgot Password?
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-Secondary hover:bg-Primary py-3 rounded-lg text-white font-medium transition"
              onClick={()=>navigate('/')}
            >
              {userLogin ? "Login" : "Sign Up"}
            </button>

            <p className="text-center text-white text-sm">
              {userLogin
                ? "Don't have an account?"
                : "Already have an account?"}

              <span
                onClick={() =>
                  setIsUserLogin(!userLogin)
                }
                className="text-Secondary ml-2 cursor-pointer"
              >
                {userLogin ? "Sign Up" : "Login"}
              </span>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;