"use-client";
import { useDevices } from "../hooks/useDevices";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const OccupancyChart = () => {
  const devices = useDevices();
  const room = devices
    .filter((d) => d.device === "Room Occupancy")
    .map((d) => ({
      time: new Date(d.timestamp).toLocaleTimeString(),
      value: d.value,
    }));

  return (
    <ResponsiveContainer>
      <LineChart width="100%" height={300} data={room}>
        <XAxis dataKey="time" />
        <YAxis />
        <Line dataKey="value" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
};
