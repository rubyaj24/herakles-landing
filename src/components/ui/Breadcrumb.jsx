import React from 'react'

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
      <ol className="inline-flex items-center space-x-2">
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={idx} className="inline-flex items-center">
              {!isLast && it.href ? (
                <a href={it.href} className="hover:underline">{it.label}</a>
              ) : (
                <span aria-current={isLast ? 'page' : undefined}>{it.label}</span>
              )}
              {!isLast && <span className="mx-2 text-gray-400">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
