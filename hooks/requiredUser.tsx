import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const requiredUser = async () => {
    const user = await currentUser();
  return (
    <div>
      OrdersPage
    </div>
  )
}

export default requiredUser
