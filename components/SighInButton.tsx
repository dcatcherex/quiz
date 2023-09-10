'use client'

import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

type Props = {
    text:string
}

const SighInButton = ({text}: Props) => {
  return (
    <Button className='rounded-full bg-orange-400' onClick={()=>{
        signIn('google').catch(console.error)
        console.log(text)
    
    }}>{text}</Button>
  )
}

export default SighInButton