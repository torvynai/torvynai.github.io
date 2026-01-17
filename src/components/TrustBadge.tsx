import React from 'react'
import { Server, ShieldCheck } from 'lucide-react'

export default function TrustBadge(){
  return (
    <div className="trust-badge">
      <Server className="w-4 h-4" />
      <div>
        <div style={{fontSize:12,color:'var(--slate)'}}>On-Premise</div>
        <div style={{fontSize:13}}>Your data never leaves your network</div>
      </div>
    </div>
  )
}
