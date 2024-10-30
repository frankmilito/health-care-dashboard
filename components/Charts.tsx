"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Dot, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with dots and colors";

const chartData = [
  { month: "Oct,2024", ["Blood Pressure"]: 115, ["Heart Beat"]: 120 },
  { month: "Nov,2024", ["Blood Pressure"]: 70, ["Heart Beat"]: 40 },
  { month: "Dec,2024", ["Blood Pressure"]: 187, ["Heart Beat"]: 90 },
  { month: "Jan,2025", ["Blood Pressure"]: 173, ["Heart Beat"]: 130 },
  { month: "Feb,2025", ["Blood Pressure"]: 90, ["Heart Beat"]: 84 },
  { month: "Mar,2025", ["Blood Pressure"]: 120, ["Heart Beat"]: 104 },
];

const chartConfig = {
  ["Heart Beat"]: {
    label: "Heart Beat",
    color: "hsl(var(--chart-1))",
  },
  ["Blood Pressure"]: {
    label: "Blood Pressure",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Charts() {
  return (
    <Card className="bg-[#F4F0FE] rounded-lg">
      <div>
        <CardHeader>
          <CardTitle>Blood Pressure</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 24,
                left: 24,
                right: 24,
              }}
            >
              <CartesianGrid
                vertical={false}
                stroke="#E3E4E6"
                // strokeDasharray="5 5"
                strokeWidth={2}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey={"Blood Pressure"}
                type="natural"
                stroke="#E66FD2"
                strokeWidth={2}
                dot={({ payload, ...props }) => {
                  return (
                    <Dot
                      key={payload.month}
                      r={5}
                      cx={props.cx}
                      cy={props.cy}
                      fill={"#E66FD2"}
                      stroke={payload.fill}
                    />
                  );
                }}
              />
              <Line
                dataKey={"Heart Beat"}
                type="natural"
                stroke="#7E6CAB"
                strokeWidth={2}
                dot={({ payload, ...props }) => {
                  return (
                    <Dot
                      key={payload.month}
                      r={5}
                      cx={props.cx}
                      fill={"#7E6CAB"}
                      cy={props.cy}
                    />
                  );
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={{ stroke: "#E3E4E6", strokeWidth: 2 }}
                tick={{ fill: "#072635", fontSize: 12 }}
              />
              <XAxis
                dataKey="month"
                stroke="#8884d8"
                tick={{ fill: "#072635", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#E3E4E6", strokeWidth: 2 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </div>
    </Card>
  );
}
