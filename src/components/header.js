import React from "react"

export default function Header(props) {
  return (
    <div>
      <h1>{props.headerText}</h1>
      <h2>{props.arbitraryPhrase}</h2>
    </div>
  )
}
