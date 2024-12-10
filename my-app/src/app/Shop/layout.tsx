import React from 'react';
interface ShopLayoutProps {
    children : React.ReactNode
}

const ShopLayout: React.FC<ShopLayoutProps> = (props) => {
  return (
    <div>

        {props.children}
        
    </div>
  )
}

export default ShopLayout