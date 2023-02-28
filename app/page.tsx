import React from 'react'
import { SunIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/outline';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
 
function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
      <h1 className='text-5xl font-bold mb-20'> Chatverze</h1>
 
      <div className="flex space-x-2">
        <div className="">
            <div className="flex flex-col items-center justify-center mb-5">
                {/* sun icon */}
                <SunIcon className="h-8 w-8"/>
                <h2>Examples</h2>
            </div>
 
            <div className="space-y-2">
                <p className='infoText'>"Explain something to me?"</p>
                <p className='infoText'>"What is the difference between a dog and a cat?"</p>
                <p className='infoText'> "What is the color of sun?"</p>
            </div>
        </div>
 
        <div className="">
            <div className="flex flex-col items-center justify-center mb-5">
                {/* sun icon */}
                <BoltIcon className="h-8 w-8"/>
                <h2>Examples</h2>
            </div>
 
            <div className="space-y-2">
                <p className='infoText'>"Explain something to me?"</p>
                <p className='infoText'>"What is the difference between a dog and a cat?"</p>
                <p className='infoText'> "What is the color of sun?"</p>
            </div>
        </div>
 
        <div className="">
            <div className="flex flex-col items-center justify-center mb-5">
                {/* sun icon */}
                <ExclamationTriangleIcon className="h-8 w-8"/>
                <h2>Examples</h2>
            </div>
 
            <div className="space-y-2">
                <p className='infoText'>"Explain something to me?"</p>
                <p className='infoText'>"What is the difference between a dog and a cat?"</p>
                <p className='infoText'> "What is the color of sun?"</p>
            </div>
        </div>
 
      </div>
    </div>
  )
}
 
export default HomePage