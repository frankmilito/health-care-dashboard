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
  { month: "Oct,2024", ["Blood Pressure"]: 275, fill: "var(--color-chrome)" },
  { month: "Nov,2024", ["Blood Pressure"]: 200, fill: "var(--color-safari)" },
  { month: "Dec,2024", ["Blood Pressure"]: 187, fill: "var(--color-firefox)" },
  { month: "Jan,2024", ["Blood Pressure"]: 173, fill: "var(--color-edge)" },
  { month: "Feb,2024", ["Blood Pressure"]: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-2))",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "blue",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Charts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Dots Colors</CardTitle>
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
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey={"Blood Pressure "}
                  hideLabel
                />
              }
            />
            <Line
              dataKey={"Blood Pressure"}
              type="natural"
              stroke="var(--color-visitors)"
              strokeWidth={2}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                    key={payload.month}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill={payload.fill}
                    stroke={payload.fill}
                  />
                );
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ stroke: "#E3E4E6", strokeWidth: 2 }}
            />
            <XAxis
              dataKey="month"
              stroke="#8884d8"
              // tick={{ fill: "#E3E4E6", fontSize: 14 }} // Style for ticks
              tickLine={false}
              axisLine={{ stroke: "#E3E4E6", strokeWidth: 2 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
