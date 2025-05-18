import React from 'react'
import PriceFormatter from './PriceFormatter'

interface Props{
    price: number | undefined
    discount: number | undefined
    className?: string
}
const PriceView = ({ price, discount, className }: Props) => {
  return (
    
      <div className='flex items-center gap-2'>
        <PriceFormatter amount={price} className={className} />
        {price && discount && (
          <PriceFormatter 
          amount={price +( discount * price) /100 } 
          className={'line-through  font-medium text-zinc-500'}
          /> 
        )}
      </div>
    
  )
}

export default PriceView
// https://youtu.be/3hepJA56KF8?t=14992