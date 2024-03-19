import React from 'react'
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import { Carousel } from 'flowbite-react';
function Home() {
  return (
    <div>

<div className="h-56  mt-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="..." />
        <img src="https://img.freepik.com/premium-photo/nature-beauty-captured-through-tranquil-mountain-scene-generative-ai_188544-9127.jpg" alt="..." />
        <img src="https://img.freepik.com/premium-photo/wonderful-nature-landscape-beautiful-sky-land-clouds-unique-colors_997220-431.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697155200&semt=ais" alt="..." />
        <img src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" alt="..." />
        <img src="https://img.freepik.com/premium-photo/beautiful-pictures-beautiful-landscapes-great-design-any-purposes-beautiful-wallpaper-white-color-background-green-nature_155807-9598.jpg" alt="..." />
      </Carousel>
    </div>

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

    {/* ========= accordian========= */}
    <div className=' mt-7 mb-5'>
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>What is Flowbite?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
    </div>
  )
}

export default Home
