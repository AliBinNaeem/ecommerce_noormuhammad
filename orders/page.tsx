import requiredUser from '@/hooks/requiredUser';
import React from 'react'

const OrdersPage = async () => {
    await requiredUser();
    
   
  return (
    <div>
      OrderPAge
    </div>
  )
}

export default OrdersPage
