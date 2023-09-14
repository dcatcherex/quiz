import { Combobox } from "@/components/combobox";
import  Rule  from "@/components/exam/rule";
import { clsx } from "clsx";

import Quiz from "@/components/quiz";

import { getAuthSession } from "@/lib/nextauth";
import ExamStatistic from "@/components/exam/ExamStatistics";
import Mode from "@/components/exam/Mode";


const Exam = () => {
  return (
    <div className=" p-4">
      <div className="mx-auto w-full max-w-screen-lg min-h-screen">
        
        <Mode />
        <Quiz />
            {/* <Rule /> */}
            {/* <Combobox /> */}
       <ExamStatistic />
      </div>
    </div>
  );
};

export default Exam;
