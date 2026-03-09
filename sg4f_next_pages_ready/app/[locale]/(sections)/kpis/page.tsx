export const runtime = 'edge'

export default function Page(){
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">KPI Master (v1.1) — All Parameters</h2>
      <p className="kicker">Filterable list of indicators (public vs portal‑only). Public, high‑level view.</p>
      <div className="border rounded-lg overflow-hidden" style={{height:'70vh'}}><iframe src="/docs/SG4F_KPI_Master_v1.1_AllParams.html" title="KPI Master" className="w-full h-full" /></div>
      <a className="btn" href="/docs/SG4F_KPI_Master_v1.1_AllParams.html" target="_blank" rel="noopener">Open full screen</a>
    </div>
  )
}
