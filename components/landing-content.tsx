"use client";

import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { LayoutList, ArrowRight, AreaChartIcon, ImageIcon, VideoIcon, Code,User2Icon,ScrollTextIcon, NewspaperIcon } from 'lucide-react'
import Image from "next/image";
import { cn } from "@/lib/utils";


const features = [
  {
    feature: "Interactive Practice Tests",
    icon: LayoutList,
    message: "Experience real exam-like conditions with our timed, full-length practice tests. Get immediate feedback on your responses to understand what you got wrong and why.",
  },
  {
    feature: "Score Tracking & Progress Monitoring",
    icon: AreaChartIcon,
    message: "Stay on top of your performance with our robust tracking system. Monitor your progress over time, identify areas for improvement, and track how close you are to reaching your TOEIC goal.",
  },
  {
    feature: "Personalized Study Plans",
    icon: User2Icon,
    message: "Every learner is unique, and so should be their study plan! Based on your performance and target score, the app generates a study plan tailored just for you.",
  },
  

];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20 pt-10 bg-white dark:bg-slate-950 ">
      <div className="flex justify-center py-4">
      </div>
      <h2 className="text-center text-4xl text-slate-700 dark:text-white font-extrabold mb-10">
        Key Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {features.map((item) => (
          <Card
            key={item.message}
            className="bg-slate-700 dark:bg-slate-900 dark:hover:bg-[#1C5BB7] border-none text-white hover:bg-[#1C5BB7]"
          >
            <div className={cn('mt-6 ml-6  p-2 w-fit rounded-full', )}>
                <item.icon className='w-8 h-8 ' />
              </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.feature}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 text-zinc-400 font-light">
                {item.message}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};