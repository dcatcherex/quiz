"use client";

import {
  RotateCcwIcon,
  LogOutIcon,
  List,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import data from "@/app/data/mockexam.json";
import ExamSheet from "@/components/exam/ExamSheet";
import Timer from "@/components/Timer"


import { useState } from "react";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Array<string | null>>(
    []
  );
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);

  const [startTimes, setStartTimes] = useState<number[]>([]);
  const [isExamInProgress, setIsExamInProgress] = useState(true);


  const handleNext = () => {
    if (currentQuestion < data.length - 1) {
      let newStartTimes = [...startTimes];
      newStartTimes[currentQuestion + 1] = Date.now();
      setStartTimes(newStartTimes);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      let newStartTimes = [...startTimes];
      newStartTimes[currentQuestion - 1] = Date.now();
      setStartTimes(newStartTimes);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (answer: string) => {
    let newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);

    let newCorrectAnswers = [...correctAnswers];
    let newWrongAnswers = [...wrongAnswers];

    const correctIndex = correctAnswers.indexOf(currentQuestion);
    const wrongIndex = wrongAnswers.indexOf(currentQuestion);

    if (answer === data[currentQuestion].answer) {
      if (correctIndex < 0) {
        // add only if not present
        newCorrectAnswers.push(currentQuestion);
      }
      if (wrongIndex > -1) {
        // remove if present in wrong answers
        newWrongAnswers.splice(wrongIndex, 1);
      }
    } else {
      if (wrongIndex < 0) {
        // add only if not present
        newWrongAnswers.push(currentQuestion);
      }
      if (correctIndex > -1) {
        // remove if present in correct answers
        newCorrectAnswers.splice(correctIndex, 1);
      }
    }

    setCorrectAnswers(newCorrectAnswers);
    setWrongAnswers(newWrongAnswers);
    if (currentQuestion < data.length - 1) {

    setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className=" bg-[#F5F5FA] dark:bg-slate-950 rounded-lg">
      <div className="mx-auto w-full max-w-screen-lg min-h-screen">
        <div className="flex gap-x-4 px-4 pb-4 ">
          <div>
            <ExamSheet />
          </div>
          <div className=" mx-auto w-full bg-white dark:bg-slate-950 py-4 px-8 rounded-md ">
            <div>
            <Timer setting={20} onTimeUp={() => setIsExamInProgress(false)} />
              <p>{data.length}</p>
              <Progress value={(selectedAnswers.length/data.length)*100} className="mb-4 color-green-500"/>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">ข้อสอบ</h3>
            <div className="font-bold mb-2">ข้อ {currentQuestion + 1}</div>
            <p className="min-h-[150px] ">
              {data[currentQuestion].question}
            </p>
            <div className="flex flex-col gap-y-3 mt-6 ">
              {data[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={!isExamInProgress}
                  className={`w-full max-w-[500px] mx-auto hover:text-white ${
                    selectedAnswers[currentQuestion] === option
                      ? "bg-blue-200"
                      : "bg-gray-100"
                  } text-black `}
                >
                  {option}
                </Button>
              ))}
              <div className="flex gap-x-2  mx-auto">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  className=" rounded-md mt-10 "
                >
                  <ChevronLeftIcon /> prev
                </Button>
                <Button
                  onClick={handleNext}
                  className="min-w-[200px] bg-gray-800 text-white rounded-md mt-10 "
                >
                  next <ChevronRightIcon />
                </Button>
              </div>
              <div className="mx-auto">
                <Popover>
                  
                    <PopoverTrigger><Button variant="outline">Explaination</Button></PopoverTrigger>
                  
                  <PopoverContent>
                    {data[currentQuestion].explain}
                  </PopoverContent>
                </Popover>
              </div>

              <h2 className="text-2xl font-bold">
                Score: {correctAnswers.length}
              </h2>
              <div>
                <h3 className="font-bold">Correct Answers:</h3>
                {correctAnswers.map((index, i) => (
                  <p key={i}>{`Question ${index + 1}: ${
                    data[index].answer
                  }`}</p>
                ))}
              </div>
              <div>
                <h3 className="font-bold">Wrong Answers:</h3>
                {wrongAnswers.map((index, i) => (
                  <p key={i}>{`Question ${index + 1}: ${
                    selectedAnswers[index]
                  }, but the correct answer is ${data[index].answer}`}</p>
                ))}
              </div>
              <div>
                <p>selectedAnswer: {selectedAnswers}</p>
                <p>
                  correctdAnswer:{" "}
                  <span className="text-green-500 font-bold">
                    {correctAnswers.join(" , ")}
                  </span>
                </p>
                <p>
                  wrongAnswer:{" "}
                  <span className="text-red-500 font-bold">
                    {wrongAnswers.join(" , ")}
                  </span>
                </p>
                <p>currentQuestion: {currentQuestion + 1}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
