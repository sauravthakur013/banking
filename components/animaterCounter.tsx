import React from 'react'
import CountUp from 'react-countup';

const AnimaterCounter = ({amount = 0}:any) => {
  return (
    <div>
       <CountUp end={amount} 
            decimals={2}
            prefix='$'
            duration={2.5}      
       />
    </div>
  )
}

export default AnimaterCounter;