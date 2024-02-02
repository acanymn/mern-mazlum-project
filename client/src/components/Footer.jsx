import React from "react"

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className="flex justify-center align-bottom mb-5">
        <p style={{color:"#C7C8CC"}}>Copyright © {year}</p>
    </div>
  )
}

// Light Cream : #F2EFE5
// Darker Cream : #E3E1D9
// Light Grey : #E3E1D9
// Darker Grey : #B4B4B8

export default Footer;