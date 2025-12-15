import { useEffect } from "react";
import { useState } from "react";
import { TempChart } from "../components/TempChart";
import { AirChart } from "../components/AirChart";
import { OccupancyChart } from "../components/Occupancy";
import { useDevices } from "../hooks/useDevices";
import { CSVLink } from "react-csv";
import { ArrowDown } from 'lucide-react';

export const Dashboard = () => {
  const [username, setUsername] = useState("");
  const { devices, refetch } = useDevices();

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

  const thermostat = devices
    .filter((d) => d.device === "Thermostat")
    .map((d) => ({
      time: new Date(d.timestamp).toLocaleTimeString(),
      value: d.value,
    }));

  const air = devices
    .filter((d) => d.device === "Air Quality Monitor")
    .map((d) => ({
      time: new Date(d.timestamp).toLocaleTimeString(),
      value: d.value.toFixed(1),
    }));

  const room = devices
    .filter((d) => d.device === "Room Occupancy")
    .map((d) => ({
      time: new Date(d.timestamp).toLocaleTimeString(),
      value: d.value,
    }));

  return (
    <div className="p-4 space-y-4 mt-12">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-extrabold text-white opacity-0 animate-fade-in-delay-1">
          HELLO <span className="text-blue-500 ">{username?.toUpperCase()}</span>
        </h1>
        <p className="text-white text-3xl font-semibold mt-10 opacity-0 animate-fade-in-delay-2">
          Go To Your Dashboard
        </p>
        <a
          href="#charts"
          className="text-white font-bold mt-10 bg-blue-800 rounded-xl px-4 py-2 scroll-smooth opacity-0 animate-fade-in-delay-2"
        >
          <ArrowDown size={32}/>
        </a>
      </div>
      <section id="charts">
        <div className="grid grid-cols-5 gap-4 text-3xl">
          <div className="col-span-5 h-[150px] p-4 rounded-lg">
            <h1 className="text-white font-semibold text-4xl animate-fade-in-delay-1">
              {" "}
              Your Dashboard
            </h1>
            <div className="space-x-4">
              <button
                onClick={refetch}
                className="bg-blue-700 px-6 py-2.5 rounded-lg hover:bg-blue-800 text-white text-sm font-semibold active:scale-105 mt-8"
              >
                Fetch New Data
              </button>
              <CSVLink
                data={devices}
                filename={"iot-readings.csv"}
                className="bg-blue-700 px-6 py-2.5 rounded-lg hover:bg-blue-800 text-white text-sm font-semibold active:scale-105 mt-8"
              >
                Download CSV
              </CSVLink>
            </div>
          </div>
          <div className="bg-[#242424] h-[250px] max-w-full p-4 rounded-lg flex flex-col">
            <h1 className="mb-4 font-semibold text-white text-center">
              Current <br />
              Temperature
            </h1>
            <h1
              className={`text-center text-9xl ${
                thermostat[thermostat.length - 1]?.value > 80
                  ? "text-orange-500"
                  : "text-yellow-500"
              }`}
            >
              {thermostat[thermostat.length - 1]?.value}
            </h1>
          </div>
          <div className="col-span-4 bg-[#242424] h-[250px] max-w-full p-4 rounded-lg flex flex-col">
            <div className="flex-1">
              <TempChart thermostat={thermostat} />
            </div>
          </div>
          <div className="bg-[#242424] h-[250px] max-w-full p-4 rounded-lg flex flex-col">
            <h1 className="mb-4 font-semibold text-white text-center">
              Air <br />
              Quality
            </h1>
            <h1
              className={`text-center text-9xl ${
                air[air.length - 1]?.value > 50
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {air[air.length - 1]?.value}
            </h1>
          </div>
          <div className="col-span-4 bg-[#242424] h-[250px] max-w-full p-4 rounded-lg flex flex-col">
            <div className="flex-1">
              <AirChart air={air} />
            </div>
          </div>
          <div className="bg-[#242424] h-[250px] max-w-full p-4 rounded-lg flex flex-col">
            <h1 className="mb-4 font-semibold text-white text-center">
              Room <br />
              Occupancy
            </h1>
            <h1
              className={`text-center text-9xl ${
                room[room.length - 1]?.value > 8
                  ? "text-red-500"
                  : room[room.length - 1]?.value > 3
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {room[room.length - 1]?.value}
            </h1>
          </div>
          <div className="col-span-4 bg-[#242424] h-[250px] max-w-full p-4 rounded-lg flex flex-col">
            <div className="flex-1">
              <OccupancyChart room={room} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
