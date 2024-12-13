import React from 'react'
import SubFooter from '@/components/SubFooter'

interface CartLayoutProps {
    children : React.ReactNode
}

const CartLayout:React.FC<CartLayoutProps> = (props) => {
  return (
    <div>
        {props.children}
        <SubFooter />
    </div>
  )
}

export default CartLayout