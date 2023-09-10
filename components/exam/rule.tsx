import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

type Props = {}

const Rule = (props: Props) => {
  return (
    <div className='bg-white text-center max-w-xl mx-auto p-10 rounded-2xl shadow-lg'>
        <div className='flex justify-center mb-4'>
        <Image
                      src="/rule1.png"
                      alt="study picture"
                      className="dark:invert"
                      width={350}
                      height={350}
                      priority
                    />
        </div>
        <div>
            <h1 className='uppercase text-4xl font-bold mb-4'>rule1</h1>
            <h3 className='font-semibold mb-16'> Description Description Description </h3>
            <Button className='rounded-full bg-orange-400 min-w-[400px] '>Get Started</Button>

        </div>
    </div>
  )
}

export default Rule