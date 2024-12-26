'use client'

import { useEffect, useState } from "react"

export default function LanternPointer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: any) => {
    setMousePos({ x: event.clientX, y: event.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'>
      <div
        style={{
          position: 'fixed',
          top: mousePos.y,
          left: mousePos.x,
          width: '800px',
          height: '800px',
          borderRadius: '800px',
          background: 'radial-gradient(circle, rgba(29,78,216,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: '9999',
          transform: 'translate(-50%, -50%)',
        }}></div>
    </div>
  )
}
