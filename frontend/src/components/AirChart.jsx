"use-client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const AirChart = ({air}) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart responsive data={air}>
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis />
        <Line
          dataKey="value"
          stroke="#7EA874"
          name="Air Quality"
          strokeWidth={6}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
