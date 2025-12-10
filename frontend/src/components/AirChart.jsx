"use-client";
import { useDevices } from "../hooks/useDevices";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const AirChart = () => {
  const devices = useDevices();
  const air = devices
    .filter((d) => d.device === "Air Quality Monitor")
    .map((d) => ({
      time: new Date(d.timestamp).toLocaleTimeString(),
      value: d.value,
    }));

  return (
    <ResponsiveContainer>
      <LineChart width="100%" height={300} data={air}>
        <XAxis dataKey="time" />
        <YAxis />
        <Line dataKey="value" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
};
