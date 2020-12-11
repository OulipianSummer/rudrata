import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
 
export default function Win(){
  const { width } = useWindowSize();
  return (
    <Confetti
      className='confetti'
      width={width}
      height={document.body.clientHeight}
    />
  )
}
 