import React from 'react';
import SubFooter from '@/components/SubFooter';

interface ContactLayoutProps {
    children : React.ReactNode
}

const ContactLayout: React.FC<ContactLayoutProps> = (props) => {
  return (
    <div>

        {props.children}
        {/* Sub Footer */}
        <SubFooter />
        
    </div>
  )
}

export default ContactLayout;