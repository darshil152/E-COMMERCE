import React from 'react'

export default function Cart({dataParentToChild}) {
  console.log({dataParentToChild})
  return (
    <div>
      <h2>{dataParentToChild}</h2>
    </div>
  )
}
