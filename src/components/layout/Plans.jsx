
import React from 'react'
import MiniTitle from '../ui/MiniTitle'
import Link from 'next/link'

export default function Plans() {
  return (
    <section className='w-full text-center'>
        <MiniTitle txt='ai plans' />
        <h2 className='text-white capitalize font-sora font-medium text-[40px]'>Flexible Pricing Plans That Your Needs</h2>
        <div className='w-full mt-[60px] flex justify-center flex-wrap px-5 gap-5 pb-[120px] relative'>
            <div className='absolute bottom-40 left-20 w-[1180px] h-[545px] opacity-[0.15] blur-[75px] bg-[linear-gradient(98deg,#00E3F2_5.55%,#FF9B00_32.85%,#FF2828_57.49%,#E6F85E_86.75%)] z-1'></div>
            <div className='absolute bottom-10 left-50 w-[1180px] h-[545px] opacity-[0.1] blur-[75px] bg-[linear-gradient(98deg,#00E3F2_5.55%,#FF9B00_32.85%,#FF2828_57.49%,#E6F85E_86.75%)] z-1'></div>
            {/* ----------------- */}
            <div className='w-full lg:w-[425px] rounded-2xl border relative z-2 border-[#3C3C77] bg-[#0F0F24] px-10 pt-8 pb-[52px] duration-500 hover:border-[#ACDA49] text-start overflow-hidden group'>
                <span className='w-[107px] h-[107px] bg-[linear-gradient(180deg,#6243FF_0%,#FF2828_100%)] opacity-[0.8] absolute bottom-30 right-20 blur-[90px] -z-1 scale-0 duration-500 group-hover:scale-100'></span>
                <div>
                    <h3 className='font-sora font-semibold text-[24px] text-[#426bff] capitalize'>free</h3>
                </div>
                <h2 className='font-sora font-semibold text-[56px] text-white mt-4 mb-5'>$00</h2>
                <Link href='/mehrab' className='group/button py-5 relative px-10 bg-[#15152c] w-fit flex border border-[#3C3C77] rounded-lg font-sora capitalize font-medium text-white shadow-[0px_20px_24px_-10px_#0B042F]'>
                    <span className='w-full h-full flex absolute top-0 left-0 rounded-lg bg-[linear-gradient(211deg,#8F79FF_13.4%,#426BFF_118.74%)] z-1 origin-center scale-0 duration-500 group-hover/button:scale-100'></span>
                    <p className='z-2'>start for free</p>
                </Link>
                <p className='text-[14px] text-[#a1aac9] font-sora mt-4'>*Billed monthly until cancelled</p>
                <ul className='w-full mt-10'>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        1000 words/month
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        Generate 10+ AI images
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        15+ Text To Speech
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        20+ AI Code Generator
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        5+ AI-powered Chat
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        0+ Speech to Text
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        Basic Support
                    </li>
                </ul>
            </div>
            {/* ----------------- */}
            <div className='w-full lg:w-[425px] rounded-2xl relative z-2 border border-[#3C3C77] bg-[#0F0F24] px-10 pt-8 pb-[52px] duration-500 hover:border-[#ACDA49] text-start group'>
                <span className='w-[107px] h-[107px] bg-[linear-gradient(180deg,#6243FF_0%,#FF2828_100%)] opacity-[0.8] absolute bottom-30 right-20 blur-[90px] -z-1 scale-0 duration-500 group-hover:scale-100'></span>
                <div className='flex justify-between items-center'>
                    <h3 className='font-sora font-semibold text-[24px] text-[#426bff] capitalize'>starter</h3>
                    <h6 className='font-sora font-semibold text-[14px] text-[#ff6c1e] capitalize'>popular</h6>
                </div>
                <h2 className='font-sora font-semibold text-[56px] text-white mt-4 mb-5'>$29</h2>
                <Link href='/mehrab' className='group/button py-5 relative px-10 bg-[#15152c] w-fit flex border border-[#3C3C77] rounded-lg font-sora capitalize font-medium text-white shadow-[0px_20px_24px_-10px_#0B042F]'>
                    <span className='w-full h-full flex absolute top-0 left-0 rounded-lg bg-[linear-gradient(211deg,#8F79FF_13.4%,#426BFF_118.74%)] z-1 origin-center scale-0 duration-500 group-hover/button:scale-100'></span>
                    <p className='z-2'>start for free</p>
                </Link>
                <p className='text-[14px] text-[#a1aac9] font-sora mt-4'>*Billed monthly until cancelled</p>
                <ul className='w-full mt-10'>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        10,000 words
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        Generate 100+ AI images
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        50+ Text To Speech
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        50+ AI Code Generator
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        5+ AI-powered Chat
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        Unlimited Speech to Text
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        24/7 Support
                    </li>
                </ul>
            </div>
            {/* ----------------- */}
            <div className='w-full lg:w-[425px] rounded-2xl relative z-2 border border-[#3C3C77] bg-[#0F0F24] px-10 pt-8 pb-[52px] duration-500 hover:border-[#ACDA49] text-start group'>
                <span className='w-[107px] h-[107px] bg-[linear-gradient(180deg,#6243FF_0%,#FF2828_100%)] opacity-[0.8] absolute bottom-30 right-20 blur-[90px] -z-1 scale-0 duration-500 group-hover:scale-100'></span>
                <div className='flex justify-between items-center'>
                    <h3 className='font-sora font-semibold text-[24px] text-[#426bff] capitalize'>Enterprise</h3>
                </div>
                <h2 className='font-sora font-semibold text-[56px] text-white mt-4 mb-5'>$125</h2>
                <Link href='/mehrab' className='group/button py-5 relative px-10 bg-[#15152c] w-fit flex border border-[#3C3C77] rounded-lg font-sora capitalize font-medium text-white shadow-[0px_20px_24px_-10px_#0B042F]'>
                    <span className='w-full h-full flex absolute top-0 left-0 rounded-lg bg-[linear-gradient(211deg,#8F79FF_13.4%,#426BFF_118.74%)] z-1 origin-center scale-0 duration-500 group-hover/button:scale-100'></span>
                    <p className='z-2'>start for free</p>
                </Link>
                <p className='text-[14px] text-[#a1aac9] font-sora mt-4'>*Billed $180 annually</p>
                <ul className='w-full mt-10'>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        30,000 words
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        Generate 500+ AI images
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        100+ Text To Speech
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        100+ AI Code Generator
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        Unlimiited AI-powered Chat
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center mb-3'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        Unlimited Speech to Text
                    </li>
                    <li className='text-[white] capitalize font-sora flex items-center'>
                        <span className='w-1.5 h-1.5 flex bg-white mr-2.5'></span>
                        24/7 Support
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}
