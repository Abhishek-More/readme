import React from 'react'
import './Nav.css'
export default function Nav() {
    return (
        <nav>
          <div>
             <span className='logo'>.read</span>
            <span style={{color:"#6B5DFF"}} className='logo'>me</span>
          </div>
          <div style={{width: "3in"}}/>
          <a className='git-link' href="https://github.com/Abhishek-More/readme" target="_blank" rel='noreferrer'>View on GitHub</a>
          <a className="git-link" href="#" onClick={() => {window.print()}}>Print or Download</a>
        </nav>
    )
}
