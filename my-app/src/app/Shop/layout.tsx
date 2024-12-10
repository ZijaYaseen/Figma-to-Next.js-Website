import React from 'react';
import SubFooter from '@/components/SubFooter';

interface ShopLayoutProps {
    children : React.ReactNode
}

const ShopLayout: React.FC<ShopLayoutProps> = (props) => {
  return (
    <div>

        {props.children}
         {/* Sub footer*/}
         <SubFooter />

    </div>
  )
}

export default ShopLayout