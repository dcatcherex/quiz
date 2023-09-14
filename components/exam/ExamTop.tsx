import React from 'react'
import {
    RotateCcwIcon,
    LogOutIcon,
    List,
    ChevronLeftIcon,
    ChevronRightIcon,
    
  } from "lucide-react";
const ExamTop = () => {
  return (
    <div className="flex justify-between items-center bg-white p-2  ">
          <div className="flex items-center gap-x-2">
            <List className="h-4 w-4" />
            <div>ซ่อนกระดาษคำตอบ</div>
          </div>
          <div className="flex gap-x-2 bg-gray-300 rounded-lg px-2 items-center">
            <div>00 : 00 : 00</div>
            <RotateCcwIcon className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-x-2">
            <LogOutIcon className="h-4 w-4" />
            <div>ออกจากห้องสอบ</div>
          </div>
        </div>
  )
}

export default ExamTop