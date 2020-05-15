import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
      <Header headerText="It's pretty cool"  arbitraryPhrase="especially when you're thinking it's hard and then you logra, you reach your destination"/>
      <p>Such wow. Very React.</p>
    </div>
  )
}