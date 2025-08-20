import React from 'react'

const Navbar = (props) => {
    
  return (
    <div>
        <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0px 40px"}}>
        <h1 style={{fontSize:"36px",color:"gold"}}>{props.logoText}</h1>
            <ul style={{display:"flex",gap:"20px"} }>
          {props.links.map((link, index) => (
            <li style={{listStyle:"none", fontSize:"22px"}} key={index}>
              <a style={{textDecoration:"none" ,color:"gold",fontWeight:"600"}} href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
        </nav>
    </div>
  )
}

export default Navbar