"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const TempChart = ({ thermostat } ) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={thermostat}>
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" fill="" />
        <XAxis dataKey="time" />
        <YAxis />
        <Line dataKey="value" stroke="#EDD769" name="Temperature" strokeWidth={6} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
