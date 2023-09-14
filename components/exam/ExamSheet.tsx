'use client'

import { useState } from "react";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const ExamSheet = () => {
 


  return (
    <div>
      <div className="hidden md:block  bg-white py-4 px-4 rounded-md border-green-500 border-4">
        <h3 className="text-xl font-bold text-center mb-4">กระดาษคำตอบ</h3>
        <div className="border-2 rounded-lg border-gray-100">
          <div className="hidden md:block flex justify-center pl-1 gap-x-4 pr-2 mt-2">
            <div></div>
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
          </div>
          <div className="flex justify-center items-center gap-x-2 ">
            <div>1</div>
            <RadioGroup defaultValue="" className="flex gap-x-2">
              <RadioGroupItem value="A" id="r1" />
              <RadioGroupItem value="B" id="r2" />
              <RadioGroupItem value="C" id="r3" />
              <RadioGroupItem value="D" id="r3" />
            </RadioGroup>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <div>2</div>
            <RadioGroup defaultValue="" className="flex gap-x-2">
              <RadioGroupItem value="ก" id="r1" />
              <RadioGroupItem value="ข" id="r2" />
              <RadioGroupItem value="ค" id="r3" />
              <RadioGroupItem value="ง" id="r3" />
            </RadioGroup>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <div>3</div>
            <RadioGroup defaultValue="" className="flex gap-x-2">
              <RadioGroupItem value="ก" id="r1" />
              <RadioGroupItem value="ข" id="r2" />
              <RadioGroupItem value="ค" id="r3" />
              <RadioGroupItem value="ง" id="r3" />
            </RadioGroup>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ExamSheet;
