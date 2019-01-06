import React from 'react'

export default function Header() {
  return (
    <div>
      <h1 style={headerStyle}>Todo List </h1>
    </div>
  )
}
const headerStyle = {
    background: '#333',
    fontSize: '2rem',
    color: '#f3f3f3',
    textAlign: 'center',
    padding: '1rem auto'
}