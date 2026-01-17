import React, { useEffect } from 'react'

export default function LoginRedirect(){
  useEffect(() => {
    document.title = 'Torvyn AI - Platform Login'
  }, [])
  return (
    <div className="bg-midnight min-h-screen container py-24 flex items-center justify-center">
      <div className="glass-card p-12 rounded-xl shadow-lg text-center max-w-md border border-white/5">
        <h2 className="text-2xl font-bold text-white mb-2">Platform Login</h2>
        <p className="mt-4 text-slate text-sm leading-relaxed">Access the Torvyn secure platform. You will be redirected to the application login.</p>
        <div className="mt-8">
          <a href="#" onClick={(e)=>{e.preventDefault(); window.location.href = '/app/login'}} className="inline-block w-full px-5 py-3 bg-primary text-black font-bold rounded-lg hover:bg-opacity-90 transition-all">Go to Platform Login</a>
        </div>
        <div className="mt-6 text-xs text-slate/50">If your organization has a custom domain (e.g., yourcompany.torvyn.com), please use that URL directly.</div>
      </div>
    </div>
  )
}
