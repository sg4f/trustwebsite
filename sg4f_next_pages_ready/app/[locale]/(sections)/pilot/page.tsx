export const runtime = 'edge'

export default function Page(){
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Level Up Senegal — pilot</h2>
      <p>Measurable pilot focused on utilisation, jobs, solar coverage and youth training, with a transition to a Community Management Committee.</p>
      <div className="grid-2">
        <div className="card"><h3 className="font-semibold">24‑month milestones</h3><ul className="list-disc list-inside text-sm mt-2"><li>100 youth trained (≥ 50% women)</li><li>40 local jobs</li><li>80% utilisation</li><li>Energy autonomy where partner‑led solar is deployed</li></ul></div>
        <a className="card hover:shadow" href="#">
          <h3 className="font-semibold">Pilot brief (PDF)</h3>
          <p className="kicker mt-1">Add the PDF link here once uploaded to /public.</p>
        </a>
      </div>
    </div>
  )
}
