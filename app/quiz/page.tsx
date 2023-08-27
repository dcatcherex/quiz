import { LandingNavbar } from "@/components/landing-navbar"
import { RotateCcwIcon, LogOutIcon, List, ChevronLeftIcon, ChevronRightIcon, TriangleIcon } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



const Quiz = () => {
  return (

    <div className=" bg-[#F5F5FA] ">
        <div className="mx-auto w-full max-w-screen-lg min-h-screen">
            <LandingNavbar />
            <div className="flex justify-between items-center bg-white p-2  ">
                <div className="flex items-center gap-x-2" >
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
            <div className="p-4 max-w-[80%] mx-auto ">
                <div className="text-sm">
                    1 out of 10
                </div>
            <Progress value={33} className="" />
            <div className="flex items-center justify-center gap-x-2 font-bold mt-4">
                
                <ChevronLeftIcon className="h-4 w-4" />
                {/* <Button className=" text-white text-xs rounded-full p2">1</Button> */}
                <div className="text-xs px-2 py-1 bg-slate-800 text-white rounded-full ">1</div>
                <div className="text-xs px-2 py-1 bg-slate-800 text-white rounded-full ">2</div>
                <div className="flex flex-col items-center justify-items-start">
                    <div className="text-xs px-2 py-1 border-green-400 text-green-400 border-2 rounded-full ">3</div>
                    {/* <TriangleIcon className="h-4 w-4 text-green-400"/> */}
                </div>
                <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">4</div>
                <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">5</div>
                <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">6</div>
                <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">7</div>
                <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">8</div>
                <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">9</div>
                <div className="text-xs  px-2 py-1 border-gray-300 border-2 rounded-full ">10</div>
                <ChevronRightIcon className="h-4 w-4" />
            </div>
            </div>
            <div className="flex gap-x-4 px-4 pb-4">
                <div className="w-1/3 bg-white py-4 px-4 rounded-md">
                    <h3 className="text-xl font-bold text-center mb-4">กระดาษคำตอบ</h3>
                    <div className="border-2 rounded-lg border-gray-100">
                        <div className="flex justify-center pl-1 gap-x-4 pr-2 mt-2">
                        <div></div>
                        <div>ก</div>
                        <div>ข</div>
                        <div>ค</div>
                        <div>ง</div>
                        <div>จ</div>
                        </div>
                        <div className="flex justify-center items-center gap-x-2 ">
                        <div>1</div>
                        <RadioGroup  defaultValue="" className="flex gap-x-2">
                            <RadioGroupItem value="ก" id="r1" />
                            <RadioGroupItem value="ข" id="r2" />
                            <RadioGroupItem value="ค" id="r3" />
                            <RadioGroupItem value="ง" id="r3" />
                            <RadioGroupItem value="จ" id="r3" />
                        </RadioGroup>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                        <div>2</div>
                        <RadioGroup  defaultValue="" className="flex gap-x-2">
                            <RadioGroupItem value="ก" id="r1" />
                            <RadioGroupItem value="ข" id="r2" />
                            <RadioGroupItem value="ค" id="r3" />
                            <RadioGroupItem value="ง" id="r3" />
                            <RadioGroupItem value="จ" id="r3" />
                        </RadioGroup>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                        <div>3</div>
                        <RadioGroup  defaultValue="" className="flex gap-x-2">
                            <RadioGroupItem value="ก" id="r1" />
                            <RadioGroupItem value="ข" id="r2" />
                            <RadioGroupItem value="ค" id="r3" />
                            <RadioGroupItem value="ง" id="r3" />
                            <RadioGroupItem value="จ" id="r3" />
                        </RadioGroup>
                        </div>
                        

                    </div>
                    </div>
                <div className=" bg-white py-4 px-8 rounded-md ">
                    <h3 className="text-xl font-bold text-center mb-4">ข้อสอบ</h3>
                    <div className="font-bold mb-2">ข้อ 3</div>
                    <p> There were some discussions _____ the shareholders as to whether the CEO was competently operating the business.</p>
                        <div className="flex flex-col gap-y-3 mt-6 ">
                            <Button className="w-1/2 mx-auto  bg-gray-100 text-black "> at</Button>
                            <Button className="w-1/2 mx-auto  bg-gray-100 text-black "> on</Button>
                            <Button className="w-1/2 mx-auto  bg-gray-100 text-black "> between</Button>
                            <Button className="w-1/2 mx-auto  bg-gray-100 text-black "> among</Button>
                            <Button className="w-1/2 mx-auto  bg-gray-800 text-white rounded-full mt-10 "> next</Button>
                        </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Quiz