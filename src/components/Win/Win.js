import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
 
export default function Win(){
  const { width, height } = useWindowSize()
  return (
    <Confetti
      className='confetti'
      width={width}
      height={height}
    />
  )
}
 