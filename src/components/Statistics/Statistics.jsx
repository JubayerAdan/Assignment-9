import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Statistics = () => {
  let studentArray = [
    { name: "Alice", marks: 95 },
    { name: "Bob", marks: 88 },
    { name: "Charlie", marks: 78 },
  ];

  return (
    <div>
      <BarChart width={1000} height={500} data={studentArray}>
        <Bar dataKey="marks" fill="#8884d8"></Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis />
      </BarChart>
    </div>
  );
};

export default Statistics;
