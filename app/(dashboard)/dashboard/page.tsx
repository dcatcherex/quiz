import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

import AnalystPanel from "@/components/dashboard/analyst-panel";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import HistoryCard from "@/components/dashboard/HistoryCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import ExamStatistics from "@/components/exam/ExamStatistics";

const Dashboard = () => {
  return (
    <div className="">
      
        <ExamStatistics />
        {/* <QuizMeCard />
        <HistoryCard /> */}
        {/* <RecentActivityCard /> */}

        {/* <AnalystPanel /> */}
    </div>
  );
};

export default Dashboard;
