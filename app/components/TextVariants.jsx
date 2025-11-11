import React from 'react'

export default function TextVariants({ variant = 'h1', children , className=''}) {

    const textItem = [
    {
        tag: 'h1', className: 'text-4xl font-bold'
    },
    {
        tag: 'h2', className: 'text-5xl font-bold'
    },
    {
        tag: 'h3', className: 'text-4xl font-bold'
    },
 
]

const textItemTag = textItem.find(item => item.tag === variant)

const TextItemTag = textItemTag.tag

  return (
    
    <TextItemTag className={`${textItemTag.className} ${className}`}>
        {children}
    </TextItemTag>
  )
}








