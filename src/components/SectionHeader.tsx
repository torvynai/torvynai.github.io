import React from 'react'

export default function SectionHeader({title, subtitle}:{title:string, subtitle?:string}){
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{title}</h2>
      {subtitle && <p className="text-base text-gray-600 max-w-3xl leading-relaxed">{subtitle}</p>}
    </div>
  )
}
