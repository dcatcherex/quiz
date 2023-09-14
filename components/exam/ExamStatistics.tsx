import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChartCategoryPerf from "@/components/exam/ChartCategoryPerf";
import ChartPerf from "@/components/exam/ChartPerf";
import ChartProgress from "@/components/exam/ChartProgress";
import ChartTimeSpend from "@/components/exam/ChartTimeSpend";

const ExamStatistic = ({
  score = 0,
  total = 0,
  categoryPerformance = 0,
  timeSpent = 0,
  comparisonScore = 0,
}) => {
  return (
    <div className="pt-6">
      <h2 className="text-2xl   font-bold">Exam Statistic</h2>

      <div className="flex gap-4 text-white/40">
        <div className="">
          <h4>Performance score:</h4>
          <p>
            {score}/{total} ({((score / total) * 100).toFixed(2)}%)
          </p>
        </div>
        {/* <div className="">
          <h4>Category performance:</h4>
          {categoryPerformance.map((category, i) => (
            <p key={i}>{category.name}: {category.score}/{category.total} ({(category.score/category.total * 100).toFixed(2)}%)</p>
          ))}
        </div> */}
        <div className="">
          <h4>Time spent per quiz:</h4>
          <p>{timeSpent} minutes</p>
        </div>
        <div className="">
          <h4>Comparison with others:</h4>
          <p>You are in the top {comparisonScore}% of users</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 max-h-[100px]">
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
            <CardDescription>
            The distribution of correct vs incorrect answers.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[250px]">
            <ChartPerf />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress over Time</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, consequatur!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartProgress />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Performance</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsum.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartCategoryPerf />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Time spent per Question</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, reprehenderit!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartTimeSpend />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamStatistic;
