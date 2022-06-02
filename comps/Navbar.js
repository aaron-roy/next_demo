import Link from 'next/link'
import React from 'react'
 

const Navbar = () => {
    
    
    return ( 
        <div className='nav-body'>
            <nav>
                
                    <Link href="/"><a className='nav-link'>Home</a></Link>
                    <Link href="/about"><a className='nav-link'>About</a></Link>
                    <Link href="/projects"><a className='nav-link'>Projects</a></Link>
    
            </nav>

            
        </div>
        
     );
}
 
export default Navbar;
