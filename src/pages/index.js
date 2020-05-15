import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return ( 
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Press Me Baby</Link>
      <h1 style={{ color: `purple`, fontSize: `72px` }}>Hello Self!</h1>
      <p> Really life is quite wonderful whichever way you go.</p>
      <img src="https://i.pinimg.com/236x/97/5f/79/975f79089e9ebfa65837bce4a9b8afd2.jpg" alt="" />
    </div>
  )
}