import { User } from 'lucide-react'
import React from 'react'

const NavHeader = () => {
  return (
    <div className='nav-header'>
          <div className='info'>
           
            <div className="icons-user">
                <User />
                <span>jassim</span>
            </div>
            <div className="search">
           {""}
            </div>
        </div>
        <div className='controll'>
            <span>لوحة التحكم</span>
        </div>
      
    </div>
  )
}

export default NavHeader