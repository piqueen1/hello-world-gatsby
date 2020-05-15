import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: 'teal' }}>
      <Header headerText="You contacted me!  Now go home." />
      <Link to="/" >Take me home country toads</Link>
      <p>Send me a message!</p>
    </div>
    )
}