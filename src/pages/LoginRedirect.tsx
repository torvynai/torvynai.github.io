import React, { useEffect } from 'react'
import appConfig from '../config/appConfig'

export default function LoginRedirect(){
  useEffect(() => {
    document.title = `Platform Login | ${appConfig.companyName} - The Ultimate Automation Provider`
  }, [])
  return (
    <div className="container py-24 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <h2 className="text-xl font-semibold">Platform Login</h2>
        <p className="mt-2 text-gray-600">Access the Torvyn platform. You will be redirected to the application login.</p>
        <div className="mt-6">
          <a href="#" onClick={(e)=>{e.preventDefault(); window.location.href = '/app/login'}} className="px-5 py-3 bg-primary text-white rounded-md">Go to Platform Login</a>
        </div>
        <div className="mt-4 text-sm text-gray-500">If your organization has a custom URL, use that login link instead.</div>
      </div>
    </div>
  )
}
