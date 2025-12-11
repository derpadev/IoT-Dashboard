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

export const AirChart = () => {
  const devices = useDevices();
  const air = devices
    .filter((d) => d.device === "Air Quality Monitor")
    .map((d) => ({
      time: new Date(d.timestamp).toLocaleTimeString(),
      value: d.value.toFixed(1),
    }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart responsive data={air}>
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis />
        <Line
          dataKey="value"
          stroke="green"
          name="Air Quality"
          strokeWidth={2}
        />
        <Legend align="center" iconType="circle" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
