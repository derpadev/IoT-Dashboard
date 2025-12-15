"use-client";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Bar,
  Tooltip,
} from "recharts";

export const OccupancyChart = ({room}) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart responsive data={room}>
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis />
        <Bar dataKey="value" fill="#7D8BD5" name="Occupancy" />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
};
