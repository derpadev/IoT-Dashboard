"use-client";
import { useDevices } from "../hooks/useDevices";
import { Line, XAxis, YAxis, ResponsiveContainer, BarChart, CartesianGrid, Legend, Bar, Tooltip } from "recharts";

export const OccupancyChart = () => {
  const devices = useDevices();
  const room = devices
    .filter((d) => d.device === "Room Occupancy")
    .map((d) => ({
      time: new Date(d.timestamp).toLocaleTimeString(),
      value: d.value,
    }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart responsive data={room}>
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis />
        <Bar dataKey="value" fill="orange" stroke="black" name="Occupancy" />
        <Legend align="center" />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
};
