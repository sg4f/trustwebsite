'use client'
import dynamic from 'next/dynamic'
const Vitrine = dynamic(() => import('@/components/Vitrine'), { ssr: false })
export default function VitrineClient(){ return <Vitrine/> }
