import React from 'react'
import {
    RotateCcwIcon,
    LogOutIcon,
    List,
    ChevronLeftIcon,
    ChevronRightIcon,
    
  } from "lucide-react";
import { Progress } from "@/components/ui/progress";


const ExamPagination = () => {
  return (
    <div className="p-4 max-w-[80%] mx-auto border-green-400 text-green-400 border-2 ">
          <div className="text-sm">1 out of 10</div>
          <Progress value={33} className="" />
          <div className="flex items-center justify-center gap-x-2 font-bold mt-4">
            <ChevronLeftIcon className="h-4 w-4" />
            {/* <Button className=" text-white text-xs rounded-full p2">1</Button> */}
            <div className="text-xs px-2 py-1 bg-slate-800 text-white rounded-full ">
              1
            </div>
            <div className="text-xs px-2 py-1 bg-slate-800 text-white rounded-full ">
              2
            </div>
            <div className="flex flex-col items-center justify-items-start">
              <div className="text-xs px-2 py-1 border-green-400 text-green-400 border-2 rounded-full ">
                3
              </div>
              {/* <TriangleIcon className="h-4 w-4 text-green-400"/> */}
            </div>
            <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">
              4
            </div>
            <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">
              5
            </div>
            <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">
              6
            </div>
            <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">
              7
            </div>
            <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">
              8
            </div>
            <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">
              9
            </div>
            <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">
              10
            </div>
            <ChevronRightIcon className="h-4 w-4" />
          </div>
        </div>
  )
}

export default ExamPagination