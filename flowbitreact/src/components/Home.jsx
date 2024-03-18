import React from 'react'
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';

function Home() {
  return (
    <div>
         <Card href="#" className="max-w-sm mt-4 ms-3" >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button outline gradientDuoTone="purpleToBlue" className=' mt-7 focus:outline-none'>
        Purple to Blue
      </Button>
    </Card>
    </div>
  )
}

export default Home
