'use client'
import TypewriterComponent from 'typewriter-effect'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const LandingHero = () => {
    return (
        <div className='text-slate-700 font-bold py-20 text-center space-y-5  '>
               
            <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
                <h1 className='uppercase'>Learn Cloud</h1>
                <div className="text-transparent bg-clip-text bg-[#1C5BB7]">
                    <TypewriterComponent
                    options={{
                       strings: [
                        'Master TOEIC!',
                        'TOEIC Practice Test',
                       ] ,
                       autoStart: true,
                       loop: true
                    }} />
                </div>

            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
            Sharpen your skills and achieve your highest score with our TOEIC Practice Test App.
            </div>
            <div>
                <Link href='/quiz'>
                    <Button variant='default' className='bg-[#1C5BB7] md:text-lg p-4 md:p-6 rounded-full font-semibold' >
                    Start Practicing!
                    </Button>
                    
                </Link>
            </div>
            <div className='text-zince-400 text-xs md:text-sm font-normal'>
                No credit card required.

            </div>
        </div>
    )
}