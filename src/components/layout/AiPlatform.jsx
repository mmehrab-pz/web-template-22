import React from 'react'
import MiniTitle from '../ui/MiniTitle'
import TitleTwo from '../ui/TitleTwo'
import BoxModelOne from '../ui/BoxModelOne'
import pack1 from "@/../public/images/pack1.png";
import pack2 from "@/../public/images/pack2.png";
import pack3 from "@/../public/images/pack3.png";
import pack5 from "@/../public/images/pack5.png";
import pack6 from "@/../public/images/pack6.png";


export default function AiPlatform() {
  return (
    <section className='w-full flex flex-col items-center mt-[120px]'>
        <MiniTitle txt='all ai platform' />
        <TitleTwo first='all possible Generative ai solutions at one place' highlight='' last='' />
        <div className=' w-full mt-5 flex justify-center gap-5 flex-wrap px-5'>
            <BoxModelOne src={pack2} title="ai image generator" />
            <BoxModelOne src={pack5} title="text to audio" />
            <BoxModelOne src={pack3} title="ai code generator" />
            <BoxModelOne src={pack6} title="speech to text" />
            <BoxModelOne src={pack1} title="ai writing tools" />
        </div>
    </section>
  )
}
