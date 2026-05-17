import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const initialData = [
  { time: "10:00", power: 72 },
  { time: "10:05", power: 75 },
  { time: "10:10", power: 70 },
  { time: "10:15", power: 82 },
  { time: "10:20", power: 78 },
  { time: "10:25", power: 120 },
];

function App() {
    const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {

      setData((prev) => {
        const lastPower = prev[prev.length - 1].power;

        const randomChange =
          Math.floor(Math.random() * 30) - 10;

        const newPower =
          Math.max(50, lastPower + randomChange);

        const next = [
          ...prev.slice(1),
          {
            time: new Date().toLocaleTimeString(),
            power: newPower,
          },
        ];

        return next;
      });

    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-[#111827] p-6 border-r border-gray-800">
        <h1 className="text-2xl font-bold mb-10 text-cyan-400">
          GhostDevice
        </h1>

        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-300">
            Dashboard
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Devices
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Threat Monitor
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Analytics
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Alerts
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              Smart Appliance Intelligence
            </h2>

            <p className="text-gray-400 mt-2">
              AI-powered rogue device detection system
            </p>
          </div>

          <button className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold">
            Inject Rogue Device
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">

          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-gray-400">Connected Devices</h3>
            <p className="text-4xl font-bold mt-3 text-cyan-400">48</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-gray-400">Threat Alerts</h3>
            <p className="text-4xl font-bold mt-3 text-red-400">3</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-gray-400">Healthy Devices</h3>
            <p className="text-4xl font-bold mt-3 text-green-400">45</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-gray-400">AI Accuracy</h3>
            <p className="text-4xl font-bold mt-3 text-yellow-400">98%</p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6">

          {/* Chart */}
          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">
              Live Power Usage
            </h2>

            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="power"
                    stroke="#06B6D4"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Threat Feed */}
          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">
              Live Threat Feed
            </h2>

            <div className="space-y-4">

              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl">
                ⚠️ FAN_204 showing abnormal telemetry deviation
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-xl">
                ⚡ Voltage fluctuation detected in AC_102
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-xl">
                🧠 AI behavioral fingerprint baseline updated
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;