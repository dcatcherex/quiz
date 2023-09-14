import React from "react";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import ChartRadar from "@/components/exam/chart-radar"

type Props = {};

const AnalystPanel = (props: Props) => {
  return (
    <div className="h-screen">
      {/* grid */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-md min-h-[400px]">
          <div className="py-2 px-4">
            <h1 className="text-md font-bold">Analyst</h1>
          </div>
          <hr />
          <div className="p-6">
            <ChartRadar />
          </div>
        </div>
        <div className="bg-white rounded-md min-h-[400px]">
          <div className="py-2 px-4">
            <h1 className="text-md font-bold">Activity</h1>
          </div>
          <hr />
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-white rounded-md ">
          <div className="py-2 px-4">
            <h1 className="text-md font-bold">Recommend</h1>
          </div>

          <hr />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
{/* card*/}
            <div className="rounded-md shadow-sm">
              <div className="bg-pink-100 min-h-[150px] min-w-xl rounded-t-md"></div>
              <div className="grid grid-cols-3 p-1">
                <div className="text-center">
                  <p className="font-bold">4</p>
                  <p className="text-xs font-light">Chapters</p>
                </div>
                <div className="text-center border-x-[1px]">
                  <p className="font-bold">20</p>
                  <p className="text-xs font-light">items</p>
                </div>
                <div className="text-center relative mx-auto">
                  <div className=" bg-white rounded-full border-2 h-12 w-12 flex justify-center items-center">
                    <Image
                      src="/play.svg"
                      alt="play icon"
                      className="dark:invert"
                      width={14}
                      height={14}
                      priority
                    />
                  </div>
                  <p></p>
                  <p className="text-xs font-light">0%</p>
                </div>
              </div>
            </div>

            <div className="rounded-md shadow-sm">
              <div className="bg-purple-100 min-h-[150px] min-w-xl rounded-t-md"></div>
              <div className="grid grid-cols-3 p-1">
                <div className="text-center">
                  <p className="font-bold">4</p>
                  <p className="text-xs font-light">Chapters</p>
                </div>
                <div className="text-center border-x-[1px]">
                  <p className="font-bold">20</p>
                  <p className="text-xs font-light">items</p>
                </div>
                <div className="text-center relative mx-auto">
                  <div className=" bg-white rounded-full border-2 h-12 w-12 flex justify-center items-center">
                    <Image
                      src="/play.svg"
                      alt="play icon"
                      className="dark:invert"
                      width={14}
                      height={14}
                      priority
                    />
                  </div>
                  <p></p>
                  <p className="text-xs font-light">0%</p>
                </div>
              </div>
            </div>

            <div className="rounded-md shadow-sm">
              <div className="bg-blue-100 min-h-[150px] min-w-xl rounded-t-md"></div>
              <div className="grid grid-cols-3 p-1">
                <div className="text-center">
                  <p className="font-bold">4</p>
                  <p className="text-xs font-light">Chapters</p>
                </div>
                <div className="text-center border-x-[1px]">
                  <p className="font-bold">20</p>
                  <p className="text-xs font-light">items</p>
                </div>
                <div className="text-center relative mx-auto">
                  <div className=" bg-white rounded-full border-2 h-12 w-12 flex justify-center items-center">
                    <Image
                      src="/play.svg"
                      alt="play icon"
                      className="dark:invert"
                      width={14}
                      height={14}
                      priority
                    />
                  </div>
                  <p></p>
                  <p className="text-xs font-light">0%</p>
                </div>
              </div>
            </div>

            <div className="rounded-md shadow-sm">
              <div className="bg-green-100 min-h-[150px] min-w-xl rounded-t-md"></div>
              <div className="grid grid-cols-3 p-1">
                <div className="text-center">
                  <p className="font-bold">4</p>
                  <p className="text-xs font-light">Chapters</p>
                </div>
                <div className="text-center border-x-[1px]">
                  <p className="font-bold">20</p>
                  <p className="text-xs font-light">items</p>
                </div>
                <div className="text-center relative mx-auto">
                  <div className=" bg-white rounded-full border-2 h-12 w-12 flex justify-center items-center">
                    <Image
                      src="/play.svg"
                      alt="play icon"
                      className="dark:invert"
                      width={14}
                      height={14}
                      priority
                    />
                  </div>
                  <p></p>
                  <p className="text-xs font-light">0%</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystPanel;
