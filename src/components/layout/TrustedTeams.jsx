import Image from 'next/image'
import React from 'react'
import team1 from "@/../public/images/team1.png"
import team2 from "@/../public/images/team2.png"
import team3 from "@/../public/images/team3.png"
import team4 from "@/../public/images/team4.png"
import team5 from "@/../public/images/team5.png"
import team6 from "@/../public/images/team6.png"
import team7 from "@/../public/images/team7.png"
import team8 from "@/../public/images/team8.png"
import team9 from "@/../public/images/team9.png"
import team10 from "@/../public/images/team10.png"
import team11 from "@/../public/images/team11.png"
import team12 from "@/../public/images/team12.png"
import StarLtr from '../ui/stars/StarLtr'
import StarRotate from '../ui/stars/StarRotate'

export default function TrustedTeams() {
  return (
    <section className='w-full pb-[120px] relative'>
        <figure className='absolute top-2 right-120'>
            <StarLtr />
        </figure>
        <figure className='absolute top-2 left-120'>
            <StarRotate />
        </figure>
        <figure className='absolute bottom-10 left-210'>
            <StarRotate />
        </figure>
        <h3 className='font-sora font-medium text-[24px] text-[white] text-center'>Trusted by <span className='text-[#426bff]'>10.8+</span> teams, agencies and freelancers.</h3>
        <div className='w-full mt-[50px]'>
            <div className='w-full flex justify-center gap-10 flex-wrap'>
                <figure className=''>
                    <Image src={team1} alt='team1' />
                </figure>
                <figure className=''>
                    <Image src={team2} alt='team2' />
                </figure>
                <figure className=''>
                    <Image src={team3} alt='team3' />
                </figure>
                <figure className=''>
                    <Image src={team4} alt='team4' />
                </figure>
                <figure className=''>
                    <Image src={team5} alt='team5' />
                </figure>
                <figure className=''>
                    <Image src={team6} alt='team6' />
                </figure>
            </div>
            <div className='w-full flex justify-center gap-10 flex-wrap mt-10'>
                <figure className=''>
                    <Image src={team7} alt='team7' />
                </figure>
                <figure className=''>
                    <Image src={team8} alt='team8' />
                </figure>
                <figure className=''>
                    <Image src={team9} alt='team9' />
                </figure>
                <figure className=''>
                    <Image src={team10} alt='team10' />
                </figure>
                <figure className=''>
                    <Image src={team11} alt='team11' />
                </figure>
                <figure className=''>
                    <Image src={team12} alt='team12' />
                </figure>
            </div>
        </div>
    </section>
  )
}
