export const runtime = 'edge'

export default function Page(){
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">The Verification Loop (high‑level)</h2>
      <div className="note">
        <p><strong>Co‑design first:</strong> public, high‑level flow. Detailed architecture shared under NDA.</p>
      </div>
      <div className="grid-2">
        <div className="card"><h3 className="font-semibold">Capture</h3><p className="kicker">Activities, attendance, screenings; privacy by design.</p></div>
        <div className="card"><h3 className="font-semibold">Co‑design Review</h3><p className="kicker">Local oversight validates practices & logs.</p></div>
        <div className="card"><h3 className="font-semibold">Action & Safety</h3><p className="kicker">Issues trigger workflows; closure proof archived.</p></div>
        <div className="card"><h3 className="font-semibold">Verify & Publish</h3><p className="kicker">Baseline/3/6/12‑month checkpoints; executive summaries.</p></div>
      </div>
    </div>
  )
}
