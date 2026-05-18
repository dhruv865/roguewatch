import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const progressData = [
  { quarter: "Q1", progress: 65 },
  { quarter: "Q2", progress: 78 },
  { quarter: "Q3", progress: 88 },
  { quarter: "Q4", progress: 95 },
];

const initialGoals = [
  {
    title: "Increase Sales Revenue",
    weightage: 25,
    uom: "%",
    status: "On Track",
    progress: 72,
  },
  {
    title: "Reduce Customer Complaints",
    weightage: 20,
    uom: "Numeric",
    status: "Completed",
    progress: 100,
  },
  {
    title: "Improve Delivery Timeline",
    weightage: 15,
    uom: "Timeline",
    status: "On Track",
    progress: 64,
  },
  {
    title: "Zero Safety Incidents",
    weightage: 40,
    uom: "Zero",
    status: "Completed",
    progress: 100,
  },
];

function App() {

  const [goals, setGoals] = useState(initialGoals);

  const [checkins, setCheckins] = useState([
    "Q1 goals reviewed by Manager",
    "Marketing KPI approved",
    "Sales target updated for Q2",
  ]);

  const createGoal = () => {

    const newGoal = {
      title: "New Strategic Goal",
      weightage: 0,
      uom: "%",
      status: "Not Started",
      progress: 0,
    };

    if (goals.length >= 8) {
      alert("Maximum 8 goals allowed");
      return;
    }

    const totalWeightage =
      goals.reduce(
        (sum, goal) => sum + goal.weightage,
        0
      ) + newGoal.weightage;

    if (totalWeightage > 100) {
      alert("Total weightage cannot exceed 100%");
      return;
    }

    setGoals([...goals, newGoal]);

    setCheckins([
      "New goal submitted for approval",
      ...checkins,
    ]);
  };

  return (

    <div className="min-h-screen bg-[#0B1120] text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-[#111827] p-6 border-r border-gray-800">

        <h1 className="text-2xl font-bold mb-10 text-cyan-400">
          GoalSync AI
        </h1>

        <div className="space-y-4">

          <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-300">
            Dashboard
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            My Goals
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Team Reviews
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Analytics
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Admin Panel
          </div>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-bold">
              Goal Setting & Tracking Portal
            </h2>

            <p className="text-gray-400 mt-2">
              AI-powered employee performance tracking system
            </p>

          </div>

          <button
            onClick={createGoal}
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold"
          >
            Add Demo Goal
          </button>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">

          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

            <h3 className="text-gray-400">
              Total Goals
            </h3>

            <p className="text-4xl font-bold mt-3 text-cyan-400">
              {goals.length}
            </p>

          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

            <h3 className="text-gray-400">
              Pending Approvals
            </h3>

            <p className="text-4xl font-bold mt-3 text-yellow-400">
              3
            </p>

          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

            <h3 className="text-gray-400">
              Completed Goals
            </h3>

            <p className="text-4xl font-bold mt-3 text-green-400">
              {
                goals.filter(
                  (goal) =>
                    goal.status === "Completed"
                ).length
              }
            </p>

          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

            <h3 className="text-gray-400">
              Completion Rate
            </h3>

            <p className="text-4xl font-bold mt-3 text-cyan-300">
              92%
            </p>

          </div>

        </div>

        {/* Goal Tracking Table */}
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            Employee Goal Tracking
          </h2>

          <div className="overflow-hidden rounded-xl">

            <table className="w-full">

              <thead className="bg-gray-900">

                <tr>

                  <th className="text-left p-4">
                    Goal Title
                  </th>

                  <th className="text-left p-4">
                    Weightage
                  </th>

                  <th className="text-left p-4">
                    UoM
                  </th>

                  <th className="text-left p-4">
                    Status
                  </th>

                  <th className="text-left p-4">
                    Progress
                  </th>

                </tr>

              </thead>

              <tbody>

                {goals.map((goal, index) => (

                  <tr
                    key={index}
                    className="border-t border-gray-800"
                  >

                    <td className="p-4">
                      {goal.title}
                    </td>

                    <td className="p-4">
                      {goal.weightage}%
                    </td>

                    <td className="p-4">
                      {goal.uom}
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          goal.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : goal.status === "On Track"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {goal.status}
                      </span>

                    </td>

                    <td className="p-4">
                      {goal.progress}%
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6">

          {/* Analytics Chart */}
          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

            <h2 className="text-2xl font-bold mb-6">
              Quarterly Goal Progress
            </h2>

            <div className="h-72">

              <ResponsiveContainer width="100%" height="100%">

                <LineChart data={progressData}>

                  <XAxis
                    dataKey="quarter"
                    stroke="#9CA3AF"
                  />

                  <YAxis stroke="#9CA3AF" />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="progress"
                    stroke="#06B6D4"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* Manager Check-ins */}
          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

            <h2 className="text-2xl font-bold mb-6">
              Manager Check-ins
            </h2>

            <div className="space-y-4">

              {checkins.map((item, index) => (

                <div
                  key={index}
                  className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-xl"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;