'use client'
import { motion } from 'framer-motion'

const tiles = [
  { label: 'MoU', text: 'New partnership recorded — review' },
  { label: 'Impact PDF', text: 'Monthly impact file — open' },
  { label: 'Safety', text: 'Incident resolved — closure proof' },
  { label: 'Attendance', text: 'Weekly participation — summary' },
  { label: 'Uptime', text: 'Evening access context — OK' },
  { label: 'Evidence', text: 'Artefacts archived — view' }
]

export default function Vitrine(){
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {tiles.map((t,i) => (
        <motion.div
          key={i}
          className="border border-slate/20 rounded-lg p-4 bg-white shadow-sm"
          initial={{opacity:0, y:10}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay: i * 0.1}}
        >
          <div className="uppercase tracking-wide text-sky-500 font-extrabold text-xs">{t.label}</div>
          <div className="mt-1 text-slate-700">{t.text}</div>
        </motion.div>
      ))}
    </div>
  )
}
