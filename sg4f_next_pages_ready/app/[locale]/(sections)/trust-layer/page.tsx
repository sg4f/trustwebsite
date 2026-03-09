export const runtime = 'edge'

export default function Page(){
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Trust Layer — Methods (v1.1)</h2>
      <p className="kicker">Public high‑level note. Detailed architecture shared under NDA.</p>
      <div className="border rounded-lg overflow-hidden" style={{height:'70vh'}}><iframe src="/docs/SG4F_Trust_Layer_Methods_Note_v1.1.html" title="Trust Layer Methods" className="w-full h-full" /></div>
      <a className="btn" href="/docs/SG4F_Trust_Layer_Methods_Note_v1.1.html" target="_blank" rel="noopener">Open full screen</a>
    </div>
  )
}
