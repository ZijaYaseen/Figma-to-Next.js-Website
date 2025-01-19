import React from 'react'
import SubFooter from '@/components/SubFooter'
import Header from '@/components/Header'

interface CheckoutLayoutProps {
    children : React.ReactNode
}

const CheckoutLayout:React.FC<CheckoutLayoutProps> = (props) => {
  return (
    <div>
     
      <Header bgColor="bg-white" shadow='shadow-md' />
  
        {props.children}
        <SubFooter />
    </div>
  )
}

export default CheckoutLayout