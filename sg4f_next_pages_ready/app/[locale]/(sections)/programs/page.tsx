export const runtime = 'edge'

const vias = [
  { name: 'Safe Sport Hour', href: '#' },
  { name: 'Wellbeing Session', href: '#' },
  { name: 'Mobile Wellness Unit', href: '#' },
  { name: 'Youth Certification', href: '#' },
  { name: 'Green Shade m²', href: '#' },
  { name: 'Market & Artisan Slot', href: '#' },
]

export default function Page(){
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Verified Impact Assets (VIAs)</h2>
      <p className="kicker">Clickable items below can later point to public summaries or partner packs.</p>
      <div className="grid-3">
        {vias.map(v => (
          <a key={v.name} href={v.href} className="card hover:shadow">
            <h3 className="font-semibold">{v.name}</h3>
            <p className="kicker mt-1">Outcome‑aligned; evidence‑backed.</p>
          </a>
        ))}
      </div>
    </div>
  )
}
