"use-client";
import { useDevices } from "../hooks/useDevices";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const TempChart = () => {
  const devices = useDevices();
  const thermostat = devices
    .filter((d) => d.device === "Thermostat")
    .map((d) => ({
      time: new Date(d.timestamp).toLocaleTimeString(),
      value: d.value,
      id: d.id,
    }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={thermostat}>
        <XAxis dataKey="time" />
        <YAxis />
        <Line dataKey="value" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
};
