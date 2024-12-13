import React from 'react';
import SubFooter from '@/components/SubFooter';

interface AccounLayoutProps {
    children : React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = (props) => {
  return (
    <div>

        {props.children}
        {/* Sub Footer */}
        <SubFooter />
        
    </div>
  )
}

export default AccountLayout;