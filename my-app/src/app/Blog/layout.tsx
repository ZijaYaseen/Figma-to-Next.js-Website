import React from 'react'
import SubFooter from '@/components/SubFooter';

interface blogLayoutProps {
    children : React.ReactNode;
}

const Bloglayout:React.FC<blogLayoutProps> = (props) => {
  return (
   <div>
    {props.children}
    <SubFooter />
   </div>
  )
}

export default Bloglayout