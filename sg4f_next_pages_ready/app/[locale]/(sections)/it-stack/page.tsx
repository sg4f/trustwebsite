export const runtime = 'edge'

export default function Page(){
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Identity‑First IT Stack — Poster + Runbook</h2>
      <p className="kicker">Okta SSO, Splunk & ArcGIS integration, Cloudflare WAF/CDN/Pages/Tunnel, governance with Drive/Box/Vault.</p>
      <div className="border rounded-lg overflow-hidden" style={{height:'70vh'}}><iframe src="/docs/SG4F_IT_Stack_2026.html" title="IT Stack" className="w-full h-full" /></div>
      <a className="btn" href="/docs/SG4F_IT_Stack_2026.html" target="_blank" rel="noopener">Open full screen</a>
    </div>
  )
}
