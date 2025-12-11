"use-client";
import { useDevices } from "../hooks/useDevices";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

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
      <LineChart responsive data={thermostat}>
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" fill="" />
        <XAxis dataKey="time" />
        <YAxis />
        <Line dataKey="value" stroke="red" name="Temperature" strokeWidth={2} />
        <Legend align="center" iconType="triangle" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
