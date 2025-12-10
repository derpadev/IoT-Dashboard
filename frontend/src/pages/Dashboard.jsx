import { useEffect } from "react";
import { useState } from "react";
import { TempChart } from "../components/TempChart";
import { AirChart } from "../components/AirChart";
import { OccupancyChart } from "../components/Occupancy";

export const Dashboard = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-xl p-4 h-50 flex justify-center items-center ">
        <h1 className="text-6xl font-semibold">
          HELLO <span className="text-blue-500">{username}</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 text-3xl">
        <div className="bg-white h-[350px] flex flex-col  p-4 rounded-xl">
          <h1>Dashboard</h1>
          <p></p>
        </div>
        <div className="bg-white h-[350px] max-w-full p-4 rounded-xl">
          <h2>Temperature</h2>
          <TempChart />
        </div>
        <div className="bg-white h-[350px] max-w-full p-4 rounded-xl">
          <h2>Air Quality</h2>
          <AirChart />
        </div>
        <div className="bg-white h-[350px] max-w-full p-4 rounded-xl">
          <h2>Room Occupancy</h2>
          <OccupancyChart />
        </div>
      </div>
    </div>
  );
};
