import { useState } from 'react';
//
import GridIIcon from '@/assets/icons/grid.svg';
import Logo from '@/assets/images/logo/logo.svg';
import Toggle from '@/components/Theme/Toggle';

function App() {
  return (
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 py-6 sm:py-12 transition-all'>
      <img src={Logo} alt='' className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2' width='1308' />
      <div className={`absolute inset-0 bg-[url(${GridIIcon})] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]`} />
      <div className='relative bg-white dark:bg-gray-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 dark:ring-gray-50/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
        <div className='mx-auto max-w-md'>
          <div className='flex justify-between items-center'>
            <img src={Logo} className='h-6' alt='Tailwind Play' />
            <Toggle/>
          </div>
          <div className='divide-y divide-gray-300/50 dark:divide-gray-50/50'>
            <div className='space-y-6 py-8 text-base leading-7 text-gray-600 dark:text-gray-100'>
              <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
              <ul className='space-y-4'>
                <li className='flex items-center'>
                  <svg className='h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2' strokeLinecap='round' strokeLinejoin='round'>
                    <circle cx='12' cy='12' r='11' />
                    <path d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9' fill='none' />
                  </svg>
                  <p className='ml-4'>
                    Customizing your
                    <code className='text-sm font-bold text-gray-900 dark:text-sky-200'> tailwind.config.js</code>
                    file
                  </p>
                </li>

                <li className='flex items-center'>
                  <svg className='h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2' strokeLinecap='round' strokeLinejoin='round'>
                    <circle cx='12' cy='12' r='11' />
                    <path d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9' fill='none' />
                  </svg>
                  <p className='ml-4'>
                    Extracting classes with
                    <code className='text-sm font-bold text-gray-900 dark:text-sky-200'> @apply</code>
                  </p>
                </li>
                <li className='flex items-center'>
                  <svg className='h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2' strokeLinecap='round' strokeLinejoin='round'>
                    <circle cx='12' cy='12' r='11' />
                    <path d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9' fill='none' />
                  </svg>
                  <p className='ml-4'>Code completion with instant preview</p>
                </li>
              </ul>
              <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
            </div>
            <div className='pt-8 text-base font-semibold leading-7'>
              <p className='text-gray-900 dark:text-gray-50'>Want to dig deeper into Tailwind?</p>
              <p>
                <a href='https://tailwindcss.com/docs' className='text-sky-500 hover:text-sky-600'>
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
