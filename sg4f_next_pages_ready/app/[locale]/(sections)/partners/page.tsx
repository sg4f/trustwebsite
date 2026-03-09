export const runtime = 'edge'

export default function Page(){
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Partner with SG4F</h2>
      <p>We co‑design with communities and independently verify delivery. To discuss partnership or sponsorship of VIAs, contact us.</p>
      <div className="grid-2">
        <a className="card hover:shadow" href="mailto:info@sportgrounds4future.org?subject=Partner%20with%20SG4F">
          <h3 className="font-semibold">Email</h3>
          <p className="kicker mt-1">info@sportgrounds4future.org</p>
        </a>
        <a className="card hover:shadow" href="#">
          <h3 className="font-semibold">TVV Brief (PDF)</h3>
          <p className="kicker mt-1">We can link the Trust Village Vaud one‑pager here.</p>
        </a>
      </div>
    </div>
  )
}
