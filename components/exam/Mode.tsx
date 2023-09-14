import React from "react";

import {
  BookOpenIcon,
  MicIcon,
  HeadphonesIcon,
  PencilLineIcon,
  AlarmClockIcon,
  ListOrderedIcon
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Mode = () => {
  const reading = 50;
  const listening = 20;
  const speaking = 20;
  const writing = 10;

  return (
    <Tabs defaultValue="practice" className="w-full mb-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="practice">Practice Mode</TabsTrigger>
        <TabsTrigger value="exam">Exam Mode</TabsTrigger>
      </TabsList>
      <TabsContent value="practice">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              Practice Mode{" "}
              <div className="flex items-center space-x-2">
                <Switch id="auto-mode" />
                <Label htmlFor="auto-mode">Auto</Label>
              </div>
            </CardTitle>
            <CardDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, corporis?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <BookOpenIcon />
                <p>: {reading} %</p>
              </div>
              <div className="flex gap-2">
                <HeadphonesIcon />
                <p>: {listening} %</p>
              </div>
              <div className="flex gap-2">
                <MicIcon />
                <p>: {speaking} %</p>
              </div>
              <div className="flex gap-2">
                <PencilLineIcon />
                <p>: {writing} %</p>
              </div>
            </div>
            <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <p>ควรใช้เวลาต่อข้อไม่เกิน: 30 วินาที</p>
              <p>20 ข้อควรใช้เวลาไม่เกิน: 10 วินาที</p>
            </div>
                <div className="p-2 border-[1px] border-gray-200 rounded-md">
                  <RadioGroup defaultValue="option-one" className="flex justify-between">
                    <div className="flex items-center space-x-2">
                    <AlarmClockIcon />
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">10 นาที</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">20 นาที</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="infinity" id="option-two" />
                      <Label htmlFor="option-two">infinity</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="p-2 border-[1px] border-gray-200 rounded-md">
                  <RadioGroup defaultValue="option-one" className="flex justify-between">
                    <div className="flex items-center space-x-2">
                    <ListOrderedIcon/>
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">10 ข้อ</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">20 ข้อ</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="infinity" id="option-two" />
                      <Label htmlFor="option-two">infinity</Label>
                    </div>
                  </RadioGroup>
                </div>
            </div>
            <div className="mt-10 space-y-2">
              <div className="p-2 border-[1px] border-gray-200 rounded-md">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2">
                    <BookOpenIcon />
                    Reading
                  </div>
                  <p>Auto</p>
                </div>
                <Slider defaultValue={[40]} max={100} step={25} />
              </div>
              <div className="p-2 border-[1px] border-gray-200 rounded-md">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2">
                    <HeadphonesIcon />
                    Listening
                  </div>
                  <p>Auto</p>
                </div>
                <Slider defaultValue={[40]} max={100} step={25} />
              </div>
              <div className="p-2 border-[1px] border-gray-200 rounded-md">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2">
                    <MicIcon />
                    Speaking
                  </div>
                  <p>Auto</p>
                </div>
                <Slider defaultValue={[40]} max={100} step={25} />
              </div>
              <div className="p-2 border-[1px] border-gray-200 rounded-md">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2">
                    <PencilLineIcon />
                    Writing
                  </div>
                  <p>Auto</p>
                </div>
                <Slider defaultValue={[40]} max={100} step={25} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start Practice Mode</Button>
          </CardFooter>
        </Card>
        
      </TabsContent>
      <TabsContent value="exam">
        <Card className="bg-blue-200">
          <CardHeader>
            <CardTitle className="flex justify-between">
              Exam Mode{" "}
              <div className="flex items-center space-x-2">
                <Switch id="auto-mode" />
                <Label htmlFor="auto-mode">Auto</Label>
              </div>
            </CardTitle>
            <CardDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, corporis?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <BookOpenIcon />
                <p>: {reading} %</p>
              </div>
              <div className="flex gap-2">
                <HeadphonesIcon />
                <p>: {listening} %</p>
              </div>
              <div className="flex gap-2">
                <MicIcon />
                <p>: {speaking} %</p>
              </div>
              <div className="flex gap-2">
                <PencilLineIcon />
                <p>: {writing} %</p>
              </div>
            </div>
            <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <p>ควรใช้เวลาต่อข้อไม่เกิน: 30 วินาที</p>
              <p>20 ข้อควรใช้เวลาไม่เกิน: 10 วินาที</p>
            </div>
                <div className="p-2 border-[1px] border-gray-200 rounded-md">
                  <RadioGroup defaultValue="option-one" className="flex justify-between">
                    <div className="flex items-center space-x-2">
                    <AlarmClockIcon />
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">10 นาที</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">20 นาที</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="infinity" id="option-two" />
                      <Label htmlFor="option-two">infinity</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="p-2 border-[1px] border-gray-200 rounded-md">
                  <RadioGroup defaultValue="option-one" className="flex justify-between">
                    <div className="flex items-center space-x-2">
                    <ListOrderedIcon/>
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">10 ข้อ</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">20 ข้อ</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="infinity" id="option-two" />
                      <Label htmlFor="option-two">infinity</Label>
                    </div>
                  </RadioGroup>
                </div>
            </div>
            <div className="mt-10 space-y-2">
              <div className="p-2 border-[1px] border-gray-200 rounded-md">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2">
                    <BookOpenIcon />
                    Reading
                  </div>
                  <p>Auto</p>
                </div>
                <Slider defaultValue={[40]} max={100} step={25} />
              </div>
              <div className="p-2 border-[1px] border-gray-200 rounded-md">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2">
                    <HeadphonesIcon />
                    Listening
                  </div>
                  <p>Auto</p>
                </div>
                <Slider defaultValue={[40]} max={100} step={25} />
              </div>
              <div className="p-2 border-[1px] border-gray-200 rounded-md">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2">
                    <MicIcon />
                    Speaking
                  </div>
                  <p>Auto</p>
                </div>
                <Slider defaultValue={[40]} max={100} step={25} />
              </div>
              <div className="p-2 border-[1px] border-gray-200 rounded-md">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2">
                    <PencilLineIcon />
                    Writing
                  </div>
                  <p>Auto</p>
                </div>
                <Slider defaultValue={[40]} max={100} step={25} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start Exam Mode</Button>
          </CardFooter>
        </Card>
        </TabsContent>
    </Tabs>
  );
};

export default Mode;
