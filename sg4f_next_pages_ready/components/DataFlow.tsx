'use client'
import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import animation from '@/public/animations/sg4f_dataflow_demo.json'

export default function DataFlowBG(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Lottie animationData={animation} loop autoplay style={{ opacity: 0.32 }} />
    </div>
  )
}
