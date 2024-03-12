import Link from 'next/link'
import React from 'react'



export default function Header() {
  return (
    
    <>
    <nav className='flex gap-3 mb-5 justify-center mt-3 mx-auto rounded-lg px-3 py-4 text-md bg-slate-600 font-semibold md:text-xl'>
        {/* <div  className='md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div> */}
        <div className='flex gap-2'>
        <Link href={'CookingPage'}>Cooking</Link>
        <Link href={'DictionaryPage'}>Dictionary</Link>
        <Link href={'WeatherPage'}>Weather</Link>
        <Link href={'NutritionPage'}>Nutrition</Link>
        <Link href={'HistoryPage'}>History</Link>
        </div>
      
    </nav>
    </>
  )
}
